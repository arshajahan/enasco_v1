import React, { useState } from 'react';
import logo from './../assets/images/logo.png';
import { FiSearch } from 'react-icons/fi';
import WrapperCard from './UI/WrapperCard';
import { services } from '../assets/constants';
import { HashLink } from 'react-router-hash-link';
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';

function Navbar() {
    const [isNavClicked, setNavClicked] = useState(false);

    const location = useLocation();
    const isAboutPage = location.pathname === '/enasco_v1/about';

    const navToggle = () => {
        setNavClicked(!isNavClicked);
        if (!isNavClicked) {
            document.body.style.overflow = 'hidden'; // Disable scrolling
        } else {
            document.body.style.overflow = 'auto'; // Enable scrolling
        }
    };

    const [collapsed, setCollapsed] = useState(null);

    const toggle = (i) => {
        if (collapsed === i) {
            return setCollapsed(null);
        }
        setCollapsed(i);
    };

    return (
        <div className={`sticky top-0 z-50 bg-white shadow-lg`}>
            <WrapperCard className='  h-fit text-[#ff6c40]'>
                <div className='flex justify-between gap-10 h-20'>
                    <div className='relative flex gap-4 lg:basis-1/3'>
                        <Link className='self-center z-10' to='/enasco_v1'>
                            <img src={logo} className= 'navlink w-32 lg:w-40' alt="Enasco"
                                onClick={() => {
                                    window.scrollTo({
                                        top: 0,
                                        behavior: 'smooth'
                                    });
                                }}   
                            />
                        </Link>
                        <ul className='gap-4 h-fit mx-auto my-auto font-extrabold hidden lg:flex'>
                            <HashLink to='enasco_v1/#latest' className='navlink'>News</HashLink>
                            <li className='navlink'>Expertise</li>
                        </ul>
                    </div>
                    <div className='basis-1/3 my-auto'>
                        <ul className='items-center justify-evenly hidden lg:flex'>
                            <Link to='/enasco_v1/about' className='navlink' 
                                onClick={() => {
                                    window.scrollTo({
                                        top: 0,
                                        behavior: 'smooth'
                                    });
                                }}   
                            >About Us</Link>
                            <li className='navlink'>Sustainability</li>
                            <Link
                            to='/enasco_v1/contact' 
                            onClick={() => {
                                window.scrollTo({
                                    top: 0,
                                    behavior: 'smooth'
                                });
                            }}  
                            className='navlink'>Contact</Link>
                            <a href='#footer' className='navlink'><FiSearch size={20} /></a>
                        </ul>
                        <div className='navlink text-lg text-right lg:hidden' onClick={() => navToggle()}>
                            NAVIGATION
                        </div>
                    </div>
                </div>
            </WrapperCard>
            
            <div className=' overflow-scroll lg:hidden absolute top-0 right-0 z-10 bg-black h-screen' style={{ width: isNavClicked ? '100%' : '0', transition: 'width 0.3s' }}>
                {isNavClicked &&
                    <>
                        <div className='mx-4 flex justify-between mt-7'>
                    <div className=''>
                        <img src={logo} onClick={() => navToggle()} className='navlink w-32' alt="Logo" />
                    </div>
                    <span className='self-end navlink text-white' onClick={() => navToggle()}>CLOSE</span>
                </div>
                <div className=' mt-7 faqs lg:hidden'>
                    {services.map((item, i) => (
                        <div className='faq' key={item.id}>
                            <button className={`collapsible hover:underline ${collapsed === i ? "faqactive" : ""}`} onClick={() => toggle(i)}>{item.question}</button>
                            <hr/>
                            <div className={`content ${collapsed === i ? "show_content" : "hide_content"}`}>
                                <ul className='grid gap-4 text-lg text-blue-700'>
                                    {item.answer.map((answer, j) => (
                                        <li key={j}>{answer}</li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    ))}
                    <ul className='pl-2 ml-2 absolute bottom-0 mb-[4.5rem] grid gap-4 uppercase  navlink text-white lg:hidden'>
                        <HashLink to='/enasco_v1/#footer' 
                                onClick={() => {
                                    navToggle();
                                    window.scrollTo({
                                        top: 0,
                                        behavior: 'smooth'
                                    });
                                }}  
                                className='navlink'>Search</HashLink>
                        <Link to='/enasco_v1/about' 
                                onClick={() => {
                                    navToggle();
                                    window.scrollTo({
                                        top: 0,
                                        behavior: 'smooth'
                                    });
                                }}    
                            className='navlink'>About Us</Link>
                        <li className='navlink'>Sustainability</li>
                        <Link
                            to='/enasco_v1/contact' 
                            onClick={() => {
                                navToggle();
                                window.scrollTo({
                                    top: 0,
                                    behavior: 'smooth'
                                });
                            }}  
                            className='navlink'>Contact</Link>
                    </ul>
                </div>
                    </>
                }
            </div>
        </div>
    );
}

export default Navbar;
