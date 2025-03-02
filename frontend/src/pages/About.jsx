import React from 'react'
import { assets } from '../assets/assets'

const About = () => {
  return (
    <div>
      <div className='text-center text-gray-500 text-2xl  pt-8 font-semibold'>
        <p>ABOUT <span className='text-gray-800'>US</span></p>
      </div>
     
      <div className='flex my-8 md:flex-row flex-col gap-10'>
        <img className='w-full md:max-w-[260px] ' src={assets.about_image} alt="" />
        <div className='flex flex-col  gap-6 text-gray-600 justify-center text-sm md:w-2/4 '>
          <p>Welcome to Prescripto, your trusted partner in managing your healthcare needs conveniently and efficiently. At Prescripto, we understand the challenges individuals face when it comes to scheduling doctor appointments and managing their health records.</p>
          <p>
          Prescripto is committed to excellence in healthcare technology. We continuously strive to enhance our platform, integrating the latest advancements to improve user experience and deliver superior service. Whether you're booking your first appointment or managing ongoing care, Prescripto is here to support you every step of the way.</p>
          <b className='text-gray-800'>Our Vision</b>
          <p>Our vision at Prescripto is to create a seamless healthcare experience for every user. We aim to bridge the gap between patients and healthcare providers, making it easier for you to access the care you need, when you need it.</p>
        </div>
      </div>
      <div>
        <p className='text-gray-500 text-left text-2xl pt-10 font-semibold'>WHY <span className='text-gray-800'>CHOOSE US</span></p>
         </div>
         <div className=' flex flex-col md:flex-row mb-20 border border-gray-300 mt-10'>
          {/*..........left.......*/}
          <div className='flex flex-col gap-5 text-[15px] px-8 md:px-16 py-9  hover:bg-primary hover:text-white transition-all duration-300 text-gray-600 cursor-pointer'>
            <b>Efficiency:</b>
            <p>Streamlined appointment scheduling that fits into your busy lifestyle.</p>
          </div>
             {/*..........left.......*/}
             <div className='flex flex-col gap-5 text-[15px] px-8 md:px-16 py-9   hover:bg-primary hover:text-white transition-all duration-300 text-gray-600 cursor-pointer'>
            <b>Efficiency:</b>
              <b>Convenience</b>
              <p>Access to a network of trusted healthcare professionals in your area.</p>
             </div>
              {/*..........left.......*/}
              <div className='flex flex-col gap-5 text-[15px] px-8 md:px-16 py-9  hover:bg-primary hover:text-white transition-all duration-300 text-gray-600 cursor-pointer'>
            <b>Efficiency:</b>
                <b>Personalization:</b>
                <p>Tailored recommendations and reminders to help you stay on top of your health.</p>
              </div>
         </div>
    </div>
  )
}

export default About
