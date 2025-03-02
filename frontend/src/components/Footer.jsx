import React from 'react';
import { assets } from '../assets/assets';

const Footer = () => {
  return (
    <div className='md:mx-10 '>
      <div className='flex flex-col sm:grid sm:grid-cols-3 gap-17 my-10 mt-40 text-sm'>
        {/* Left Section */}
        <div>
          <img className='mb-5 w-40' src={assets.logo} alt="Logo"  />
          <p className= ' w-full md:w-2/3  text-gray-600 leading-6'>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
             galley of type and scrambled it to make a type specimen book.
          </p>
        </div>
        
        {/* Middle Section */}
        <div>
          <p className='text-xl mb-5 font-medium '>COMPANY</p>
          <ul className='text-gray-600 flex flex-col gap-2'>
            <li>Home</li>
            <li>About us</li>
            <li>Contact us</li>
            <li>Privacy policy</li>
          </ul>
        </div>
        
        {/* Right Section */}
        <div>
          <p className='text-xl mb-5 font-medium'>GET IN TOUCH</p>
          <ul className='text-gray-600 flex flex-col gap-2'>
            <li>03479040778</li>
            <li>shamzabacha03@gmail.com</li>
          </ul>
        </div>
      </div>
      
      {/* Footer Bottom */}
      <div className='border-t pt-4 text-center text-gray-600 text-sm'>
        <p className='py-5 text-sm text-center'>Copyright © 2024 GreatStack - All Rights Reserved.</p>
      </div>
    </div>
  );
};

export default Footer;
 