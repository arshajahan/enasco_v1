import React from 'react'
import map from '../assets/images/map.svg'
import WrapperCard from './UI/WrapperCard'
import '../../src/App.css'

function InDetail() {
  return (
   <div className=' bg-[#e3e3e3] pb-16'>
        <WrapperCard className=' pt-24'>
             <div className='flex flex-col-reverse lg:flex-row gap-12 items-center bg-[#e3e3e3]'>
                <div className=' basis-2/6 '>
                    <div className=' '>
                    <h1 className=' text-[#005a96] text-3xl lg:text-5xl font-extrabold mb-8 lg:w-32'>CONNECT YOUR BUSINESS WORLD.</h1>
                    Welcome to Enasco, your trusted partner in Non-Destructive Testing (NDT) and Marine Services. We are a pioneering force in the industry, committed to excellence, safety, and environmental responsibility. Our unwavering dedication to quality and innovation sets us apart as a reliable choice for your NDT and marine service needs.
                        <br/><br/><br/>At Enasco, our mission is to provide cutting-edge NDT solutions and comprehensive marine services to ensure the safety, reliability, and efficiency of our clients' assets. We are driven by a passion for safeguarding the environment and enabling sustainable, long-term success for businesses in the marine sector.
                    </div>
                </div>
                <div className=' relative basis-4/6 '>
                    <img className=' md:h-[27rem] w-auto ' alt="world map" src={map}/>
                </div>
            </div>
            <div className=' mt-20 grid sm:flex lg:grid gap-3 text-white md:font-bold w-fit'>
                <span className='p-3 self-center navlink w-fit bg-red-500'>SUSTAINABILITY</span>
                <span className='p-3 self-center navlink w-fit bg-[#005a96]'>VALUES</span>
                <span className='p-3 self-center text-center navlink w-fit bg-[#005a96]'>VISION / MISSION</span>
            </div>
        </WrapperCard>
   </div>
  )
}

export default InDetail