import React from 'react'

const HeaderAbout = () => {
    return (
        <div>
            <div className='min-h-screen w-full bg-[#808CFD] flex max-sm:flex-wrap '>

                <div className='w-[60%] mt-10 h-auto  max-sm:w-full '>
                    <div>
                        <h2 className='p-5 text-7xl whitespace-nowrap tracking-tight uppercase max-sm:text-4xl'>Tap into Your Primal Power.</h2>
                        <h2 className='p-5 text-7xl whitespace-nowrap tracking-tight uppercase max-sm:text-4xl'>Forge a Stronger you.</h2>
                    </div>
                    <div className='mt-8 max-sm:mt-2'>
                        <h2 className='p-5  text-6xl uppercase max-sm:text-3xl'>OUR vision</h2>
                        <p className='font-sans capitalize max-sm:text-md font-semibold text-lg p-5'>Primal training is comitted to delivering a training experience rooted in raw strength,functional,fitness,and unwavering community support.we empower our members to tap into thier primal power,achieve their goals, and live a life of strength,resilience,and unwavering determination.</p>
                    </div>

                </div>
                <div className='w-[40%] max-sm:w-full h-screen '>
                    <img
                        className='h-full'
                        src="
                    https://images.unsplash.com/photo-1519311965067-36d3e5f33d39?q=80&w=871&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
                </div>
            </div>



            
        <div className='min-h-screen w-full  flex max-sm:flex-wrap '>

<div className='w-[60%] max-sm:w-full h-screen '>
                    <img
                        className='h-full'
                        src="
                    https://images.unsplash.com/photo-1517836357463-d25dfeac3438?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
                </div>
                <div className='w-[40%] h-auto  max-sm:w-full '>
                    <div className='flex  justify-between flex-col h-full p-5 '>
                        <h2 className='p-5 text-6xl uppercase max-sm:text-5xl'>Dynamic open gym.</h2>
                        <p className='font-sans font-bold text-2xl  max-sm:ml-2 mb-20 ml-10'>At primal Training,we strip away the fluff and focus on the fundamentals.our expert coaches guide you through intense,functional workouts designed to build raw strength,resilience,and a body capable of anything.</p>
                    </div>
                   
                </div>
                
            </div>
        </div>
    )
}

export default HeaderAbout
