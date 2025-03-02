import React from 'react'
import { assets } from '../assets/assets'
import { useNavigate } from 'react-router-dom'

const Banner = () => {
    const naigate = useNavigate()
    return (
        <div className='bg-blue-500 rounded-lg flex px-6 sm:px-10 md:px-14 lg:px-12 md:mx-10 mb-7'>
            {/*'''''''left-side.......*/}
            <div className='flex-1 py-10 sm:py-12 md:py-16 lg:py-24 '>
                <div className='text-white text-xl sm:text-2xl md:text-3xl lg:text-5xl'>
                <h1 className=' '>Book Appointment</h1>
                <h1 className=' mt-4'> With 100+ Trusted Doctors</h1></div>
                <button onClick={()=>{naigate(`/login`);scrollTo(0,0)}} className= 'mt-6 text-gray-600 bg-white text-sm sm:text-base  py-3 hover:scale-105 translate-all px-8 rounded-full'>create account</button>
           </div>
             {/*'''''''right-side.......*/}
             <div className='hidden md:block md:w-1/2 lg:w-[370px] relative'>
                <img className='w-full absolute bottom-0 right-0 max-w-mad' src={assets.appointment_img} alt="" />
             </div>
        </div>
    ) 
}

export default Banner
