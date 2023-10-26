import React from 'react'
import n1 from '../assets/images/news1.jpg'
import n2 from '../assets/images/new2.jpg'
import n3 from '../assets/images/news3.jpg' 
import WrapperCard from './UI/WrapperCard'
function Latest() {
  return (
    <div className='bg-[#e3e3e3]'>
        <WrapperCard className=''>
        <div className=' pt-16 text-blue-800 h-fit'>
            <h1 className=' text-5xl font-extrabold pb-4'>LATEST NEWS</h1>
            <div className='flex gap-7'>
                <div className='flex flex-col md:basis-1/2 lg:basis-1/3 bg-white'>
                    <img src={n2} className='h-64 w-full'/>
                    <div className='flex flex-col justify-between p-8 h-full '>
                        <h2 className=' navlink text-xl font-extrabold'>E-Pusher 1 nominated for Ship of the year award 2023</h2>
                        <p className='text-sm'>Oct 21, 2023</p>
                    </div>
                </div>
                <div className='hidden md:flex flex-col basis-1/2 lg:basis-1/3 bg-white'>
                    <img src={n1} className='h-64 w-full'/>
                    <div className='flex flex-col justify-between p-8 h-full '>
                        <h2 className=' navlink  text-xl font-extrabold'>ENASCO Canada partners with Robert Allan Ltd. and Sanmar to build two powerful, high bollard pull Methanol Fuelled Escort Tugs</h2>
                        <p className='text-sm'>Oct 21, 2023</p>
                    </div>
                </div>
                <div className='hidden lg:flex flex-col lg:basis-1/3 bg-white'>
                    <img src={n3} className='h-64 w-full'/>
                    <div className='flex flex-col justify-between p-8 h-full '>
                        <h2 className=' navlink  text-xl font-extrabold'>ENASCO Canada Provides First State-of-the-Art Dual Fuel Methanol Escort Tugs for Trans Mountain’s Expanded Operations on Canada’s West Coast</h2>
                        <p className='text-sm'>Oct 21, 2023</p>
                    </div>
                </div>
            </div>
            <span className=' float-right my-4 px-5 navlink py-3 bg-blue-900 text-white font-bold'>MORE NEWS</span>
        </div>
        </WrapperCard>
    </div>
  )
}

export default Latest