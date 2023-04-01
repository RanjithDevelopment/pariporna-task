import React from 'react'
import {Routes,Route } from 'react-router-dom'
import Navbar from './components/navbar'
import Screentwo from './components/screentwo'
import ScreenOne from './components/screenone'
const App = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Navbar/>} />
        <Route path="/screenone" element={<ScreenOne/>}/>
        <Route path='/screenTwo' element={<Screentwo/>}/>
      </Routes>
    </div>
  )
}

export default App
