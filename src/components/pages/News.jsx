import React from 'react'
import WrapperCard from '../UI/WrapperCard'
import { Link } from 'react-router-dom'
import { useParams } from 'react-router-dom';
import { news } from '../../assets/constants'

function News() {

const { id } = useParams();

const selectedNews = news.find(item => item.path === id);

  return (
   <div className='bg-[#e3e3e3] lg:mx-36'>
        <WrapperCard className=' py-8 '>
        <Link to='/' className='navlink'>Home<span> &#8594;</span></Link>
        <div className='relative mt-12 bg-[#e3e3e3] mx-auto '>
            <Link to='/' className='navlink py-2 px-4 text-white font-bold bg-[#2d3540] absolute left-0 top-0'>Back</Link>
            <img src={selectedNews.image} className=' w-full h-full '/>
        </div>
        <div className=' bg-white text-[#2d3540]  p-6 md:p-12 grid gap-6'>
            <h2 className=' text-xl md:text-3xl font-bold'>
                {selectedNews.title}
            </h2>
            <span className=' font-semibold italic'>{selectedNews.date}</span>
            <p className='text-justify'>
                {selectedNews.content}
            </p>

        </div>
    </WrapperCard>
   </div>
  )
}

export default News