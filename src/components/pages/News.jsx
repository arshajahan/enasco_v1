import React from 'react'
import WrapperCard from '../UI/WrapperCard'
import { Link } from 'react-router-dom'
import { useLocation } from 'react-router-dom';

function News() {

const location = useLocation();
const passedData = location.state;


  return (
   <div className='bg-[#e3e3e3] lg:mx-36'>
        <WrapperCard className=' py-8 '>
        <Link to='/enasco_v1' className='navlink'>Home<span> &#8594;</span></Link>
        <div className='relative mt-12 bg-slate-100'>
            <Link to='/enasco_v1' className='navlink py-2 px-4 text-white font-bold bg-[#2d3540] absolute left-0 top-0'>Back</Link>
            <img src={passedData.image} className=' w-full h-full mx-auto'/>
        </div>
        <div className=' bg-white text-[#2d3540]  p-6 md:p-12 grid gap-6'>
            <h2 className=' text-xl md:text-3xl font-bold'>
                {passedData.title}
            </h2>
            <span className=' font-semibold italic'>{passedData.date}</span>
            <p className='text-justify'>
                Kuwait Integrated Petroleum Industries Company (KIPIC), a subsidiary under the umbrella of Kuwait Petroleum Corporation (KPC), has recently awarded ENASCO General Trading WLL an extensive contract for marine service maintenance. The contractual commitment spans an impressive 4-year period, signifying a robust and long-term partnership between KIPIC and ENASCO. The formal signing of the contract occurred at the KIPIC office located in Al Zour Refinery on the 19th of May in the year 2022.
                <br/><br/>
                The scope of this significant agreement is vast, encompassing a comprehensive array of marine services. The designated areas for maintenance cover critical and strategic locations, including the LNGI Terminal, LNGI Port, Sea Island, Sulphur Pier, Small Boat Harbor, Marine Terminal, and the Al Zour Refinery. This diverse scope of work underscores the essential role that ENASCO will play in maintaining and ensuring the efficient operation of these marine facilities over the contractual period.
                <br/><br/>
                The agreement was solidified through the signatures of key representatives from both entities. Mr. Ghanim Abdulla Salman Al-Ghanim, serving as the Team Leader LNGI Operational Tech Support for KIPIC, and Mr. Mubarak Fahad Al Hajiri, the representative from ENASCO, formally endorsed the contract, symbolizing the commitment of both organizations to the successful execution of the marine service maintenance project.
                <br/><br/>
                Parallel to the commissioning of the Al Zour Refinery, a crucial liaison meeting was convened. The primary objective of this meeting was to facilitate in-depth discussions on the intricacies of the work mechanism and to outline a comprehensive work plan. This meticulous planning process aimed to establish a clear understanding of the roles and responsibilities of each party involved in the project. Additionally, it allowed for the alignment of strategies to ensure that the maintenance services provided by ENASCO seamlessly integrate with the operational requirements of the Al Zour Refinery and the associated marine facilities.
                <br/><br/>
                By holding this liaison meeting in conjunction with the refinery's commissioning, KIPIC and ENASCO demonstrated their commitment to a collaborative and synergistic approach. This strategic coordination is vital for the seamless integration of maintenance services into the operational framework of the Al Zour Refinery, ensuring optimal performance and longevity of the marine infrastructure over the contracted 4-year period.
            </p>

        </div>
    </WrapperCard>
   </div>
  )
}

export default News