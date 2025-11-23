import React from 'react'
import HeroText from './HeroText'
import Hero from './Hero'
import Section2 from './Section2'
import Section3 from './Section3'
import Community from './Community'
import { Link } from 'react-router-dom'
import BeforeFooter from './BeforeFooter'
import Footer from '../Footer/Footer'
const Home = () => {
  return (
    <div className='h-screen w-full ' >
      <HeroText />
      <Hero/>
      <Section2/>
      <Section3/>
      <Community/>
      <BeforeFooter/>    
      <Footer/>



    </div>
  )
}

export default Home
