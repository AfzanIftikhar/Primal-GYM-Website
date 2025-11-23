import React from 'react'
import { Link } from 'react-router-dom'
const Hero = () => {
  return (
    <div>
      <div className='relative'>
        <img className='h-[90vh] w-full object-cover ' src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />

        <div className='absolute inset-0 bg-linear-to-r from-black/90 to-white/0 '>
          <h2 className='max-sm:text-6xl md:text-7xl  text-white sm:text-7xl lg:text-8xl uppercase absolute top-[100px] left-10'>For the Comitted </h2>
          <p
          className='max-sm:left-2 max-sm:w-[350px] max-sm:bottom-[100px] mr-3   text-white absolute bottom-[200px] left-10 font-bold w-[600px]  text-lg  capitalize p-3 rounded-xl leading-8 font-sans'
          >

            Train like an athlete with top-tier equipment and expert programming. Whether you're building muscle or breaking PRs, we help you push past limits.
            
          </p>
          <Link 
          className='absolute px-5 py-2 bg-[#7b86e9] max-sm:bottom-[50px] text-white font-serif font-black active:scale-95 hover:bg-[#5765e9] rounded bottom-[150px] left-13'
          to='/About'>About Us</Link>
        </div>

      </div>
    </div>
  )
}

export default Hero
