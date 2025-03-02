import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { AppContext } from '../context/AppContext'
import { assets } from '../assets/assets'

const Appointments = () => {
  const { docId } = useParams()
  const { doctors, currencySymbol } = useContext(AppContext)
  const [docInfo, setDocInfo] = useState(null)
  const [docSlots, setDocSlots] = useState([])
  const [slotIndex, setSlotIndex] = useState(0)
  const [slotTime, setSlotTime] = useState('')
  const dayOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']

  // Fetch doctor information
  const fetchDocInfo = () => {
    if (!doctors || doctors.length === 0) return
    const doc = doctors.find(doc => doc._id === docId)
    setDocInfo(doc || null)
  }

  // Generate available slots for the next 7 days
  const getAvailableSlot = () => {
    setDocSlots([])
    let today = new Date()
    let allSlots = []

    for (let i = 0; i < 7; i++) {
      let currentDate = new Date(today)
      currentDate.setDate(today.getDate() + i)

      let endTime = new Date(currentDate)
      endTime.setHours(21, 0, 0, 0)

      if (today.getDate() === currentDate.getDate()) {
        currentDate.setHours(currentDate.getHours() > 10 ? currentDate.getHours() + 1 : 10)
        currentDate.setMinutes(currentDate.getMinutes() > 30 ? 30 : 0)
      } else {
        currentDate.setHours(10)
        currentDate.setMinutes(0)
      }

      let timeSlots = []
      while (currentDate < endTime) {
        let formattedTime = currentDate.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
        timeSlots.push({
          dateTime: new Date(currentDate),
          time: formattedTime,
        })
        currentDate.setMinutes(currentDate.getMinutes() + 30)
      }

      allSlots.push(timeSlots)
    }

    setDocSlots(allSlots)
  }

  useEffect(() => {
    fetchDocInfo()
  }, [doctors, docId])

  useEffect(() => {
    if (docInfo) getAvailableSlot()
  }, [docInfo])

  if (!docInfo) {
    return <p>Loading doctor details...</p>
  }

  return (
    <div>
      <div className="flex flex-col sm:flex-row gap-4">
        {/* Doctor Image */}
        <div>
          <img className="bg-primary rounded-lg w-full sm:max-w-72" src={docInfo.image} alt={docInfo.name} />
        </div>

        {/* Doctor Details */}
        <div className="items-center pt-10 px-8 flex-1 border border-gray-400 rounded-lg bg-white mx-2 sm:mx-0 sm:mt-0">
          {/* Doctor Name & Verified Icon */}
          <p className="flex items-center gap-4 text-2xl font-medium text-gray-900">
            {docInfo.name} <img className="w-5" src={assets.verified_icon} alt="Verified" />
          </p>

          {/* Degree, Speciality & Experience */}
          <div className="flex items-center gap-2 text-sm text-gray-600 mt-1">
            <p>{docInfo.degree} - {docInfo.speciality}</p>
            <button className="rounded-full border border-gray-400 px-3 py-1">{docInfo.experience}</button>
          </div>

          {/* About Section */}
          <div className="flex items-center font-medium gap-2 mt-2 text-gray-600">
            About <img className="w-3" src={assets.info_icon} alt="Info" />
          </div>
          <p className="mt-1 text-gray-500 text-sm">{docInfo.about}</p>

          {/* Appointment Fee */}
          <p className="mt-3 font-medium text-gray-500">
            Appointment Fee: <span className='text-gray-700'>{currencySymbol} {docInfo.fees}</span>
          </p>
        </div>
      </div>

      {/* Booking Slots */}
      <div className='sm:ml-72 sm:pl-4 mt-4 font-medium text-gray-700'>
        <p>Booking Slots</p>
        <div className='flex gap-3 items-center w-full overflow-x-scroll mt-4 whitespace-nowrap'>
          {docSlots.length > 0 &&
            docSlots.map((item, index) => (
              <div 
                key={index}
                onClick={() => setSlotIndex(index)} 
                className={`text-center py-6 min-w-16 rounded-full cursor-pointer ${
                  slotIndex === index ? 'bg-primary text-white' : 'border border-gray-200'
                }`}
              >
                <p>{item[0] ? dayOfWeek[item[0].dateTime.getDay()] : ''}</p>
                <p>{item[0] ? item[0].dateTime.getDate() : ''}</p>
              </div>
            ))
          }
        </div>

        {/* Time Slots */}
        <div className='flex items-center gap-3 w-full overflow-x-scroll mt-4 whitespace-nowrap'>
          {docSlots.length > 0 && docSlots[slotIndex]?.map((item, index) => (
            <div key={index} className="flex flex-col items-center">
              <p 
                onClick={() => setSlotTime(item.time)}
                className={`text-sm font-light flex-shrink-0 px-5 py-2 rounded-full cursor-pointer border border-gray-300 hover:bg-primary hover:text-white 
                  ${item.time === slotTime ? 'bg-primary text-white' : 'text-gray-400 border-gray-300'}`}
              >
                {item.time}
              </p>
            </div>
          ))}
        </div>

        <button className=" bg-primary text-white px-10 mt-5 py-3 rounded-full  items-center justify-center">Book an Appointment</button>
      </div>
    </div>
  )
}

export default Appointments
