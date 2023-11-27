import React from 'react'
import { Link } from 'react-router-dom'
import WrapperCard from '../UI/WrapperCard'
import directors from '../../assets/images/sustainability.jpg'

function Sustainability() {
  return (
    <div className=' pt-8 bg-gray-200'>
    <WrapperCard className=' justify-between grid gap-10 xl:gap-32 lg:flex  '>
        
        <div className='lg:basis-2/4 mx-auto lg:mx-0 text-slate-600 '>
            <Link to='/enasco_v1'>Home<span> &#8594;</span></Link>

            <div className='mt-10 text-justify'>
                <h1 className='text-gray-700 text-4xl md:text-5xl font-extrabold'>SUSTAINABILITY</h1>
                <p className=' mt-8 '>
                    Enasco is committed to principles and practices that contribute to achieving our goals in a sustainable manner. Safe and sound operations for the well-being of all involved, respect for the environment, and an excellent level of training and competence are absolute requisites for achieving this goal. Our values are integrated into our daily business and are built around people, planet and business continuity.    
                    <br/><br/>
                    Apart from running a sustainable organisation ourselves, we are also committed to helping our customers achieve their sustainability goals. We do that with inventions that not only support the global energy transition but also improve the efficiency and safety of operations.
                </p>
                <br/>
                <h2 className='text-gray-700 text-2xl md:text-3xl font-extrabold'>PEOPLE</h2>
                <br/>
                <p className=''>
                    People are at the heart and soul of our company and make everything happen. Safe and sound operations for the well-being of all involved, and an excellent level of training and competence, are absolute requisites for achieving this. We recognize individual contributions and embrace diversity and gender equality. By providing coaching and opportunities for capability and skill-building Enasco supports employee growth and professional development. We support the local communities where we operate. But above all, we operate as One Enasco, One Team!
                </p>
                <br/>
                <h2 className='text-gray-700 text-2xl md:text-3xl font-extrabold'>PLANET</h2>
                <br/>
                <span className=' text-gray-700 font-semibold'>Minimize the impact through innovation.</span>
                <br/><br/> 
                <p className=''>
                    People are at the heart and soul of our company and make everything happen. Safe and sound operations for the well-being of all involved, and an excellent level of training and competence, are absolute requisites for achieving this. We recognize individual contributions and embrace diversity and gender equality. By providing coaching and opportunities for capability and skill-building Enasco supports employee growth and professional development. We support the local communities where we operate. But above all, we operate as One Enasco, One Team!
                </p>
                <br/>
                <h2 className='text-gray-700 text-2xl md:text-3xl font-extrabold'>BUSINESS CONTINUITY</h2>
                <br/>
                <p className=''>
                    Embracing new technologies enable us to stay ahead in maritime excellence and to keep our license to operate. We are constantly innovating to contribute to more environmentally friendly operations. We develop solutions for disruptive occurrences such as a pandemic, for efficiency and for safety improvement.
                </p>
                <br/>
            </div>
            <br/>
        </div>

        <div section='rightside' className=' mb-4 lg:mb-0 w-full lg:mx-0 mx-auto -mt-10  lg:sticky top-0 lg:w-[25rem] xl:w-[30rem] lg:h-full 2xl:h-screen'>
            <div className=''>
                    <img src={directors} className=' lg:h-[300px] w-full'/>
                    <div className=' bg-gray-700 text-white text-5xl xl:text-[60px] leading-none font-bold p-8 md:p-12 lg:p-16 text-left'>
                        <p className=''>
                        PEOPLE, PLANET, BUSINESS CONTINUITY
                        </p>
                    </div>
            </div>
        </div>
    
    </WrapperCard>

    
    </div>
  )
}

export default Sustainability