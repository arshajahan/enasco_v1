import React, { useEffect, useRef } from 'react'
import n1 from '../assets/images/news1.jpg'
import n2 from '../assets/images/new2.jpeg'
import n3 from '../assets/images/news3.jpg' 
import WrapperCard from './UI/WrapperCard'
import { Link } from 'react-router-dom'
import { motion, useInView, useAnimation } from 'framer-motion'

function Latest() {
    const ref = useRef(null);
    const isInView = useInView(ref, { triggerOnce: false });

    const mainControls = useAnimation();

    useEffect(() => {
        if(isInView) {
            mainControls.start("visible");
        }
        else{
            mainControls.start("hidden")
        }
    }, [isInView, mainControls]);

  return (
    <motion.div
            ref = {ref}
            variants = {{
                hidden: { opacity : 0, y: 75 },
                visible : { opacity: 1, y: 0 }
            }}
        
            initial = 'hidden'
            animate = {mainControls}
            transition = {{ duration: 0.8, delay: 0.3 }}
             
            className='bg-[#e3e3e3]' id='latest'>
            <WrapperCard className=''>
                <div className='pt-16 text-gray-700 h-fit'>
                    <h1 className=' text-3xl lg:text-5xl font-extrabold pb-4'>LATEST NEWS</h1>
                    <div className='flex flex-wrap gap-7 2xl:gap'>
                        <div className='flex flex-col basis-full md:basis-1/3 xl:basis-1/4 2xl:basis-1/5 flex-grow bg-white'>
                            <img src={n2} className=' h-60 w-full' alt='News 1' />
                            <div className='flex flex-col justify-between p-6 gap-4 h-full '>
                            <Link
                                onClick={() => {
                                    window.scrollTo({
                                        top: 0,
                                        behavior: 'smooth'
                                    });
                                }}   
                                to='/enasco_v1/news'
                                state = {{
                                    image: n2, // Make sure n1 is a defined variable or contains an image object
                                    title: "E-Pusher 1 nominated for Ship of the year award 2023",
                                    date: "Oct 21, 2023"
                                    }}
                                className='navlink text-xl font-bold'>
                                E-Pusher 1 nominated for Ship of the year award 2023
                            </Link>

                                <p className='text-sm'>Oct 21, 2023</p>
                            </div>
                        </div>
                        <div className='flex flex-col basis-full md:basis-1/3 xl:basis-1/4 2xl:basis-1/5 flex-grow bg-white'>
                            <img src={n1} className=' h-60 w-full' alt='News 2' />
                            <div className='flex flex-col justify-between p-6 gap-4 h-full '>
                                <Link
                                    onClick={() => {
                                        window.scrollTo({
                                            top: 0,
                                            behavior: 'smooth'
                                        });
                                    }}   
                                    to='/enasco_v1/news'
                                    state = {{
                                        image: n1, // Make sure n1 is a defined variable or contains an image object
                                        title: "ENASCO Canada partners with Robert Allan Ltd. and Sanmar to build two powerful, high bollard pull Methanol Fuelled Escort Tugs.",
                                        date: "Oct 21, 2023"
                                        }}
                                    className='navlink text-xl font-bold'>
                                    ENASCO Canada partners with Robert Allan Ltd. and Sanmar to build two powerful, high bollard pull Methanol Fuelled Escort Tugs
                                </Link>
                                <p className='text-sm'>Oct 21, 2023</p>
                            </div>
                        </div>
                        <div className='flex flex-col basis-full md:basis-1/3 xl:basis-1/4 2xl:basis-1/5 flex-grow bg-white'>
                            <img src={n3} className=' h-60 w-full' alt='News 3' />
                            <div className='flex flex-col justify-between p-6 gap-4 h-full '>
                                <Link
                                            onClick={() => {
                                                window.scrollTo({
                                                    top: 0,
                                                    behavior: 'smooth'
                                                });
                                            }}   
                                            to='/enasco_v1/news'
                                            state = {{
                                                image: n3, // Make sure n1 is a defined variable or contains an image object
                                                title: "ENASCO Canada Provides First State-of-the-Art Dual Fuel Methanol Escort Tugs for Trans Mountain’s Expanded Operations on Canada’s West Coast.",
                                                date: "Oct 21, 2023"
                                                }}
                                            className='navlink text-xl font-bold'>
                                            ENASCO Canada Provides First State-of-the-Art Dual Fuel Methanol Escort Tugs for Trans Mountain’s Expanded Operations on Canada’s West Coast.
                                </Link>
                                <p className='text-sm'>Oct 21, 2023</p>
                            </div>
                        </div>
                        <div className='flex flex-col basis-full md:basis-1/3 xl:basis-1/4 2xl:basis-1/5 flex-grow  bg-white'>
                            <img src={n1} className=' h-60 w-full' alt='News 4' />
                            <div className='flex flex-col justify-between p-6 gap-4 h-full '>
                                <Link
                                        onClick={() => {
                                            window.scrollTo({
                                                top: 0,
                                                behavior: 'smooth'
                                            });
                                        }}   
                                        to='/enasco_v1/news'
                                        state = {{
                                            image: n1, // Make sure n1 is a defined variable or contains an image object
                                            title: "ENASCO Canada Provides First State-of-the-Art Dual Fuel Methanol Escort Tugs for Trans Mountain’s Expanded Operations on Canada’s West Coast.",
                                            date: "Oct 21, 2023"
                                            }}
                                        className='navlink text-xl font-bold'>
                                        ENASCO Canada Provides First State-of-the-Art Dual Fuel Methanol Escort Tugs for Trans Mountain’s Expanded Operations on Canada’s West Coast
                                </Link>
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
        </motion.div>

  )
}

export default Latest