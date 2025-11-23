import React from 'react'

const About4th = () => {
  return (
    <div>
      <div className='h-[70vh] max-sm:h-screen relative w-full'>
        <img className='w-full h-full object-cover' src="https://images.unsplash.com/photo-1541534741688-6078c6bfb5c5?q=80&w=869&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />

        <div className='w-full h-full bg-linear-to-r from-black/70 to-white/20 absolute top-0 left-0'>
            <div className='w-300 absolute max-sm:left-2 max-sm:w-100 bottom-[100px] left-10'>
              <h1
              className='text-white uppercase text-8xl max-sm:text-6xl  '
              >We've created a space where you can reconnect with your primal self</h1>
              </div>
        </div>
      </div>
    </div>
  )
}

export default About4th
