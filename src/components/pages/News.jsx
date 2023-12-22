import React from 'react'
import WrapperCard from '../UI/WrapperCard'
import { Link } from 'react-router-dom'
import { useLocation } from 'react-router-dom';
import { news } from '../../assets/constants'

function News() {

const location = useLocation();
const passedData = location.state;
const image = passedData.image;
const title = passedData.title;
const id = passedData.id;
const date = passedData.date;

  return (
   <div className='bg-[#e3e3e3] lg:mx-36'>
        <WrapperCard className=' py-8 '>
        <Link to='/' className='navlink'>Home<span> &#8594;</span></Link>
        <div className='relative mt-12 bg-[#e3e3e3] mx-auto '>
            <Link to='/' className='navlink py-2 px-4 text-white font-bold bg-[#2d3540] absolute left-0 top-0'>Back</Link>
            <img src={image} className=' w-full h-full '/>
        </div>
        <div className=' bg-white text-[#2d3540]  p-6 md:p-12 grid gap-6'>
            <h2 className=' text-xl md:text-3xl font-bold'>
                {title}
            </h2>
            <span className=' font-semibold italic'>{date}</span>
            <p className='text-justify'>
                {news[id].content}
            </p>

        </div>
    </WrapperCard>
   </div>
  )
}

export default News