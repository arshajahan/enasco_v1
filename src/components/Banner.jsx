import React, { useState } from 'react'
import bannerImage from '../assets/images/banner2.png'
import WrapperCard from './UI/WrapperCard'
import { services } from '../assets/constants'
import { FiPlay } from 'react-icons/fi'
function Banner() {

    const [collapsed, setCollapsed] = useState(null);
    const toggle = (i) => {
      if (collapsed === i) {
        return setCollapsed(null)
      }
      setCollapsed(i);
    }

  return (
    <div className='bg-[#e3e3e3] -mt-20'>
    <div 
        className=" bg-cover bg-center h-screen"
        style={{
            backgroundImage: `url(${bannerImage})`, // Set the background image
        }}
    >  
    </div>
    <WrapperCard className='relative '>
    <div className='absolute lg:bottom-[21rem] xl:bottom-[20rem] bottom-0'>
        <div className='flex flex-col justify-between lg:flex-row py-4'>
            <p className='lg:basis-[700px] uppercase font-extrabold text-3xl md:text-[2.5rem] lg:text-6xl text-white'>Connect your business world.</p>   
            <span className=' justify-center mt-2 lg:basis-[230px] cursor-pointer text-white bg-red-600 lg:text-left lg:text-red-600 hover:bg-red-600 w-full hover:text-white uppercase text-lg p-2 lg:p-4 self-end font-extrabold lg:bg-white ml-2 flex items-center'>
                <FiPlay className=' lg:self-start text-4xl inline' /> {/* FiPlay icon */}
                <span className='ml-2'>Connect with Enasco</span>
            </span>
        </div>
    </div>

     
            <div className='hidden lg:block opacity-90 -mt-24 '>
                <div className=' bannerLink px-10 flex pt-5 capitalize text-white font-extrabold xl:text-lg bg-[#ff6600] h-24'>
                    <span className=" lg:basis-1/5">petroleum<br/>services</span>
                    <span className=" lg:basis-1/5">human<br/>resource</span>
                    <span className=" lg:basis-1/5">equipment</span>
                    <span className=" lg:basis-1/5">general<br/>trading</span>
                    <span className=" lg:basis-1/5">ICT</span>
                </div>
            </div>
            
            <div className=' hidden bg-white lg:flex px-10 h-auto text-[#005a96] '>
                    <div className='  lg:basis-1/5'>
                        <ul className='grid gap-4 py-4'>
                            <li>Harbour Towage</li>
                            <li>Offshore & Terminal<br/>Towage</li>
                            <li>Chartering & Salvage</li>
                            <li>Inland Shipping</li>
                        </ul>
                    </div>
                    <div className='  lg:basis-1/5'>
                        <ul className='grid gap-4 py-4'>
                            <li>SPM Operations &<br/>Maintenance</li>
                            <li>Asset Integrity<br/>Management</li>
                        </ul>
                    </div>
                    <div className='  lg:basis-1/5'>
                        <ul className='grid gap-4 py-4'>
                            <li>OptiPort</li>
                            <li>Analytics &<br/>Reporting</li>
                            <li>Drone Line Transfer</li>
                        </ul>
                    </div>
                    <div className='  lg:basis-1/5'>
                        <ul className='grid gap-4 py-4'>
                            <li>Training</li>
                            <li>Consultancy</li>
                            <li>Towmaster Services</li>
                        </ul>
                    </div>
                    <div className='  lg:basis-1/5'>
                        <ul className='grid gap-4 py-4'>
                            <li>Ship Management</li>
                            <li>Innovations</li>
                            <li>Projects & New<br/>Building</li>
                            <li>Fast Crew<br/>Transportation</li>
                        </ul>
                    </div>
                </div>

                
       
    </WrapperCard>
    <div className='faqs lg:hidden bg-[#ff6c40]'>    
    {services.map((item, i) => (
        <div className='faq' key={item.id}>
            <button className={`collapsible hover:underline ${collapsed === i ? "faqactive" : ""}`} onClick={() => toggle(i)}>{item.question}</button>
            <div className={`content ${collapsed === i ? "show_content" : "hide_content"}`}>
                <ul className=' grid gap-4 text-lg text-blue-700'>
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