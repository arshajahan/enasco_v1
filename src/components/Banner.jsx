import React, { useEffect, useState } from 'react'
import bannerImage from '../assets/images/banner2.png'
import WrapperCard from './UI/WrapperCard'
import { services } from '../assets/constants'
import { FiPlay } from 'react-icons/fi'
import { motion } from 'framer-motion'
function Banner() {

    useEffect(() => {
        // Scroll to the section based on the hash
        const hash = window.location.hash;
        if (hash) {
          const element = document.querySelector(hash);
          if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
          }
        }
      }, []);

    const [collapsed, setCollapsed] = useState(null);
    const toggle = (i) => {
      if (collapsed === i) {
        return setCollapsed(null)
      }
      setCollapsed(i);
    }

  return (
    <div className='bg-[#e3e3e3] -mt-20' id='banner'>
    <div 
        className=" bg-cover bg-center h-screen"
        style={{
            backgroundImage: `url(${bannerImage})`, // Set the background image
        }}
    >  
    </div>
    <WrapperCard className='relative '>
        <motion.div
        
            variants = {{
                hidden: { opacity : 0, y: 75 },
                visible : { opacity: 1, y: 0 }
            }}
        
            initial = 'hidden'
            animate = 'visible'
            transition = {{ duration: 0.5, delay: 0.25 }}

            className='absolute lg:bottom-[22rem] lg2:bottom-[20rem] bottom-0'>
            <div className='flex flex-col justify-between lg:flex-row py-4'>
                <p className='lg:basis-[700px] uppercase font-extrabold text-3xl md:text-[2.5rem] lg:text-6xl text-white'>Connect your business world.</p>   
                <span className=' justify-center mt-2 lg:basis-[230px] cursor-pointer text-white bg-[#e3e3e3] lg:text-left lg:text-gray-700 hover:bg-[#ff6c40] w-full hover:text-white uppercase text-lg p-2 lg:p-4 self-end font-extrabold lg:bg-[#e3e3e3] ml-2 flex items-center'>
                    <FiPlay className=' lg:self-start text-3xl inline' /> {/* FiPlay icon */}
                    <span className='ml-2'>Connect with Enasco</span>
                </span>
            </div>
        </motion.div>

     
        <motion.div
        
        variants = {{
            hidden: { opacity : 0, y: 75 },
            visible : { opacity: 1, y: 0 }
        }}
    
        initial = 'hidden'
        animate = 'visible'
        transition = {{ duration: 0.5, delay: 0.25 }} className='hidden lg:block opacity-90 -mt-24 '>
                <div className='lg:gap-3 bannerLink px-10  flex pt-5 capitalize text-white font-extrabold xl:text-lg bg-[#ff6c40] h-24'>
                {services.map((service, key) => (
                    <span key={key} className=" lg:basis-1/5 text-left">{service.question}</span>
                ))}
                </div>
            </motion.div>
            
            <motion.div
        
            variants = {{
                hidden: { opacity : 0, y: 75 },
                visible : { opacity: 1, y: 0 }
            }}
        
            initial = 'hidden'
            animate = 'visible'
            transition = {{ duration: 0.5, delay: 0.25 }}
             className=' lg:gap-3 hidden bg-white lg:flex px-10 h-auto text-gray-700 '>
                {services.map((service, key) => (
                    <div key={key} className='lg:basis-1/5'>
                    <ul className='grid gap-4 py-4'>
                        {service.answer.map((answer, index) => (
                        <li key={index}>{answer}</li>
                        ))}
                    </ul>
                    </div>
                ))}
            </motion.div>

                
       
    </WrapperCard>
    <div className='faqs lg:hidden bg-[#ff6c40]'>    
    {services.map((item, i) => (
        <div className='faq pl-2' key={item.id}>
            <button className={`collapsible hover:underline ${collapsed === i ? "faqactive" : ""}`} onClick={() => toggle(i)}>{item.question}</button>
            <div className={` -ml-2 lg:-ml-0 content ${collapsed === i ? "show_content" : "hide_content"}`}>
                <ul className=' grid gap-4 text-lg text-gray-700'>
                    {item.answer.map((answer, j) => (
                        <li key={j}>{answer}</li>
                    ))}
                </ul>
            </div>
        </div>
    ))}
    </div>

    </div>
  )
}

export default Banner