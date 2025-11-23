import React from 'react'

const Footer = () => {
  return (
    <div>
      
      <div className='bg-gray-200 h-[60vh] max-sm:min-h-screen flex flex-col  justify-between'>

          <div className='p-7 flex flex-wrap max-sm:gap-10 w-full justify-between '>
              <img className='w-30 h-20' src="https://images.squarespace-cdn.com/content/v1/658579913ddc98294a193099/1703246288694-UIHOHAP7NMJJKN4QBPKO/Logo-just+Prima" alt="" />
              <h3 className='uppercase text-4xl tracking-wider'>Primal Training</h3>
          </div>
          <div className='flex flex-wrap max-sm:min-h-screen bg-gray-200 justify-between'>
              <div className=''>
                <h1 className='text-2xl uppercase p-5 tracking-wider'>Contact</h1>
                <p className='font-sans font-semibold mx-5 uppercase text-gray-600'>Email:
                   <span
                   className='lowercase p-2'
                   >Aafzan95@gmail.com</span> </p>
                <p className='font-sans font-semibold mx-5 uppercase text-gray-600'>Phone:
                  <span
                   className='lowercase p-2'
                   >0332-9977886</span></p>
              </div>
              <div className=''>
                <h1 className='text-2xl uppercase p-5 tracking-wider'>Opening hours</h1>
                <p className='font-sans font-semibold mx-5 uppercase text-gray-600'>Mon-FRI:
                   <span
                   className='lowercase p-2'
                   >5:00 - 23:00</span> </p>
                <p className='font-sans font-semibold mx-5 uppercase text-gray-600'>saturdays:
                  <span
                   className='lowercase p-2'
                   >8:00-16:00</span></p>
                <p className='font-sans font-semibold mx-5 uppercase text-gray-600'>Sundays:
                  <span
                   className='lowercase p-2'
                   >8:00-13:00</span></p>
                <p className='font-sans font-semibold mx-5 uppercase text-gray-600'>holidays:
                  <span
                   className='lowercase p-2'
                   >8:00-16:00</span></p>
              </div>
              <div className=''>
                <h1 className='text-2xl uppercase p-5 tracking-wider'>social</h1>
                <p className='font-sans font-semibold mx-5 uppercase text-gray-600 underline'>instagram
                   </p>
                
                <p className='font-sans font-semibold mx-5 uppercase text-gray-600 underline'>X
                   </p>
                
                <p className='font-sans font-semibold mx-5 uppercase text-gray-600 underline'>Linkedin
                   </p>
                
                <p className='font-sans font-semibold mx-5 uppercase text-gray-600 underline'>Spotify
                   </p>
                
              </div>


          </div>



      </div>

    </div>
  )
}

export default Footer
