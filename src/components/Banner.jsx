import React, { useEffect, useState } from 'react'
import bannerImage from '../assets/images/banner2.png'
import WrapperCard from './UI/WrapperCard'
import { services } from '../assets/constants'
import { FiPlay } from 'react-icons/fi'
import { AnimatePresence, motion } from 'framer-motion'
import { Link } from 'react-router-dom'
function Banner() {

    const [hoveredQuestion, setHoveredQuestion] = useState(null);

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
        <div
        
            variants = {{
                hidden: { opacity : 0, y: 75 },
                visible : { opacity: 1, y: 0 }
            }}
        
            initial = 'hidden'
            animate = 'visible'
            transition = {{ duration: 0.5, delay: 0.25 }}

            className='absolute lg:bottom-[5rem] bottom-0'>
            <div className='flex flex-col justify-between lg:flex-row py-4 w-full'>
                <p className='lg:basis-[700px] uppercase font-extrabold text-3xl md:text-[2rem] lg:text-5xl 2xl:text-6xl text-white'>Connect your business world.</p>   
                <span className=' justify-center mt-2 lg:basis-[230px] cursor-pointer  bg-[#e3e3e3] lg:text-left lg:text-[#2d3540] hover:bg-[#ff6c40] w-full hover:text-white uppercase text-lg p-2 lg:p-4 self-end font-extrabold lg:bg-[#e3e3e3] ml-2 flex items-center'>
                    <FiPlay className=' lg:self-start text-3xl inline' /> {/* FiPlay icon */}
                    <Link to='/enasco_v1/contact' className='ml-2'>Connect with Enasco</Link>
                </span>
            </div>
        </div>

     
    <div className='hidden lg:grid grid-flow-col '>
      {services.map((service, key) => (
        <motion.div
          key={key}
          className=''
          whileHover={{
            scale: 1.05,
            cursor: 'pointer'
          }}
          
          onMouseEnter={() => setHoveredQuestion(key)}
          onMouseLeave={() => setHoveredQuestion(null)}
        >
          <Link to={`/enasco_v1/${service.id-1}`}  className='bannerLink px-10 flex capitalize text-white font-extrabold h-20 -mt-20 xl:text-lg bg-[#ff6c40] py-3'
          style={{
            backgroundColor: hoveredQuestion === key ? '#2d3540' : '#ff6c40'
          }}>
            <span className='lg:basis-10 '>{service.question}</span>
          </Link>

          {hoveredQuestion === key && (
            <motion.div
              className='absolute text-sm w-full bg-white lg:flex px-5 h-auto text-[#2d3540]'
              variants={{
                hidden: { opacity: 0, y: 10 },
                visible: { opacity: 1, y: 0 },
              }}
              initial='hidden'
              animate='visible'
              exit='hidden'
              transition={{ duration: 0.5 }}
            >
              <ul className='grid gap-4 py-4 '>
                {service.answer.map((answer, index) => (
                  <Link Link to={`/enasco_v1/${service.id-1+'-'+index}`} className='lg:hover:text-[#ff6c40]' key={index}>{answer}</Link>
                ))}
              </ul>
            </motion.div>
          )}
        </motion.div>
      ))}
    </div>

                
       
    </WrapperCard>
    <div className='faqs py-3 lg:hidden bg-[#ff6c40]'>    
    {services.map((item, i) => (
        <div className='faq pl-2' key={item.id}>
            <button className={`collapsible hover:underline ${collapsed === i ? "faqactive" : ""}`} onClick={() => toggle(i)}>{item.question}</button>
            <div className={` -ml-2 lg:-ml-0 content ${collapsed === i ? "show_content" : "hide_content"}`}>
                <ul className=' grid gap-4 py-4 text-lg text-[#2d3540]'>
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