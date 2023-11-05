import React from 'react';
import Line from './UI/Line';
import WrapperCard from './UI/WrapperCard';
import { BsLinkedin } from 'react-icons/bs';
import { BsFacebook } from 'react-icons/bs';
import { BsInstagram } from 'react-icons/bs';
import { BsYoutube } from 'react-icons/bs';
import { services } from '../assets/constants';

function Footer() {
    return (
      <>
          <Line/>
          <div className=' bg-[#005a96]'>
          <WrapperCard className=' pt-8 text-textfooter text-white '>
              <div className=' flex flex-wrap md:flex-nowrap gap-6 '>
                  <div className=' basis-2/4 md:basis-1/4'>
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
                  </div>

                  <div className=' basis-auto md:basis-1/4 md:order-3'>
                      <h2 className=' font-extrabold text-lg'>CONTACT</h2>
                      <hr/><hr/><hr/><hr/><br/>
                      <p>Emergency Response:</p>
                      <p>T. +31 10 217 0 246</p>
                      <br/><hr/><br/>
                      <p>T. +31 10 217 0 217</p>
                      <p>F. +31 10 217 0 217</p>
                      <br/>
                      <a href=''>Mail us!</a>
                      <br/>
                      <br/><hr/><br/>
                      <h3>Visitor Address:</h3>
                      <span>Wilhelminakade 318<br/>3072 AR Rotterdam<br/>State of Kuwait</span>
                      <br/><br/>
                      <h3>Postal Address:</h3>
                      <span>PO Box 22002<br/>3003 DA Rotterdam<br/>State of Kuwait</span>
                      <br/><br/>
                      <div className=' w-fit flex gap-4'>
                        <a href='#'><BsLinkedin size={20} /></a>
                        <a href='#'><BsFacebook size={20} /></a>
                        <a href='#'><BsInstagram size={20} /></a>
                        <a href='#'><BsYoutube size={20} /></a>
                      </div>
                  </div>

                  <div className=' basis-full md:basis-2/4'>
                      <h2 className=' font-extrabold text-lg'>ACTIVITIES</h2>
                      <hr/><hr/><hr/><hr/><br/>
                      {services.map((service) => (
                        <div key={service.id}>
                        <h2 className='uppercase text-[#ff6c40] font-bold'>{service.question}</h2>
                        <div className='mt-3 grid w-fit gap-3'>
                            {service.answer.map((answer, index) => (
                            <span key={index}>{answer}</span>
                    ))}
                </div>
          <br />
        </div>
      ))}
                  </div>

              </div>
              <br/>
              <hr/><br/>
              <span className=''>Copyright © 2023 Enas.co Pvt. Ltd. All rights reserved.</span>
             
          </WrapperCard>
          </div> 
      </>
    )
  }
  

export default Footer