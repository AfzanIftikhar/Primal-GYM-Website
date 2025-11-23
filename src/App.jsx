import React from 'react'
import Navbar from './Components/Navbar'
import { Routes,Route } from 'react-router-dom'
import Home from './Components/HomeComponents/Home'
import About from './Components/AboutComponents/About'
import Spot from './Components/ReserveYourSpot/Spot'
const App = () => {
  return (
    <div className='min-h-screen w-screen '>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/About' element={<About/>}/>
        <Route path='/Spot' element={<Spot/>}/>
      </Routes>
    </div>
  )
}

export default App
