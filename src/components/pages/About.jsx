import React from 'react'
import WrapperCard from '../UI/WrapperCard'
import values from '../../assets/images/values.png'
import directors from '../../assets/images/directors.jpg'
import boat from '../../assets/images/boat.jpg'
import { Link } from 'react-router-dom'

function About() {
  return (
    
    <div className=' pt-8 bg-gray-200'>
        <WrapperCard className=' justify-between grid gap-8 lg:flex  '>
            
            <div className='lg:basis-2/4 mx-auto lg:mx-0 text-slate-600'>
                <Link to='/enasco_v1'>Home<span> &#8594;</span></Link>

                <div className='mt-10'>
                    <h1 className='text-[#005a96] text-4xl md:text-5xl font-extrabold'>ABOUT US</h1>
                    <p className=' text-justify mt-8 text-base'>Our mission, vision and values guide us to achieve our business objectives. They are firmly rooted in our history and help us to stay ahead in maritime excellence and to create value for our customers. We empower our clients with the complete portfolio. From designing, building, chartering and operating vessels to training people and providing innovative consultancy on a worldwide scale.</p>
                </div>
                <br/>
                <div className=''>
                    <h2 className='text-[#005a96] text-xl md:text-2xl font-extrabold mb-4'>Our Mission</h2>
                    {/* <p className=' text-justify text-black font-semibold text-sm'>Providing sustainable towage and related services to the maritime industry, exceeding clients’ expectations.</p> */}
                    <p className='mt-4 text-justify text-base'>At Enasco, our mission is to provide cutting-edge NDT solutions and comprehensive marine services to ensure the safety, reliability, and efficiency of our clients' assets. We are driven by a passion for safeguarding the environment and enabling sustainable, long-term success for businesses in the marine sector.</p>
                </div>

                <div className='mt-4'>
                <h2 className='text-[#005a96] text-xl md:text-2xl font-extrabold mb-4 '>Our Expertise</h2>
                    {/* <p className=' text-justify text-black font-semibold text-sm'>To be the leading towage and maritime service provider of the world.</p> */}
                    <p className='mt-4 text-justify text-base'>Our highly skilled team of NDT specialists, marine engineers, and technical experts brings a wealth of experience to every project. We have a proven track record of delivering precise, cost-effective, and timely services, with an unwavering commitment to the highest industry standards.</p>
                </div>

                <div className='mt-4'>
                <h2 className='text-[#005a96] text-xl md:text-2xl font-extrabold mb-4 '>NDT Services</h2>
                    {/* <p className=' text-justify text-black font-semibold text-sm'>To be the leading towage and maritime service provider of the world.</p> */}
                    <p className='mt-4 text-justify text-base'>We offer a wide range of NDT services, including ultrasonic testing, radiographic inspection, magnetic particle testing, liquid penetrant testing, and more. Our cutting-edge equipment and advanced methodologies enable us to detect flaws and irregularities in materials and structures, ensuring the integrity and safety of your assets.</p>
                </div>

                <div className='mt-4'>
                <h2 className='text-[#005a96] text-xl md:text-2xl font-extrabold mb-4 '>Marine Services</h2>
                    {/* <p className=' text-justify text-black font-semibold text-sm'>To be the leading towage and maritime service provider of the world.</p> */}
                    <p className='mt-4 text-justify text-base'>Our comprehensive marine services cover all aspects of vessel maintenance and repair. Whether you operate a commercial fleet or a private vessel, we provide services such as marine surveys, hull cleaning, maintenance planning, and repair services. We understand the importance of keeping your vessels in optimal condition, and we are dedicated to extending their lifespan while enhancing their performance.</p>
                </div>

                <div className='mt-4'>
                <h2 className='text-[#005a96] text-xl md:text-2xl font-extrabold mb-4 '>Safety and Environmental Responsibility</h2>
                    {/* <p className=' text-justify text-black font-semibold text-sm'>To be the leading towage and maritime service provider of the world.</p> */}
                    <p className='mt-4 text-justify text-base'>Safety is our top priority in every project we undertake. We are committed to ensuring the well-being of our team, clients, and the environment. Our procedures and practices are in strict compliance with international safety standards and environmental regulations. We employ eco-friendly approaches to reduce our carbon footprint, aligning our services with a sustainable future.</p>
                </div>

                <div className='mt-4'>
                <h2 className='text-[#005a96] text-xl md:text-2xl font-extrabold mb-4 '>Client-Centric Approach</h2>
                    {/* <p className=' text-justify text-black font-semibold text-sm'>To be the leading towage and maritime service provider of the world.</p> */}
                    <p className='mt-4 text-justify text-base'>At Enasco, our clients are at the heart of everything we do. We value our relationships and are committed to providing personalized, responsive services that meet and exceed your expectations. We collaborate closely with our clients to understand their unique needs and tailor our solutions to suit their specific requirements.</p>
                </div>

                <div className='mt-4'>
                    <h2 className='text-[#005a96] text-xl md:text-2xl font-extrabold mb-4'>Our Vision</h2>
                    <p className=' text-justify mt-8 text-base'>We envision a world where NDT and marine services are synonymous with trust, reliability, and sustainability. Our aim is to set new industry benchmarks and consistently exceed the expectations of our clients. <br/><br/>
                        Thank you for considering Enasco for your NDT and marine service needs. We look forward to the opportunity to work with you and provide the expertise, innovation, and excellence that will contribute to your success. Contact us today to discuss how we can help safeguard your assets and ensure their longevity in a rapidly changing world.</p>
                </div>
                <br/>
                <div className='mt-4 mb-16 lg:mb-12'>
                    <h2 className='text-[#005a96] text-xl md:text-2xl font-extrabold mb-4'>Our Board</h2>
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

            <div section='rightside' className=' mb-4 lg:mb-0 w-full lg:mx-0 mx-auto -mt-10  lg:sticky top-0 lg:w-[25rem] xl:w-[30rem] lg:h-full'>
                <div className=''>
                        <img src={boat} className=' lg:h-[300px] w-full'/>
                        <div className=' bg-[#005a96] text-white text-5xl lg:text-[60px] leading-none font-bold p-10 text-left'>
                            <p className=''>
                            ROOTED IN HISTORY, FOCUSED ON THE FUTURE
                            </p>
                        </div>
                </div>
            </div>
        
        </WrapperCard>

        
    </div>
    
  )
}

export default About