import React, { useState } from 'react'
import bannerImage from '../assets/images/banner.jpg'
import WrapperCard from './UI/WrapperCard'
import { services } from '../assets/constants'
function Banner() {

    const [collapsed, setCollapsed] = useState(0);
    const toggle = (i) => {
      if (collapsed === i) {
        return setCollapsed(null)
      }
      setCollapsed(i);
    }

  return (
    <div className='bg-[#e3e3e3] -mt-20'>
    <div 
        className=" bg-cover bg-center h-[550px] lg:h-[665px] "
        style={{
            backgroundImage: `url(${bannerImage})`, // Set the background image
        }}
    >  
    </div>
    <WrapperCard className='relative '>
        <div className='absolute lg:bottom-80 bottom-0 '>
            <div className='flex flex-col justify-between lg:flex-row gap-4  py-4 '>
                <p className='lg:basis-[150px] uppercase font-extrabold text-4xl lg:text-6xl text-white'>Connect your business world.</p>
                <span className=' text-center lg:basis-[200px] cursor-pointer text-white bg-red-600 lg:text-left lg:text-red-600 hover:bg-red-600 w-full hover:text-white uppercase text-lg p-2 lg:p-4 self-end font-extrabold lg:bg-white' >Connect with Enasco</span>
            </div>
        </div>

     
            <div className='hidden lg:block opacity-90 -mt-24 '>
                <div className=' bannerLink px-10 flex pt-5 capitalize text-white font-extrabold text-lg bg-[#ff6600] h-24'>
                    <span className="equal-width">petroleum<br/>services</span>
                    <span className="equal-width">human<br/>resource</span>
                    <span className="equal-width">equipment</span>
                    <span className="equal-width">general<br/>trading</span>
                    <span className="equal-width">ICT</span>
                </div>
            </div>
            
            <div className=' hidden bg-white font-bold lg:flex px-10 h-auto text-blue-900 '>
                    <div className=' equal-width'>
                        <ul className='grid gap-4 py-4'>
                            <li>Harbour Towage</li>
                            <li>Offshore & Terminal<br/>Towage</li>
                            <li>Chartering & Salvage</li>
                            <li>Inland Shipping</li>
                        </ul>
                    </div>
                    <div className=' equal-width'>
                        <ul className='grid gap-4 py-4'>
                            <li>SPM Operations &<br/>Maintenance</li>
                            <li>Asset Integrity<br/>Management</li>
                        </ul>
                    </div>
                    <div className=' equal-width'>
                        <ul className='grid gap-4 py-4'>
                            <li>OptiPort</li>
                            <li>Analytics &<br/>Reporting</li>
                            <li>Drone Line Transfer</li>
                        </ul>
                    </div>
                    <div className=' equal-width'>
                        <ul className='grid gap-4 py-4'>
                            <li>Training</li>
                            <li>Consultancy</li>
                            <li>Towmaster Services</li>
                        </ul>
                    </div>
                    <div className=' equal-width'>
                        <ul className='grid gap-4 py-4'>
                            <li>Ship Management</li>
                            <li>Innovations</li>
                            <li>Projects & New<br/>Building</li>
                            <li>Fast Crew<br/>Transportation</li>
                        </ul>
                    </div>
                </div>

                
       
    </WrapperCard>
    <div className='faqs lg:hidden bg-[#ff6600]'>    
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