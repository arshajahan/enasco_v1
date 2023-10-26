import React, { useState } from 'react'
import logo from './../assets/images/logo.jpg'
import { FiSearch } from 'react-icons/fi';
import WrapperCard from './UI/WrapperCard'
import { services } from '../assets/constants'

function Navbar() {
    const [isNavClicked, setNavClicked] = useState(false);
    const navToggle = () => {
        setNavClicked(!isNavClicked);
    }

    const [collapsed, setCollapsed] = useState(0);
    const toggle = (i) => {
      if (collapsed === i) {
        return setCollapsed(null)
      }
      setCollapsed(i);
    }
  return (
    <div className='relative bg-[#ff6600]'>
    <WrapperCard className='  h-fit text-white '>
           <div className=' flex justify-between gap-10 h-16'>
                <div className=' relative flex gap-4 lg:basis-1/3 '>
                    <div className='  self-center p-4  z-10 bg-white'>
                        <img src={logo} className=' w-24 lg:w-auto' />
                    </div>
                    <ul className=' gap-4 h-fit mx-auto my-auto font-extrabold hidden lg:flex'>
                        <li className='navlink'>News</li>
                        <li className='navlink'>Expertise</li>
                    </ul>
                </div>
                <div className='basis-1/3 my-auto  '>
                    <ul className='  items-center justify-evenly hidden lg:flex'>
                        <li className='navlink'>About Us</li>
                        <li className='navlink'>Sustainability</li>
                        <li className='navlink'>Contact</li>
                        <li className='navlink'><FiSearch/></li>
                    </ul>
                    <div className= ' navlink text-lg text-right lg:hidden' onClick={ () => navToggle()}>
                        NAVIGATION
                    </div>
                </div>
                
           </div>
    </WrapperCard>
    {
        isNavClicked && 
        <div className=' absolute top-0 right-0 z-10 bg-[#ff6600] h-screen w-full'>
            <div className=' mx-4 flex justify-between mt-6'>
                <div className=' p-4 bg-white'>
                    <img src={logo} onClick={ () => navToggle()} className=' w-24'/>
                </div>
                <span className=' self-end navlink text-white' onClick={ () => navToggle()}>CLOSE</span>
            </div>
            <div className='mt-10 faqs lg:hidden'>    
                {services.map((item, i) => (
                    <div className='faq ' key={item.id}>
                        <button className={`collapsible hover:underline ${collapsed === i ? "faqactive" : ""}`} onClick={() => toggle(i)}>{item.question}</button>
                        <hr/>
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
    }
    </div>
  )
}

export default Navbar