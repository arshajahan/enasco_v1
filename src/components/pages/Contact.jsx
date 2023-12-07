import React, { useRef } from 'react'
import { Link } from 'react-router-dom'
import contact from '../../assets/images/contact.webp'
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import WrapperCard from '../UI/WrapperCard'
import { BsFacebook, BsInstagram, BsLinkedin, BsTwitter, BsWhatsapp, BsYoutube } from 'react-icons/bs'
import emailjs from '@emailjs/browser';

function Contact() {

    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs
          .sendForm('service_gpn8986', 'template_nlxa8cp', form.current, 'iwKFdzCR0MIg42jD_')
          .then(
            (result) => {
            //   console.log(result.text);
              toast.success('Email sent successfully!');
              e.target.reset();
            },
            (error) => {
            //   console.log(error.text);
              toast.error('Please submit again.');
            }
          );
      };
    

  return (
    <div className=' pt-8 bg-gray-200'>
    <WrapperCard className=' justify-between grid gap-8 lg:gap-56 lg:flex  '>
        
        <div className='lg:basis-2/4 mx-auto lg:mx-0 text-slate-600 '>
            <Link to='/enasco_v1'>Home<span> &#8594;</span></Link>

            <div className='mt-10 '>
                <h1 className='text-gray-700 text-4xl md:text-5xl font-extrabold'>CONTACT</h1>
                <p className=' mt-8 '>  
                Block 7, Street 400,<br/>
                East Al-Ahmadi - 64018, Ahmadi,<br/>
                Kuwait<br/>
                </p>
                <p className='' ><br/>
                Tel: +965 224 51 615<br/>
                Fax: +965 224 51 614<br/>
                Email: info@enas.co<br/>
                </p><br/><br/>

                <p className=''>
                <b>Need expert advice?</b> Our team of dedicated experts is here to help. <br/>
                Contact us today to tap into their knowledge and expertise.
                </p>
                <br/>
            </div>
            <form 
                ref={form}
                onSubmit={sendEmail}
                className="w-full">
                <div className="mb-4">
                    <input type="text" required placeholder="Your name" name='user_name' className="w-full border rounded py-2 px-3" />
                </div>
                <div className="mb-4">
                    <input type="text" required placeholder="Your email" name='user_email' className="w-full border rounded py-2 px-3" />
                </div>
                <div className="mb-4">
                    <textarea placeholder="Your message" required name='message' className="w-full border rounded py-2 px-3" rows="5" />
                </div>
                <div>
                    <button type='submit' className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">Submit</button>
                </div>
            </form>
            <br/>
           
        </div>

        <div section='rightside' className=' mb-4 lg:mb-0 w-full lg:mx-0 mx-auto -mt-10  lg:sticky top-0 lg:w-[25rem] xl:w-[30rem] lg:h-full 2xl:h-screen'>
            <div className=''>
                    <img src={contact} className=' lg:h-[300px] w-full'/>
                    <div className=' bg-red-700 text-white p-10 text-left'>
                        <p className=' text-4xl lg:text-[35px] leading-none font-extrabold mb-8'>
                        NEED AN EXPERT ADVICE?
                        </p>
                        <p className=' text-xl'>
                            Our team of dedicated experts is here to help.<br/><br/>
                            T. +965 224 51 615
                            <br/>
                            <span className='underline navlink'>
                                <a href="mailto:info@enas.co">Mail us!</a>
                            </span>
                        </p>
                        <div className=' mt-12 w-fit flex gap-4'>
                            <a href='https://www.linkedin.com/company/enasco/'><BsLinkedin size={28} /></a>
                            <a href='https://en-gb.facebook.com/enascowll'><BsFacebook size={28} /></a>
                            <a href='https://twitter.com/ENASCO_WLL'><BsTwitter size={28} /></a>
                            {/* <a href='https://api.whatsapp.com/send?phone=+96522451615&text=Hello%20Enasco'><BsWhatsapp size={28} /></a> */}
                        </div>
                    </div>
            </div>
        </div>
    
    </WrapperCard>

    
    </div>
  )
}

export default Contact