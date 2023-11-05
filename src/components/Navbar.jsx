import React, { useState } from 'react';
import logo from './../assets/images/logo.png';
import { FiSearch } from 'react-icons/fi';
import WrapperCard from './UI/WrapperCard';
import { services } from '../assets/constants';

function Navbar() {
    const [isNavClicked, setNavClicked] = useState(false);

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
        <div className='sticky z-50 top-0 bg-black bg-opacity-60'>
            <WrapperCard className='h-fit text-[#ff6c40]'>
                <div className='flex justify-between gap-10 h-20'>
                    <div className='relative flex gap-4 lg:basis-1/3'>
                        <div className='self-center z-10'>
                            <img href='#banner' src={logo} className= 'navlink w-32 lg:w-40' alt="Enasco"
                                onClick={() => {
                                    window.scrollTo({
                                        top: 0,
                                        behavior: 'smooth'
                                    });
                                }}   
                            />
                        </div>
                        <ul className='gap-4 h-fit mx-auto my-auto font-extrabold hidden lg:flex'>
                            <a href='#latest' className='navlink'>News</a>
                            <li className='navlink'>Expertise</li>
                        </ul>
                    </div>
                    <div className='basis-1/3 my-auto'>
                        <ul className='items-center justify-evenly hidden lg:flex'>
                            <li className='navlink'>About Us</li>
                            <li className='navlink'>Sustainability</li>
                            <li className='navlink'>Contact</li>
                            <a href='#footer' className='navlink'><FiSearch/></a>
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
                        <li className='navlink'>Search</li>
                        <li className='navlink'>About Us</li>
                        <li className='navlink'>Sustainability</li>
                        <li className='navlink'>Contact</li>
                    </ul>
                </div>
                    </>
                }
            </div>
        </div>
    );
}

export default Navbar;
