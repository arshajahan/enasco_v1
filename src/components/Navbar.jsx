import React, { useState } from 'react';
import { FiSearch } from 'react-icons/fi';
import { GiHamburgerMenu } from 'react-icons/gi';
import { AiOutlineClose } from 'react-icons/ai';
import { HashLink } from 'react-router-hash-link';
import { Link } from 'react-router-dom';
import logo from './../assets/images/logo.png';
import WrapperCard from './UI/WrapperCard';
import { services } from '../assets/constants';

function Navbar() {
  const [isExpertiseClicked, setExpertiseClicked] = useState(false);
  const [isNavClicked, setNavClicked] = useState(false);
  const [selectedQuestion, setSelectedQuestion] = useState(0);
  const [collapsed, setCollapsed] = useState(null);

  const navToggle = () => {
    setNavClicked(!isNavClicked);
    document.body.style.overflow = isNavClicked ? 'auto' : 'hidden'; // Toggle scrolling
  };

  const toggle = (i) => setCollapsed((prev) => (prev === i ? null : i));

  const closeExpertise = () => setExpertiseClicked(!isExpertiseClicked);

  const menuClicked = () => {
    if (isNavClicked) navToggle();
    if (isExpertiseClicked) closeExpertise();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className={`sticky top-0 z-50 bg-white shadow-lg overflow-x-clip`}>
      <div className={`transition-transform transform duration-500 ${isExpertiseClicked ? 'translate-y-0' : 'translate-y-full'} absolute top-20 h-screen w-full bg-gray-700`}>
        <WrapperCard className='relative h-screen text-white bg-[#ff6c40]'>
          <div className='flex gap-0'>
            <span onClick={() => closeExpertise()} className='z-10 cursor-pointer text-2xl font-bold absolute text-red-600 right-12 top-24'>X</span>
            <div className='bg-gray-700 py-32 lg:basis-1/3 z-30 grid items-center '>
              <span className='pl-6 mb-6'>LEARN MORE ABOUT</span>
              {services.map((service, key) => (
                <div
                  key={key}
                  onClick={() => setSelectedQuestion(key)}
                  className={` ${selectedQuestion === key ? ' bg-orange-500 text-white ' : 'cursor-pointer'} flex uppercase font-extrabold h-auto   bg-gray-700 py-3`}>
                  <span className='md:text-base lg:text-[1.3rem] md:basis-52 lg:basis-56 pl-4 '>{service.question} <span className=' '>&#129170;</span></span>
                </div>
              ))}
            </div>

            <div className={`${selectedQuestion !== null ? 'lg:basis-1/3' : ''} opacity-90 z-10  flex-shrink h-screen md:grid items-center text-xl 2xl:text-2xl bg-gray-700 text-white`}>
              {selectedQuestion !== null && (
                <div className='w-full'>
                  <ul className='grid gap-6 '>
                    {services[selectedQuestion].answer.map((answer, index) => (
                      <Link
                        to={`/service/${services[selectedQuestion].path+':'+answer.split(" ")[0]}`}
                        onClick={() => menuClicked()}
                        className={`${isExpertiseClicked ? 'px-12' : ''} lg:hover:text-[#ff6c40]`} key={index}>
                        {answer}
                      </Link>
                    ))}
                  <hr/>
                  <Link to={`/service/${services[selectedQuestion].path}`} onClick={() => closeExpertise ()} className=' text-left text-sm ml-14'>About {services[selectedQuestion].question}</Link>
                  </ul>
                 
                </div>
              )}
            </div>
            {selectedQuestion !== null &&
            <div className=' absolute -right-[17rem] bg-[#ff6c40]  bottom-0 h-full'>
                <img className='h-full ' src={services[selectedQuestion].image} alt="Banner" />
            </div>
            }
          </div>
        </WrapperCard>
      </div>

      <WrapperCard className='h-fit text-[#ff6c40]'>
        <div className='flex justify-between gap-10 h-12 md:h-20'>
          <div className='relative flex gap-4 lg:basis-1/3'>
            <Link className='self-center z-10' to='/'>
              <img src={logo} className='navlink w-28 lg:w-40' alt="Enasco" onClick={() => menuClicked()} />
            </Link>
            <ul className='gap-4 h-full mx-auto font-extrabold hidden lg:flex'>
              <HashLink to='/#latest' onClick={() => menuClicked()} className='h-full navlink flex items-center'>News</HashLink>
              <li
                className={`h-full ${isExpertiseClicked ? 'px-2 bg-[#ff6c40] text-white' : ''} navlink flex items-center`}
                onClick={() => closeExpertise()}>
                Expertise
              </li>
            </ul>
          </div>

          <div className='text-[#2d3540] basis-1/3 my-auto'>
            <ul className='items-center justify-evenly hidden lg:flex'>
              <Link to='/about' className='navlink hover:text-[#ff6c40]' onClick={() => menuClicked()}>About Us</Link>
              <Link to='/sustainability' className='hover:text-[#ff6c40] navlink' onClick={() => menuClicked()}>
                Sustainability
              </Link>
              <Link to='/contact' onClick={() => menuClicked()} className='navlink hover:text-[#ff6c40]'>
                Contact
              </Link>
              <a href='#footer' className='hover:text-[#ff6c40] navlink'>
                <FiSearch size={20} />
              </a>
            </ul>
            <div className='navlink lg:hidden w-fit float-right' onClick={() => navToggle()}>
              <GiHamburgerMenu size={24} color='#ff6c40' />
            </div>
          </div>
        </div>
      </WrapperCard>

      <div className=' overflow-scroll z-10 lg:hidden absolute top-0 right-0  bg-white h-screen' style={{ width: isNavClicked ? '100%' : '0'}}>
        {isNavClicked && (
          <>
            <div className=' mx-4 flex justify-between mt-4'>
              <div className=''>
                <img src={logo} onClick={() => navToggle()} className='navlink w-28' alt="Logo" />
              </div>
              <span className='navlink text-[#2d3540]' onClick={() => navToggle()}>
                <AiOutlineClose size={26} color='#ff6c40' />
              </span>
            </div>

            <div className=' mt-7 faqs lg:hidden z-10'>
              {services.map((item, i) => (
                <div className='faq' key={item.id}>
                  <button className={`hover:bg-[#ff6c40] text-[#2d3540] collapsible ${collapsed === i ? 'faqactive' : ''}`} onClick={() => toggle(i)}>
                    {item.question}
                  </button>
                  <hr />
                  <div className={`content ${collapsed === i ? 'show_content' : 'hide_content'} shadow-md`}>
                    <ul className=' grid gap-4 py-4 text-lg text-[#2d3540]'>
                      {item.answer.map((answer, j) => (
                        <Link
                          to={`/service/${item.path+':'+answer.split(" ")[0]}`} 
                          key={j}
                          onClick={ () => menuClicked()}
                        >
                          {answer}
                        </Link>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
              <ul className=' pl-2 ml-2 absolute bottom-0 mb-[4.5rem] grid gap-4 uppercase navlink text-[#2d3540] lg:hidden'>
                <HashLink  to='/#footer' onClick={() => menuClicked()} className='navlink'>
                  Search
                </HashLink>
                <Link  to='/about' onClick={() => menuClicked()} className='navlink'>
                  About Us
                </Link>
                <Link  to='/sustainability' className='navlink' onClick={() => menuClicked()}>
                  Sustainability
                </Link>
                <Link  to='/contact' onClick={() => menuClicked()} className='navlink'>
                  Contact
                </Link>
              </ul>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default Navbar;
