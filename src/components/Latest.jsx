import React, { useEffect, useRef } from 'react' 
import WrapperCard from './UI/WrapperCard'
import { Link } from 'react-router-dom'
import { motion, useInView, useAnimation } from 'framer-motion'
import { news } from '../assets/constants'

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
            <WrapperCard className=' mt-16 lg:mt-16'>
                <div className=' text-gray-700 h-fit'>
                    <h1 className=' text-3xl lg:text-5xl font-extrabold pb-4'>LATEST NEWS</h1>
                    <div className='flex flex-wrap gap-5 2xl:gap'>
                        
                        {news.map((item, index) => (
                            <div
                                key={index}
                                className='flex flex-col basis-full md:basis-1/3 xl:basis-1/4 2xl:basis-1/5 flex-grow bg-white'
                            >
                                <div className='h-48'>
                                <img src={item.image} className=' h-48 w-full' alt={`News ${index}`} />
                                </div>
                                <div className='flex flex-col justify-between p-6 gap-16 h-full '>
                                <Link
                                    onClick={() => {
                                    window.scrollTo({
                                        top: 0,
                                        behavior: 'smooth',
                                    });
                                    }}
                                    to={`/enasco_v1/news/${item.path}`}
                                    state={(({ content, ...rest }) => rest)(item)}
                                    className='navlink text-xl font-bold'
                                >
                                    {item.title}
                                </Link>
                                <p className='text-sm'>{item.date}</p>
                                </div>
                            </div>
                        ))}
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