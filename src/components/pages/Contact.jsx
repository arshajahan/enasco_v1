import React from 'react'
import { Link } from 'react-router-dom'
import contact from '../../assets/images/contact2.jpg'
import WrapperCard from '../UI/WrapperCard'
import { BsFacebook, BsInstagram, BsLinkedin, BsYoutube } from 'react-icons/bs'

function Contact() {
  return (
    <div className=' pt-8 bg-gray-200'>
    <WrapperCard className=' justify-between grid gap-8 lg:gap-56 lg:flex  '>
        
        <div className='lg:basis-2/4 mx-auto lg:mx-0 text-slate-600 '>
            <Link to='/enasco_v1'>Home<span> &#8594;</span></Link>

            <div className='mt-10 '>
                <h1 className='text-gray-700 text-4xl md:text-5xl font-extrabold'>CONTACT</h1>
                <p className=' mt-8 '>
                    
                    ENASCO International - Headquaters
                    <br/>
                    ENASCO HQ: T. +91 89 67 98 798
                    <br/>
                    EMERGENCY RESPONSE : T. +897 798 797 93
                    </p>
                <br/>
                <p className='' >
                <b>Visitor address</b><br/>
                Wilhelminakade 318<br/>
                3072 AR Rotterdam<br/>
                The State of Kuwait<br/>
                </p><br/><br/>

                <p className=''>
                <b>Need expert advice?</b> Our team of dedicated experts is here to help. <br/>
                Contact us today to tap into their knowledge and expertise.
                </p>
                <br/>
            </div>
            <div className="w-full">
                <div className="mb-4">
                    <input type="text" placeholder="Your name" className="w-full border rounded py-2 px-3" />
                </div>
                <div className="mb-4">
                    <input type="text" placeholder="Your email" className="w-full border rounded py-2 px-3" />
                </div>
                <div className="mb-4">
                    <textarea placeholder="Your message" className="w-full border rounded py-2 px-3" rows="5" />
                </div>
                <div>
                    <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">Submit</button>
                </div>
            </div>
            <br/>
           
        </div>

        <div section='rightside' className=' mb-4 lg:mb-0 w-full lg:mx-0 mx-auto -mt-10  lg:sticky top-0 lg:w-[25rem] xl:w-[30rem] lg:h-full 2xl:h-screen'>
            <div className=''>
                    <img src={contact} className=' lg:h-[300px] w-full'/>
                    <div className=' bg-red-700 text-white p-10 text-left'>
                        <p className=' text-4xl lg:text-[35px] leading-none font-extrabold mb-8'>
                        NEED AN EXPERT ADVICE?
                        </p>
                        <p className=' text-xl'>
                            Our team of dedicated experts is here to<br/> help.<br/>
                            T. +31 10 217 0 217
                            <br/>
                            <span className=' underline navlink'>Mail us!</span>
                        </p>
                        <div className=' mt-12 w-fit flex gap-4'>
                            <a href='#'><BsLinkedin size={28} /></a>
                            <a href='#'><BsFacebook size={28} /></a>
                            <a href='#'><BsInstagram size={28} /></a>
                            <a href='#'><BsYoutube size={28} /></a>
                        </div>
                    </div>
            </div>
        </div>
    
    </WrapperCard>

    
    </div>
  )
}

export default Contact