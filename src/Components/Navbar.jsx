import React from 'react'
import { Link } from 'react-router-dom'
import 'remixicon/fonts/remixicon.css'
import { useState } from 'react'

const Navbar = () => {

  const [open, setOpen] = useState(false)



  return (
    <div className='flex justify-between px-12 py-5  border-b-2 border-[#fafafa]  bg-[#E9ECFF]'>
      <img className=' max-sm:h-10 max-sm:w-30 w-30' src="https://images.squarespace-cdn.com/content/v1/658579913ddc98294a193099/1703246288694-UIHOHAP7NMJJKN4QBPKO/Logo-just+Prima" alt="" />

      <div className={`sm:flex sm:flex-row   ${open ? "flex" : "hidden"} flex-col gap-5 items-center  font-mono uppercase`}>
        <Link
          className='relative after:absolute after:left-0 after:top-6  after:min-h-0.5 after:w-0 after:bg-black after:transition-all hover:after:w-full active:scale-95 ' to='/'
        >Home
        </Link>
        <Link
          className='relative after:absolute after:left-0 after:top-6  after:min-h-0.5 after:w-0 after:bg-black after:transition-all hover:after:w-full active:scale-95 ' to='/About'
        >About
        </Link>
        <Link
          to='/Spot' className='bg-[#808CFD] hover:bg-[#5765e9]  rounded p-2'
        >Reserve Your Spot</Link>

      </div>

      <i
        className="ri-menu-line cursor-pointer active:scale-95 font-black text-2xl sm:hidden"
        onClick={() => {
          setOpen(!open)
        }}
      ></i>
    </div>
  )
}

export default Navbar
