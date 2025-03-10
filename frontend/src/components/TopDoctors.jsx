import React, { useContext } from 'react'

import { useNavigate } from 'react-router-dom'
import { AppContext } from '../context/AppContext'


const TopDoctors = () => {
    const naigate = useNavigate()
    const {doctors} = useContext(AppContext)
  return (
    <div className='flex flex-col gap-4 items-center  my-10 mx-10 pt-5 text-gray-900'>
      <h1 className='text-3xl font-medium'>Top Doctors to Book</h1>
      <p className='text-sm sm-w-1/3 text-center'>Simply browse through our extensive list of trusted doctors.</p>
      <div className='w-full gap-4 grid grid-cols-auto pt-5 gap-y-6 px-6 sm-px-0 '>
        {doctors.slice(0,10).map((item,index)=>(
        <div onClick={()=>naigate(`/appointments/${item._id}`)} className='border border-blue-200 rounded-xl cursor-pointer overflow-hidden hover:translate-y-[-10px] transition-all duration-500' key={index} >
             <img className='bg-blue-50'  src={item.image} alt="" />
        <div className='p-4'>
            <div className='flex items-center gap-2 text-sm text-green-500'>
                <p className='w-2 h-2 bg-green-500  rounded-full'></p> <p>Available</p>
            </div>
            <p className='text-gray-900  text-lg font-medium'>{item.name}</p>
            <p className='text-gray-600 text-sm'>{item.speciality}</p>
        </div>
        </div>
        ))}
      </div>
      <div><button onClick={()=>{naigate(`/doctor`);scrollTo(0,0)} } className='rounded-full bg-blue-50 text-black px-12 py-3 mt-10'> more</button></div>
    </div>
  )
}

export default TopDoctors
