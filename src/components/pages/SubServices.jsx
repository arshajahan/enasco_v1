import React from 'react'
import WrapperCard from '../UI/WrapperCard'
import { Link } from 'react-router-dom'
import { BsFacebook, BsInstagram, BsLinkedin, BsYoutube } from 'react-icons/bs'
import { useParams } from 'react-router-dom'
import { services } from '../../assets/constants'

function SubServices() {

    const { id } = useParams();
    // const location = useLocation();
    window.scrollTo({ top: 0, behavior: 'smooth' });

  return (
    <div className=' pt-8 bg-gray-200 text-justify'>
    <WrapperCard className=' justify-between grid gap-8 lg:gap-56 lg:flex  '>
        
        <div className='lg:basis-2/4 mx-auto lg:mx-0 text-slate-600 '>
            <Link to='/enasco_v1'>Home<span> &#8594;</span></Link>
            <br/><br/>
            <h1 className='text-gray-700 text-4xl md:text-5xl font-extrabold'>{services[id].question}</h1>
            <br/><br/>
            <p>
                {services[id].content}
            </p>
        </div>

        <div section='rightside' className='mb-4 lg:mb-0 w-full lg:mx-0 mx-auto -mt-10 lg:sticky top-0 lg:w-[25rem] xl:w-[30rem] lg:h-full 2xl:h-screen'>
          <div className='relative'>
            <img src={services[id].image} className='lg:h-[300px] w-full object-cover' />
            <div className='absolute inset-0 bg-[#ff6c40] opacity-40'></div>
            <div className='bg-red-700 text-white p-14 text-left relative z-10'>
              <p className='text-4xl lg:text-[35px] leading-none font-extrabold mb-8'>
                GET IN TOUCH
              </p>
              <p className='text-xl'>
                Our team of dedicated experts is here to<br/> help.<br/>
                T. +31 10 217 0 217
                <br/>
                <span className='underline navlink'>Mail us!</span>
              </p>
              <div className='mt-12 w-fit flex gap-4'>
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

export default SubServices