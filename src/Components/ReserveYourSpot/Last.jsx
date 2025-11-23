import React from 'react'
import { Link } from 'react-router-dom'
const Last = () => {
  return (
    <div>
      <div className='flex justify-center flex-col  items-center w-full h-[60vh] bg-[#808CFD]'>
      
          <h3 className='text-5xl p-1 pb-6'>Primal Personal Training</h3>
          <p className='font-serif capitalize w-300 max-sm:w-auto text-xl tracking-widest p-5'>Recieve personalized guidance and tailored programs designed to unlock your individual primal potential.our expert coaches will guide you every step of the way. </p>
          
           <Link
          to='/Spot' className='bg-[#ffff] text-xl hover:bg-[#dadada] active:scale-95  rounded p-2'
        >Reserve Your Spot</Link>

      
    </div>
    </div>
  )
}

export default Last
