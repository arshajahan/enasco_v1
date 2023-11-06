import React from 'react'
import WrapperCard from '../UI/WrapperCard'
import values from '../../assets/images/values.png'
import directors from '../../assets/images/directors.jpg'
import boat from '../../assets/images/boat.jpg'
import { Link } from 'react-router-dom'

function About() {
  return (
    
    <div className='grid lg:flex gap-6 pt-8 justify-between '>
        <WrapperCard className='basis-2/4 '>
            
            <div className=' lg:w-2/3 mx-auto'>
                <Link to='/enasco_v1'>Home<span> &#8594;</span></Link>

                <div className='mt-10'>
                    <h1 className='text-[#005a96] text-5xl font-extrabold'>ABOUT US</h1>
                    <p className=' text-justify mt-8 text-lg'>Our mission, vision and values guide us to achieve our business objectives. They are firmly rooted in our history and help us to stay ahead in maritime excellence and to create value for our customers. We empower our clients with the complete portfolio. From designing, building, chartering and operating vessels to training people and providing innovative consultancy on a worldwide scale.</p>
                </div>
                <br/>
                <div className=''>
                    <h2 className='text-[#005a96] text-3xl font-extrabold mb-4'>Our Mission</h2>
                    <p className=' text-justify text-black font-semibold text-sm'>Providing sustainable towage and related services to the maritime industry, exceeding clients’ expectations.</p>
                    <p className='mt-4 text-justify text-lg'>Our mission supports our spirit which is very alive in our daily activities. Our company culture represents the maritime spirit of a 24/7 can-do attitude, combined with a daring challenge to succeed in complying with our defined promises as well as the requirements of our clients’ business relations and environment.</p>
                </div>

                <div className='mt-4'>
                <h2 className='text-[#005a96] text-3xl font-extrabold mb-4 '>Our Vision</h2>
                    <p className=' text-justify text-black font-semibold text-sm'>To be the leading towage and maritime service provider of the world.</p>
                    <p className='mt-4 text-justify text-lg'>The service-minded and innovative attitude of the organization represents the vision of the original founders of the company and the family generations that followed. We aim to be leading in our fields of expertise.</p>
                </div>

                <div className='mt-4'>
                    <h2 className='text-[#005a96]text-3xl font-extrabold mb-4'>Our Values</h2>
                    <img src={values}/>
                </div>
                <br/>
                <div className='mt-4 mb-16 lg:mb-4'>
                    <h2 className='text-[#005a96]text-3xl font-extrabold mb-4'>Our Board</h2>
                    <img src={directors}  className=''/>
                    <div className='mt-3'>
                        <span className=' font-semibold'>President & CEO: Ard-Jan Kooren</span>
                        <p className=' text-justify mt-1'>Ard-Jan Kooren, 4th generation Kooren, joined KOTUG in 1990 as Operations Employee. He was promoted to Manager Marketing and Operations in 1993 and became Commercial Director and Vice President in 1996. He followed in his father’s footsteps as CEO in 2002. </p>
                    </div>
                    <br/>
                    <div className='mt-3'>
                        <span className=' font-semibold'>Vice President & CCO: Osman Munir</span>
                        <p className=' text-justify mt-1'>Osman Munir joined KOTUG in 2007. Having started as Group Controller and later on as Manager Project Department, he rose through the ranks to become Director Business Development, Terminals & JVC (Joint Venture Companies) of the Group. In January 2017 he was appointed CCO. In 2021 Osman Munir was promoted to Vice President of the KOTUG Group of Companies.</p>
                    </div>
                </div>

            </div>

        
        </WrapperCard>
    <div section='rightside' className='mb-4 lg:mb-0 md:w-3/5 mx-auto -mt-8 lg:sticky top-0 lg:w-[30rem] h-full'>
                <div className=''>
                    <img src={boat} className=''/>
                    <div className=' bg-[#005a96] text-white text-5xl lg:text-[60px] leading-none font-bold p-10 text-left'>
                        <p className=''>
                        ROOTED IN HISTORY, FOCUSED ON THE FUTURE
                        </p>
                    </div>
                </div>
            </div>
    </div>
    
  )
}

export default About