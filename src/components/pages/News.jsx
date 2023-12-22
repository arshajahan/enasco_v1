import React from 'react'
import WrapperCard from '../UI/WrapperCard'
import { Link } from 'react-router-dom'
import { useLocation } from 'react-router-dom';
import { news } from '../../assets/constants'

function News() {

const location = useLocation();
const passedData = location.state;
const id = passedData.id;

  return (
   <div className='bg-[#e3e3e3] lg:mx-36'>
        <WrapperCard className=' py-8 '>
        <Link to='/' className='navlink'>Home<span> &#8594;</span></Link>
        <div className='relative mt-12 bg-[#e3e3e3] mx-auto '>
            <Link to='/' className='navlink py-2 px-4 text-white font-bold bg-[#2d3540] absolute left-0 top-0'>Back</Link>
            <img src={news[id].image} className=' w-full h-full '/>
        </div>
        <div className=' bg-white text-[#2d3540]  p-6 md:p-12 grid gap-6'>
            <h2 className=' text-xl md:text-3xl font-bold'>
                {news[id].title}
            </h2>
            <span className=' font-semibold italic'>{news[id].date}</span>
            <p className='text-justify'>
                {news[id].content}
            </p>

        </div>
    </WrapperCard>
   </div>
  )
}

export default News