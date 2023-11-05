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
                    <h1 className=' text-[#005a96] text-3xl lg:text-5xl font-extrabold mb-8 lg:w-32'>AHEAD IN MARITIME EXCELLENCE</h1>
                        We are ENASCO. The leading international towage and maritime company. Driven by our passion ‘Ahead in Maritime Excellence’, we empower our clients and stakeholders with the complete portfolio. From designing, building, chartering and operating vessels to training people and providing innovative consultancy services on a worldwide scale.
                        <br/><br/><br/>With roots going back as far as 1911, ENASCO is a family-owned company and trusted voice and partner of leading companies within the Maritime Industry. We take an innovation-led, sustainable approach to help our clients invent their future.
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