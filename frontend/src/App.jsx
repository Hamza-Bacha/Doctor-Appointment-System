import React from 'react'
import { Routes, Route } from "react-router-dom"
import Home from './pages/Home'
import Doctor from './pages/Doctor'
import About from './pages/About'
import Contact from './pages/Contact'
import Login from './pages/Login'
import MyProfile from "./pages/MyProfile"

import Appointments from './pages/Appointments'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import MyAppointments from './pages/MyAppointments'

const App = () => {
  return (

    <div className='mx-4 sm:mx-[10%]' >
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/doctor" element={<Doctor />} />
        <Route path="/doctor/:speciality" element={<Doctor />} />
        <Route path="/login" element={<Login />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/my-profile" element={<MyProfile />} />
        <Route path="/my-appointments" element={<MyAppointments/>}/>
        <Route path="/appointments/:docId" element={<Appointments />} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App
