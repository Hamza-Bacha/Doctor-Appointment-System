import React from 'react'
import { assets } from '../assets/assets'

const Contact = () => {
  return (
    <div>
      <div className='mt-10 text-gray-500 font-semibold text-center text-2xl'>
        <p>CONTACT <span className='text-gray-800'>US</span></p>
      </div>
      <div className='flex flex-col md:flex-row gap-10 justify-center mb-14 mt-11'>
        <img className='w-full md:max-w-[360px]' src={assets.contact_image} alt="" />
        <div className='flex flex-col gap-6 text-gray-500 items-start justify-center'>
          <b className='font-semibold text-gray-700'>OUR OFFICE</b>
          <p>54709 Willms Station <br />
          Suite 350, Washington, USA</p>
          <p>Tel: (415) 555‑0132 <br />
          Email: greatstackdev@gmail.com</p>
          <b className='font-semibold text-gray-700'>CAREERS AT PRESCRIPTO</b>
          <p>Learn more about our teams and job openings.</p>
          <button className='px-8 py-4 border border-black text-sm hover:bg-black hover:text-white transition-all duration-500  '>Explore Jobs</button>
        </div>
      </div>
    </div>
  )
}

export default Contact
