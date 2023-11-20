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
            animate = {mainControls}np
            transition = {{ duration: 0.8, delay: 0.3 }}
             
            className='bg-[#e3e3e3]' id='latest'>
            <WrapperCard className=' mt-16 lg:mt-52'>
                <div className=' text-gray-700 h-fit'>
                    <h1 className=' text-3xl lg:text-5xl font-extrabold pb-4'>LATEST NEWS</h1>
                    <div className='flex flex-wrap gap-5 2xl:gap'>
                        <div className='flex flex-col basis-full md:basis-1/3 xl:basis-1/4 2xl:basis-1/5 flex-grow bg-white'>
                            <div className=''>
                                <img src={n2} className=' h-48 w-full' alt='News 1' />
                            </div>
                            <div className='flex flex-col justify-between p-6 gap-16 h-full '>
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
                                    title: "Enasco awarded 4-Years Contract from KIPIC for Marine Services in Al Zour",
                                    date: "Nov 14, 2023"
                                    }}
                                className='navlink text-xl font-bold'>
                                Enasco awarded 4-Years Contract from KIPIC for Marine Services in Al Zour
                            </Link>

                                <p className='text-sm'>Nov 14, 2023</p>
                            </div>
                        </div>
                        <div className='flex flex-col basis-full md:basis-1/3 xl:basis-1/4 2xl:basis-1/5 flex-grow bg-white'>
                            <div className='h-48'>
                                <img src={n3} className=' h-full w-full' alt='News 2' />
                            </div>
                            <div className='flex flex-col justify-between p-6 gap-16 h-full '>
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
                                        title: "Enasco awarded 4-Years Contract from KIPIC for Marine Services in Al Zour.",
                                        date: "Nov 14, 2023"
                                        }}
                                    className='navlink text-xl font-bold'>
                                    Enasco awarded 4-Years Contract from KIPIC for Marine Services in Al Zour
                                </Link>
                                <p className='text-sm'>Nov 14, 2023</p>
                            </div>
                        </div>
                        <div className='flex flex-col basis-full md:basis-1/3 xl:basis-1/4 2xl:basis-1/5 flex-grow bg-white'>
                            <div className=''>
                                <img src={n3} className=' h-48 w-full' alt='News 3' />
                            </div>
                            <div className='flex flex-col justify-between p-6 gap-16 h-full '>
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
                                                title: "Enasco awarded 4-Years Contract from KIPIC for Marine Services in Al Zour",
                                                date: "Nov 14, 2023"
                                                }}
                                            className='navlink text-xl font-bold'>
                                            Enasco awarded 4-Years Contract from KIPIC for Marine Services in Al Zour
                                </Link>
                                <p className='text-sm'>Nov 14, 2023</p>
                            </div>
                        </div>
                        <div className='flex flex-col basis-full md:basis-1/3 xl:basis-1/4 2xl:basis-1/5 flex-grow  bg-white'>
                            <div className=''>
                                <img src={n1} className=' h-48 w-full' alt='News 4' />
                            </div>
                            <div className='flex flex-col justify-between p-6 gap-16 h-full '>
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
                                            title: "Enasco awarded 4-Years Contract from KIPIC for Marine Services in Al Zour.",
                                            date: "Nov 14, 2023"
                                            }}
                                        className='navlink text-xl font-bold'>
                                        Enasco awarded 4-Years Contract from KIPIC for Marine Services in Al Zour
                                </Link>
                                <p className='text-sm'>Nov 14, 2023</p>
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