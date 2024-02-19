import React from 'react'

import {Routes, Route} from "react-router-dom"
import Home from '../pages/Home'
import Doctors from '../pages/doctors/Doctors'
import DoctorsDetails from '../pages/doctors/DoctorsDetails'
import Login from '../pages/Login'
import Signup from '../pages/Signup'
import Services from '../pages/Services'
import Contact from '../pages/Contact'

const Routers = () => {
  return (
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/home" element={<Home/>} />
      <Route path='doctors' element={<Doctors/>} />
      <Route path='doctorsDetails/:id' element={<DoctorsDetails/>} />
      <Route path='login' element={<Login/>} />
      <Route path='signup' element={<Signup/>} />
      <Route path='contact' element={<Contact/>} />
      <Route path='Services' element={<Services/>} />
        
    </Routes>
  )
}

export default Routers
