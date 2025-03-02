import React, { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom'; // Import NavLink
import { assets } from '../assets/assets';

const Navbar = () => {
  const navigate = useNavigate();
  const [showMenu, setShowMenu] = useState(false);
  const [token, setToken] = useState(true);

  return (
    <div className='flex items-center justify-between text-sm py-4 mb-5 border-b border-b-gray-400 '>
      <img onClick={() => navigate('/')} className="w-44 cursor-pointer" src={assets.logo} alt="Logo" />

      {/* Desktop Menu */}
      <ul className='hidden md:flex items-start gap-5'>
        <NavLink to="/" className="p">
          <li>Home</li>
          <hr className='border-none outline-none h-0.5 bg-primary w-3/5 m-auto hidden' />
        </NavLink>
        <NavLink to="/doctor" className="p">
          <li>All Doctors</li>
          <hr className='border-none outline-none h-0.5 bg-primary w-3/5 m-auto hidden' />
        </NavLink>
        <NavLink to="/about" className="p">
          <li>About</li>
          <hr className='border-none outline-none h-0.5 bg-primary w-3/5 m-auto hidden' />
        </NavLink>
        <NavLink to="/contact" className="p">
          <li>Contact</li>
          <hr className='border-none outline-none h-0.5 bg-primary w-3/5 m-auto hidden' />
        </NavLink>
      </ul>

      {/* User Profile / Login Button */}
      <div className='flex items-center gap-4 '>
        {token ? (
          <div className='flex items-center gap-2 cursor-pointer group relative'>
            <img className='w-8 rounded-full' src={assets.profile_pic} alt="" />
            <img className="w-2.5" src={assets.dropdown_icon} alt="" />
            <div className='absolute top-0 right-0 pt-14 text-base font-medium text-gray-600 z-20 hidden group-hover:block'>
              <div className='min-w-48 bg-stone-100 rounded flex flex-col gap-4 p-4'>
                <p onClick={() => navigate('my-profile')} className='hover:text-black cursor-pointer'>My Profile</p>
                <p onClick={() => navigate('my-appointments')} className='hover:text-black cursor-pointer'>My Appointments</p>
                <p onClick={() => setToken(false)} className='hover:text-black cursor-pointer'>Logout</p>
              </div>
            </div>
          </div>
        ) : (
          <button onClick={() => navigate('/Login')} className='bg-primary text-white px-8 py-3 rounded-full font-light hidden md:block'>
            Create account
          </button>
        )}

        {/* Mobile Menu Toggle Button */}
        <img onClick={() => setShowMenu(!showMenu)} className="w-6 md:hidden cursor-pointer" src={assets.menu_icon} alt="Menu" />

        {/* Mobile Menu */}
        <div className={`fixed top-0 right-0 bottom-0 bg-white z-20 transition-all ${showMenu ? 'w-full' : 'w-0 overflow-hidden'}`}>
          <div className="flex justify-between items-center px-5 py-6">
            <img className="w-36" src={assets.logo} alt="Logo" />
            <img className="w-7" onClick={() => setShowMenu(false)} src={assets.cross_icon} alt="Close" />
          </div>
          <ul className="flex flex-col items-center gap-2 mt-5 px-5 text-lg font-medium">
            <NavLink to="/" onClick={() => setShowMenu(false)}><p className="px-4 py-2 rounded inline-block">Home</p></NavLink>
            <NavLink to="/doctor" onClick={() => setShowMenu(false)}><p className="px-4 py-2 rounded inline-block">All Doctors</p></NavLink>
            <NavLink to="/about" onClick={() => setShowMenu(false)}><p className="px-4 py-2 rounded inline-block">About</p></NavLink>
            <NavLink to="/contact" onClick={() => setShowMenu(false)}><p className="px-4 py-2 rounded inline-block">Contact</p></NavLink>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
