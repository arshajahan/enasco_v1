import React from 'react'
import n1 from '../assets/images/news1.jpg'
import n2 from '../assets/images/new2.jpeg'
import n3 from '../assets/images/news3.jpg' 
import WrapperCard from './UI/WrapperCard'
function Latest() {
  return (
    <div className='bg-[#e3e3e3]' id='latest'>
            <WrapperCard className=''>
                <div className='pt-16 text-[#005a96] h-fit'>
                    <h1 className=' text-3xl lg:text-5xl font-extrabold pb-4'>LATEST NEWS</h1>
                    <div className='flex flex-wrap gap-7 2xl:gap'>
                        <div className='flex flex-col basis-full md:basis-1/3 xl:basis-1/4 2xl:basis-1/5 flex-grow bg-white'>
                            <img src={n2} className=' h-60 w-full' alt='News 1' />
                            <div className='flex flex-col justify-between p-6 gap-4 h-full '>
                                <h2 className='navlink text-xl font-bold'>E-Pusher 1 nominated for Ship of the year award 2023</h2>
                                <p className='text-sm'>Oct 21, 2023</p>
                            </div>
                        </div>
                        <div className='flex flex-col basis-full md:basis-1/3 xl:basis-1/4 2xl:basis-1/5 flex-grow bg-white'>
                            <img src={n1} className=' h-60 w-full' alt='News 2' />
                            <div className='flex flex-col justify-between p-6 gap-4 h-full '>
                                <h2 className='navlink text-xl font-bold'>ENASCO Canada partners with Robert Allan Ltd. and Sanmar to build two powerful, high bollard pull Methanol Fuelled Escort Tugs</h2>
                                <p className='text-sm'>Oct 21, 2023</p>
                            </div>
                        </div>
                        <div className='flex flex-col basis-full md:basis-1/3 xl:basis-1/4 2xl:basis-1/5 flex-grow bg-white'>
                            <img src={n3} className=' h-60 w-full' alt='News 3' />
                            <div className='flex flex-col justify-between p-6 gap-4 h-full '>
                                <h2 className='navlink text-xl font-bold'>ENASCO Canada Provides First State-of-the-Art Dual Fuel Methanol Escort Tugs for Trans Mountain’s Expanded Operations on Canada’s West Coast</h2>
                                <p className='text-sm'>Oct 21, 2023</p>
                            </div>
                        </div>
                        <div className='flex flex-col basis-full md:basis-1/3 xl:basis-1/4 2xl:basis-1/5 flex-grow  bg-white'>
                            <img src={n1} className=' h-60 w-full' alt='News 4' />
                            <div className='flex flex-col justify-between p-6 gap-4 h-full '>
                                <h2 className='navlink text-xl font-bold'>ENASCO Canada Provides First State-of-the-Art Dual Fuel Methanol Escort Tugs for Trans Mountain’s Expanded Operations on Canada’s West Coast</h2>
                                <p className='text-sm'>Oct 21, 2023</p>
                            </div>
                        </div>
                        <div className='flex flex-col basis-full md:basis-1/3 xl:basis-1/4 2xl:basis-1/5 flex-grow '>
                            
                        </div>
                        <div className='flex flex-col basis-full md:basis-1/3 xl:basis-1/4 2xl:basis-1/5 flex-grow '>
                            
                        </div>
                    </div>
                </div>
            </WrapperCard>
        </div>

  )
}

export default Latest