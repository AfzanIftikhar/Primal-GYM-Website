import React from 'react'

const Community = () => {
  return (
    <div>
      <div className='flex flex-wrap'>
      <div
      className='w-[40%] max-sm:w-4/4  h-[90vh] max-sm:h-screen'
      >
        
        <div className='border p-5'>
          <h1 className='text-6xl  uppercase'>Discover Your Potential</h1>
        </div>
        <div className='border leading-10 p-5'>
          <h1 className='text-5xl uppercase'>Expert Coaching</h1>
          <p className='font-sans capitalize font-semibold '>Trainers Who are passionate about your progress</p>
        </div>
        <div className='border leading-10 p-5'>
          <h1 className='text-5xl uppercase'>Results-driven Programms</h1>
          <p className='font-sans capitalize font-semibold '>Workouts that deliver tangible,measurable results.</p>
        </div>

        <div className='border leading-10 p-5'>
          <h1 className='text-2xl tracking-wider  font-serif uppercase'>View Classes</h1>
          
        </div>
      
      </div>
      <div
      className='w-[60%] max-sm:w-4/4 bg-yellow-500 h-[90vh]'
      >
        <img className='w-full h-full' src="https://images.unsplash.com/photo-1554284126-aa88f22d8b74?q=80&w=994&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
      </div>
    </div>


    </div>
  )
}

export default Community
