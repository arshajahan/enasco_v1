import React from 'react'
import WrapperCard from '../UI/WrapperCard'
import { Link } from 'react-router-dom'
import boat from '../../assets/images/sship.png'
import { useLocation } from 'react-router-dom';

function News() {

const location = useLocation();
const passedData = location.state;


  return (
   <div className='bg-[#e3e3e3]'>
        <WrapperCard className=' py-8'>
        <Link to='/enasco_v1' className='navlink'>Home<span> &#8594;</span></Link>
        <div className='relative mt-12 bg-slate-100'>
            <Link to='/enasco_v1' className='navlink py-2 px-4 text-white font-bold bg-[#005a96] absolute left-0 top-0'>Back</Link>
            <img src={passedData.image} className=' w-full h-auto mx-auto'/>
        </div>
        <div className=' bg-white p-6 md:p-12 grid gap-6'>
            <h2 className=' text-xl md:text-3xl font-bold'>
                {passedData.title}
            </h2>
            <span className=' font-semibold italic'>{passedData.date}</span>
            <p className=' text-justify text-gray-800'>
                In 2021, after a rigorous and competitive process, Trans Mountain, on behalf of shippers for the Trans Mountain Expansion Project (TMEP), awarded KOTUG Canada Inc. a long-term contract to provide enhanced escort towage services for tankers that load crude oil at Trans Mountain’s Westridge Marine Terminal.
                <br/><br/>   
                Trans Mountain operates Canada’s only oil pipeline servicing the West Coast of Canada providing tidewater access to foreign markets for Canada’s petroleum resources.
                <br/><br/> 
                Under the agreement, KOTUG Canada, which is a partnership between KOTUG International B.V. and Canada’s Horizon Maritime Services Ltd., will escort tankers from the harbour limits of the Port of Vancouver to the Pacific Ocean, through the commercial shipping lanes of the Salish Sea. To provide this service, KOTUG Canada has partnered with Sc’ianew First Nation from Beecher Bay, strategically located along the shipping route.
                <br/><br/> 
                KOTUG Canada shall provide the service using two revolutionary new build dual fuel, methanol and diesel, escort tugs, which have been specially designed by Robert Allan Ltd., a world-renowned naval architect firm based in Vancouver, BC. These are the first vessels of this kind for Canada’s West Coast. The Escort Tugs are being purpose built by SANMAR Shipyards in Turkey. The design for these tugs provides significant environmental benefits to further reduce greenhouse gas (GHG) emissions and underwater noise. The escort tugs are equipped with fire fighting and spill response capabilities and will help to mitigate the risk of marine spills to the Salish Sea and communities from laden tankers as well as other commercial marine traffic.
                <br/><br/> 
                The new build vessels will replace the existing tugs selected for TMEP announced by KOTUG Canada with the Sc’ianew First Nation in December 2021. Together, with a third existing KOTUG Canada vessel on long term contract to Western Canada Marine Response Corporation (WCMRC), the vessels will operate out of the Cheanuh Marina in Beecher Bay on the south coast of Vancouver Island, owned and operated by the Sc’ianew First Nation. Together, the three KOTUG Canada vessels will improve the overall safety of the marine network in the region. KOTUG Canada’s crews are highly skilled and capable Canadian mariners and, as part of the partnership between KOTUG Canada and the Sc’ianew First Nation, there will be career and training opportunities for members of the Sc’ianew First Nation including emergency response and mariner positions.
                <br/><br/> 
                “We are pleased to move forward with Sc’ianew First Nation and implement this new build green solution to the Trans Mountain Expansion Project enhanced tug escort program,” said Steve Widmeyer, Director, KOTUG Canada. “These tugs exhibit the aspirations of the BC tug market to improve environmental performance of shipping activity and advance new solutions to local and global environmental challenges.”
                <br/><br/> 
                Innovations for the new build tugs include a revolutionary hybrid propulsion configuration enabling the escort tugs to operate using both methanol and diesel as marine fuels. Both vessels will be equipped with a mechanical cross link system (the latest SCHOTTEL SYDRIVE azimuth thrusters) to enable a single engine to drive two thrusters, significantly reducing fuel consumption. Additionally, the hulls of the two tugs will have  a graphene paint applied (from Graphite Innovation Technologies, GIT) to reduce biofouling and enhance hull-smoothness of the vessels which reduces underwater radiant noise and makes the vessels more fuel efficient.
                <br/><br/> 
                These highly sophisticated dual fuel methanol escort tugs are consistent with KOTUG’s innovative approach; dating back to 1999 with the first ever constructed RotorTug, the first converted battery hybrid tugboat in 2012, two newbuilding battery hybrid tugs in 2015 and the recently launched world’s first fully electric pusher vessel.
                <br/><br/> 
                “Sc’ianew First Nation worked hard to bring the resources to our community to protect the ocean and our natural resources,” said Chief Russell Chipps. “At the same time, we are creating economic development and environmental protection opportunities within our own community and the addition of these new dual fuel tugs builds our capacity to participate in greener solutions for marine shipping.”
                <br/><br/> 
                “The Trans Mountain Expansion Project includes significant measures to protect the marine environment,” said Michael Davies, Chief Operating Officer of Trans Mountain. “The enhanced escort system reduces the risk of a spill from tankers moving through our local waters despite the overall increase in the number of ships. KOTUG brought a green solution to meeting this challenge in partnership with Sc’ianew First Nation. This will create more jobs for the BC south coast and extend Project benefits to coastal communities.”
            </p>
        </div>
    </WrapperCard>
   </div>
  )
}

export default News