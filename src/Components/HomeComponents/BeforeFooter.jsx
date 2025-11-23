import React from 'react'
import { Link } from 'react-router-dom'
const BeforeFooter = () => {
  return (
    <div>
         <div className='flex justify-center flex-col  items-center w-full h-[60vh] bg-[#808CFD]'>
      
          <p className='font-serif uppercase text-xl tracking-widest p-5'>What we believe in </p>
          <h3 className='text-5xl p-1 pb-6'>Join the primal tribe today!</h3>
          
           <Link
          to='/Spot' className='bg-[#ffff] hover:bg-[#dadada] active:scale-95  rounded p-2'
        >Reserve Your Spot</Link>

      
    </div>
      
    </div>
  )
}

export default BeforeFooter
