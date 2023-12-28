import React, { useEffect, useRef } from 'react';
import Line from './UI/Line';
import WrapperCard from './UI/WrapperCard';
import { BsLinkedin, BsTwitter, BsWhatsapp } from 'react-icons/bs';
import { BsFacebook } from 'react-icons/bs';
import { BsInstagram } from 'react-icons/bs';
import { BsYoutube } from 'react-icons/bs';
import { services } from '../assets/constants';
import { motion, useInView, useAnimation } from 'framer-motion'
import { Link } from 'react-router-dom';

function Footer() {

    const ref = useRef(null);
    const isInView = useInView(ref, { triggerOnce: false });

    const mainControls = useAnimation();

    useEffect(() => {
      if(isInView) {
          mainControls.start("visible");
      }
      else{
          mainControls.start("hidden")
      }
  }, [isInView, mainControls]);

    return (
      <>
          <motion.div
            ref = {ref}
            variants = {{
                hidden: { opacity : 0, y: 75 },
                visible : { opacity: 1, y: 0 }
            }}
        
            initial = 'hidden'
            animate = {mainControls}
            transition = {{ duration: 0.8, delay: 0.3 }}
            
            className=' bg-gray-700' id='footer'>
          <WrapperCard className=' pt-8 text-textfooter text-white '>
              <div className=' flex flex-wrap justify-between md:flex-nowrap gap-6 '>
                  {/* <div className=' basis-2/4 md:basis-1/4'>
                      <h2 className=' font-extrabold text-lg'>QUICK LINKS</h2>
                      <hr/><hr/><hr/><hr/><br/>
                      <div className=' grid gap-5'>
                          <span>Awards</span>
                          <span>Careers</span>
                          <span>Innovations</span>
                          <span>History</span>
                          <span>Our Fleet</span>
                          <span>HSEQ</span>
                          <span>Projects</span>
                          <span>Downloads & Media Center</span>
                      </div>
                  </div> */}

                  <div className=' basis-auto md:basis-1/4 md:order-3'>
                      <h2 className=' font-extrabold text-lg'>CONTACT</h2>
                      <hr/><hr/><hr/><hr/><br/>
                      <p>Emergency Response:</p>
                      <p>T. +965 224 51 615</p>
                      <br/><hr/><br/>
                      <p>
                        Tel: +965 224 51 615<br/>
                        Fax: +965 224 51 614<br/>
                        Email: info@enas.co<br/>
                      </p>
                      <br/>
                      <a href='mailto:info@enas.co'>Mail us!</a>
                      <br/>
                      <br/><hr/><br/>
                      <h3>Visitor Address:</h3>
                      <p className=' mt-4 '>  
                        Enasco Building, #174,<br/>
                        Block 7, Street 400,<br/>
                        East Al-Ahmadi - 64018, Ahmadi,<br/>
                        Kuwait<br/>
                      </p>
                      <br/>
                      <div className=' w-fit flex gap-4'>
                        <a href='https://www.linkedin.com/company/enasco/'><BsLinkedin size={20} /></a>
                        <a href='https://en-gb.facebook.com/enascowll'><BsFacebook size={20} /></a>
                        <a href='https://twitter.com/ENASCO_WLL'><BsTwitter size={20} /></a>
                        {/* <a href='https://api.whatsapp.com/send?phone=+96522451615&text=Hello%20Enasco'><BsWhatsapp size={20} /></a> */}
                      </div>
                  </div>

                  <div className='basis-full md:basis-3/4'>
    <h2 className='font-extrabold text-lg'>ACTIVITIES</h2>
    <hr /><br />

    <div className="grid md:grid-cols-2 lg:grid-cols-3 grid-cols-1 lg:gap-14 md:gap-10 gap-4">
        <div>
            {services.slice(0, 2).map((service, key) => (
                <div key={key}>
                    <Link to={`/service/${service.path}`} className='uppercase text-[#ff6c40] font-bold'>{service.question}</Link>
                    <div className='mt-3 grid w-fit gap-3'>
                        {service.answer.map((answer, index) => (
                            <Link to={`/service/${service.path+':'+answer.split(" ")[0]}`} key={index}>{answer}</Link>
                        ))}
                    </div>
                    <br />
                </div>
            ))}
        </div>

        <div>
            {services.slice(2, 3).map((service, key) => (
                <div key={key}>
                    <Link to={`/service/${service.path}`} className='uppercase text-[#ff6c40] font-bold'>{service.question}</Link>
                    <div className='mt-3 grid w-fit gap-3'>
                        {service.answer.map((answer, index) => (
                            <Link to={`/service/${service.path+':'+answer.split(" ")[0]}`} key={index}>{answer}</Link>
                        ))}
                    </div>
                    <br />
                </div>
            ))}
        </div>
        <div>
            {services.slice(3, 5).map((service, key) => (
                <div key={key}>
                    <Link to={`/service/${service.path}`} className='uppercase text-[#ff6c40] font-bold'>{service.question}</Link>
                    <div className='mt-3 grid w-fit gap-3'>
                        {service.answer.map((answer, index) => (
                            <Link to={`/service/${service.path+':'+answer.split(" ")[0]}`} key={index}>{answer}</Link>
                        ))}
                    </div>
                    <br />
                </div>
            ))}
        </div>
    </div>
</div>


              </div>
              <br/>
              <hr/><br/>
              <span className=''>Copyright © 2023. All rights reserved to Enasco.</span>
             <br/><br/>
          </WrapperCard>
          </motion.div> 
      </>
    )
  }
  

export default Footer
