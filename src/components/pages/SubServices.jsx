import React from 'react'
import WrapperCard from '../UI/WrapperCard'
import { Link } from 'react-router-dom'
import { BsFacebook, BsInstagram, BsLinkedin, BsYoutube } from 'react-icons/bs'
import { useParams } from 'react-router-dom'
import { services } from '../../assets/constants'

function SubServices() {

    const { id } = useParams();
    // const location = useLocation();
    let x, xx, subid;

    if (id.includes('-')) {
      const splitIds = id.split('-');
      x = 9;
      xx = splitIds[0];
      subid = splitIds[1];
      console.log(x + "---"+subid)
    } else {
      xx = id;
      // If it's not in the "x-y" format, subid might be undefined or null depending on your logic.
    }

    window.scrollTo({ top: 0, behavior: 'smooth' });
    // console.log(services[0].subcontents[0].props.children[0])

  return (
    <div className=' pt-8 bg-gray-200 text-justify'>
    <WrapperCard className=' justify-between grid gap-8 lg:gap-28 xl:gap-56 lg:flex  '>
        
        <div className='lg:basis-2/4 mx-auto lg:mx-0 text-slate-600 '>
            <Link to='/enasco_v1'>Home<span> &#8594;</span></Link>
            <br/><br/>
            <h1 className='text-gray-700 text-left text-2xl md:text-3xl xl:text-4xl font-extrabold'>
              {x !== 9 && services[xx].question}
              {x === 9 && services[xx].answer[subid]} 
            </h1>
            <br/><br/>
            <p>
                {x !== 9 && services[xx].content}
                {x === 9 && services[xx].subcontents[subid]} 
                
            </p>
        </div>

        <div section='rightside' className='mb-4 lg:mb-0 w-full lg:mx-0 mx-auto -mt-10 lg:sticky top-0 lg:w-[25rem] xl:w-[30rem] lg:h-full 2xl:h-screen'>
          <div className='relative'>
            <img src={services[xx].image} className='lg:h-[300px] w-full object-cover' />
            <div className='absolute inset-0 bg-[#ff6c40] opacity-40'></div>
            <div className='bg-red-700 text-white p-8 xl:p-14 text-left relative z-10'>
              <p className='text-2xl md:text-3xl xl:text-[35px] leading-none font-extrabold mb-8'>
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