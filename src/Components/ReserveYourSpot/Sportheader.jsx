import React from 'react'
import { Link } from 'react-router-dom'
const Sportheader = () => {
  return (
    <div>
       <div className='px-2 h-auto uppercase w-full bg-white'>
        <h3 className='lg:text-[9rem] max-sm:text-5xl max-sm:px-2 sm:text-6xl sm:px-10 underline lg:p-2'>book a
           <span className='text-[#808CFD] font-black '> Session</span></h3>
      </div>



      <div className='w-full min-h-screen bg-gray-200 flex flex-wrap mt-5'>
        <div className='w-1/3 h-screen  flex flex-col max-sm:w-full max-sm:h-auto max-sm:p-10 justify-center gap-10 items-start'>
            <h1 className=' text-8xl uppercase tracking-tight max-sm:ml-2 ml-10'>strength</h1>
            <div className='border-b-2 ml-10 max-sm:ml-2'>
              <p className='capitalize w-auto font-semibold font-sans text-3xl'>weekdays at 6AM</p>

            </div>
            <div className='border-b-2 ml-10 max-sm:ml-1'>
              <p className='capitalize w-auto font-semibold font-sans text-3xl'>weekends and holidays at 8AM</p>

            </div>
            <div className='p-5 max-sm:p-0 w-150 max-sm:w-auto '>
             <p className='p-5 max-sm:p-0 font-sans  font-semibold text-2xl'> Build a foundation of raw power with our comprehensive weightlifting and strength training programms</p>
            </div>

            <div >
              <Link
              className='ml-20 px-5 py-2 text-2xl text-white font-serif bg-[#808CFD] hover:bg-[#262e70] active:scale-95  rounded'
              to='/Spot'>Reserve Your Sport</Link>
            </div>

        </div>
        <div className='w-1/3 h-screen border-l-4 border-r-4  flex flex-col max-sm:w-full max-sm:h-auto max-sm:p-10 justify-center gap-10 items-start'>
            <h1 className=' text-8xl uppercase tracking-tight max-sm:ml-2 ml-10'>conditioning</h1>
            <div className='border-b-2 ml-10 max-sm:ml-2'>
              <p className='capitalize w-auto font-semibold font-sans text-3xl'>weekdays at 6AM</p>

            </div>
            <div className='border-b-2 ml-10 max-sm:ml-1'>
              <p className='capitalize w-auto font-semibold font-sans text-3xl'>weekends and holidays at 8AM</p>

            </div>
            <div className='p-5 max-sm:p-0 w-150 max-sm:w-auto '>
             <p className='p-5 max-sm:p-0 font-sans  font-semibold text-2xl'> Push Your limits with high-intensity workouts that challenge your cardiovascular endurance and build functional fitness.</p>
            </div>

            <div >
              <Link
              className='ml-20 px-5 py-2 text-2xl text-white font-serif bg-[#808CFD] hover:bg-[#262e70] active:scale-95  rounded'
              to='/Spot'>Reserve Your Sport</Link>
            </div>

        </div>
        <div className='w-1/3 h-screen  flex flex-col max-sm:w-full max-sm:h-auto max-sm:p-10 justify-center gap-10 items-start'>
            <h1 className=' text-8xl  uppercase tracking-tight max-sm:ml-2 ml-10'>Community Classes</h1>
            <div className=' ml-10 max-sm:ml-2'>

                <p className='text-4xl font-sans'>Primal GYM</p>
                  
            </div>
            <div className='border-b-2 ml-10 max-sm:ml-1'>
              <p className='capitalize w-auto font-semibold font-sans text-3xl'>Everyday an hour</p>

            </div>
            <div className='p-5 max-sm:p-0 w-140 max-sm:w-auto '>
             <p className='p-5 max-sm:p-0 font-sans  font-semibold text-2xl'>Experience the power of collective effort with our custom workout of the Day.Push your limits along side like-minded individuals.</p>
            </div>

            <div >
              <Link
              className='ml-20 px-5 py-2 text-2xl text-white font-serif bg-[#808CFD] hover:bg-[#262e70] active:scale-95  rounded'
              to='/Spot'>Reserve Your Sport</Link>
            </div>

        </div>

      </div>







    </div>
  )
}

export default Sportheader
