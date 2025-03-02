import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';

const MyAppointments = () => {
  const { doctors } = useContext(AppContext);

  return (
    <div className="p-6">
      <h2 className="text-lg font-semibold mb-4">My Appointments</h2>
      {doctors.slice(0, 3).map((items, index) => (
        <div 
          key={index} 
          className="flex items-center justify-between bg-white shadow-md rounded-lg p-4 mb-4"
        >
          <div className="w-32 bg-indigo-50">
            <img 
              src={items.image} 
              alt="Doctor" 
              className="w-full h-full object-cover rounded-full" 
            />
          </div>
          <div className="flex-1 px-4">
            <p className="text-lg font-semibold">{items.name}</p>
            <p className="text-gray-500">{items.speciality}</p>
            <p className="text-gray-600 text-sm mt-1">Address:</p>
            <p className="text-gray-500 text-sm">{items.address.line1}</p>
            <p className="text-gray-500 text-sm">{items.address.line2}</p>
            <p className="text-gray-700 text-sm mt-1">
              <span className="font-semibold">Date & Time: </span> 25, July, 2024 | 8:30 PM
            </p>
          </div>
          <div className="flex flex-col gap-2">
          
              <button className=" text-gray-700 px-4 py-2 border border-gray-300 rounded-lg hover:bg-primary hover:text-white transition-all duration-300 ">
                Pay here
              </button>
            
            <button className="border border-gray-300 text-gray-700 px-4 py-2 rounded-lg  hover:bg-red-600 hover:text-white transition-all duration-300">
              Cancel appointment
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default MyAppointments;
