import React, { useState } from 'react';
import { assets } from '../assets/assets';
//import profilePic from '../path/to/profile_pic.jpg'; // Ensure correct path

const MyProfile = () => {
  const [userData, setUserData] = useState({
    name: "Hamza Bacha",
    image: assets.profile_pic, // Changed key to lowercase for consistency
    email: "shamzabacha03@gmail.com",
    phone: "03479040778",
    address: {
      line1: "District Buner, Village Mangal Thana",
      line2: "UET Mardan"
    },
    gender: "male",
    dob: "01/09/2003"
  });
  const [isedit,setIsEdit] = useState(true)

  return (
    <div className='flex flex-col text-sm gap-2 max-w-lg'>
      
      <img className='w-36 rounded' src={userData.image} alt="Profile" width="150" height="150" />
      {
        isedit ? <input className='bg-gray-500 text-3xl font-medium mt-4 max-w-60' type="text" value={userData.name} onChange={e=>setUserData(prev=>({...prev,name:e.target.value}))}/>
        : <p className='text-3xl font-medium mt-4 text-neutral-800'> {userData.name}</p>
      }
      <hr className='bg-zinc-400 h-[1px] border-none'/>
      <div>
        <p className='text-neutral-500 mt-3 underline'>CONTACT INFORMATION</p>
        <div className='grid grid-cols-[1fr_3fr] gap-y-2.5 mt-3 text-neutral-700'>
          <p className='font-medium'>Email id:</p>
          <p className='text-blue-500'>{userData.email}</p>
          <p className='font-medium'>Phone:</p>
          {
        isedit ? <input className='bg-gray-100 max-w-52' type="text" value={userData.phone} onChange={e=>setUserData(prev=>({...prev,phone:e.target.value}))}/>
        : <p className='text-blue-400'> {userData.phone}</p>
      }
      <p className='font-medium'>Address:</p>
      {
        isedit ? <p>
          <input  className='bg-gray-50' type="text"onChange={e => setUserData(prev =>({...prev,address:{...prev.address,line1:e.target.value}}))} />
          <br />
          <input className='bg-gray-50' type="text" onChange={e => setUserData (prev =>({...prev,address:{...prev.address,line2:e.target.value}}))} />
        </p>
        : <p className='text-gray-500'>{userData.address.line1}
        <br />
        {userData.address.line2}</p>

      }
        </div>
      </div>
      <div>
  <p className='text-neutral-500 mt-3 underline'>BASIC INFORMATION</p>
      <div className='grid grid-cols-[1fr_3fr] mt-3 gap-y-2.5 text-neutral-700 '>
        <p className='font-medium'>Gender:</p>
        {
          isedit ?
          <select className='max-w-20 bg-gray-100' onChange={e => setUserData(prev =>({...prev,gender:e.target.value}))}>
            <option value="male">male</option>
            <option value="female">female</option>
          </select>
          :<p className='text-gray-400'>{userData.gender}</p>
        }
        
        <p className='font-medium'>Birthday:</p>
        {
          isedit ? 
            <input className='max-w-28 bg-gray-100' type="date" value={userData.dob} onChange={(e) => setUserData(prev =>({...prev,dob:e.target.value}))} />
            :  <p  className='text-gray-400'>{userData.dob}</p>
          
        }
        </div>
  </div>
  <div className='mt-10'>
  {
    isedit
    ? <button className='border border-primary px-8 py-2 rounded-full hover:bg-primary hover:text-white transition-all cursor-pointer' onClick={() =>setIsEdit(false)}>save information</button>
    : <button  className='border border-primary px-8 py-2 rounded-full  hover:bg-primary hover:text-white transition-all cursor-pointer' onClick={() =>setIsEdit(true)}>Edit</button>
  }
  </div>
    </div>
  );
};

export default MyProfile;
