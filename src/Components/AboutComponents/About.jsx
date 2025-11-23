import React from 'react'
import Footer from '../Footer/Footer'
import HeaderText from './HeaderText'
import HeaderAbout from './HeaderAbout'
import About4th from './About4th'
import BeforeFooter from '../HomeComponents/BeforeFooter'
const About = () => {
  return (
    <div className='h-full'>
      <HeaderText/>
      <HeaderAbout/>  
      <About4th/>  
      <BeforeFooter/>
      <Footer/>  
      
    </div>
      )
}

export default About
