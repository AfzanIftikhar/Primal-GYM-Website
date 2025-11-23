import React from 'react'

const Section2 = () => {
  return (
    <div>

         <div className='w-full flex items-center justify-center pt-6 gap-10 '>
      <div className='w-50 h-0.5 bg-gray-500'></div>
      <h3 className=' text-3xl uppercase'>Primal GYM</h3>
      <div className='w-50 h-0.5 bg-gray-500'></div>
      </div>


    <div className='flex flex-wrap w-full min-h-screen'>
      <div className='flex flex-wrap   mt-10'>

          <div className='lg:w-[50%] w-full h-[90vh] bg-lime-800'>
            <img className='w-full h-full object-cover' src="https://plus.unsplash.com/premium_photo-1663050901483-ee8703cc8372?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
          </div>
          <div className='lg:w-[50%] w-full h-screen lg-h-[50vh]  '>

            <div className='flex flex-col gap-5 '>
              <h2 className='text-7xl uppercase tracking-wider p-7 bg-green-600 m-5 mr-7'>Guided By Experts</h2>
              <p className='p-6 w-3.2/4 font-sans tracking-wider font-semibold capitalize leading-10'>We Believe in Creating a positive envirnoment where you can thrive.we are here to help you achieve your goals and unlock your full potential. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis inventore maxime error nulla suscipit. Maiores sequi !</p>
            </div>

          </div>

      </div>
      </div>


      <div>

    

      <div className='flex flex-wrap mt-20'>


         <div className='lg:w-[50%] w-full h-screen lg:h-[50vh]  '>

            <div className='flex flex-col gap-5 '>
              <h2 className='text-7xl uppercase  p-7 bg-green-600 m-5 mr-7'>Dynamic Open Gym</h2>
              <p className='p-6 w-3.2/4 font-sans tracking-wider font-semibold capitalize leading-10'>Our facility is the optimal envirnoment for strength training and performance,fully equipped with top-of-the-line tools,ample training Areas,and focus on functional movement. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Earum ullam dolorem provident! Nemo quis deleniti eos praesentium, est sit, a facere consequatur ratione minus hic voluptas? Nisi aperiam voluptate aut!</p>
            </div>

          </div>

          <div className='lg:w-[50%] w-full lg:h-[90vh]  bg-lime-800'>
            <img className='w-full h-full object-cover' src="https://images.unsplash.com/photo-1548690312-e3b507d8c110?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
          </div>
         

      </div>
      </div>

    </div>
  )
}

export default Section2
