import React from 'react'
import WrapperCard from '../UI/WrapperCard'
import { Link } from 'react-router-dom'
import { BsFacebook, BsInstagram, BsLinkedin, BsTwitter, BsWhatsapp, BsYoutube } from 'react-icons/bs'
import { useParams } from 'react-router-dom'
import { services } from '../../assets/constants'

function SubServices() {

    const { id } = useParams();
    // const location = useLocation();
    let x, xx, subid = 0, subservice;

    function getIdByPath(pathValue) {
      const foundObject = services.find(obj => obj.path === pathValue);
      return foundObject ? foundObject.id : null;
    }

    if (id.includes(':')) {
      const splitIds = id.split(':');
      x = 9;
      xx = getIdByPath(splitIds[0]);
      subservice = splitIds[1];
      subid = services[xx].answer.findIndex(ans => ans.split(' ')[0] === subservice);

    } else {
      xx = getIdByPath(id);
      // If it's not in the "x-y" format, subid might be undefined or null depending on your logic.
    }

    window.scrollTo({ top: 0, behavior: 'smooth' });
    // console.log(services[0].subcontents[0].props.children[0])

  return (
    <div className=' pt-8 bg-gray-200 text-justify'>
    <WrapperCard className=' justify-between grid gap-8 lg:gap-28 xl:gap-56 lg:flex  '>
        
        <div className='lg:basis-2/4 mx-auto lg:mx-0 text-slate-600 '>
            <Link to='/'>Home<span> &#8594;</span></Link>
            <br/><br/>
            <h1 className='text-gray-700 text-left text-2xl md:text-3xl xl:text-4xl font-extrabold'>
              {x !== 9 && services[xx].question}
              {x === 9 && services[xx].answer[subid]} 
            </h1><br/>
            <div>
                {x !== 9 && services[xx].content}
                {x !== 9 && services[xx].subcontents.map((sc, key) => (
                    <div key={key}>
                      {sc}
                    </div>
                ))}
                {x === 9 && services[xx].subcontents[subid]} 
            </div>
        </div>

        <div section='rightside' className='mb-4 lg:mb-0 w-full lg:mx-0 mx-auto -mt-10 lg:sticky top-0 lg:w-[25rem] xl:w-[30rem] lg:h-full 2xl:h-full'>
          <div className='relative'>
            
            <div className='bg-red-700 text-white p-8 xl:p-14 text-left relative z-10'>
              <p className='text-2xl md:text-3xl xl:text-[35px] leading-none font-extrabold mb-8'>
                GET IN TOUCH
              </p>
              <p className='text-xl'>
                Our team of dedicated experts is here to help.<br/><br/>
                T. +965 224 51 615
                <br/>
                <span className='underline navlink'>
                  <a href="mailto:info@enas.co">Mail us!</a>
                </span>
              </p>
              <div className='mt-12 w-fit flex gap-4'>
                <a href='https://www.linkedin.com/company/enasco/'><BsLinkedin size={28} /></a>
                <a href='https://en-gb.facebook.com/enascowll'><BsFacebook size={28} /></a>
                <a href='https://twitter.com/ENASCO_WLL'><BsTwitter size={28} /></a>
                {/* <a href='https://api.whatsapp.com/send?phone=+96522451615&text=Hello%20Enasco'><BsWhatsapp size={28} /></a> */}
              </div>
            </div>
            <img src={services[xx].image} className='lg:h-full w-full object-cover' />
            <div className='absolute inset-0 bg-[#ff6c40] opacity-40'></div>
          </div>
        </div>


    
    </WrapperCard>

    
    </div>
  )
}

export default SubServices