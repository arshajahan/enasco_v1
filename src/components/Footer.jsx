import React from 'react';
import Line from './UI/Line';
import WrapperCard from './UI/WrapperCard';

function Footer() {
    return (
      <>
          <Line/>
          <div className=' bg-blue-900'>
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
                          <span>In</span>
                          <span>FB</span>
                          <span>IG</span>
                          <span>YT</span>
                      </div>
                  </div>

                  <div className=' basis-full md:basis-2/4'>
                      <h2 className=' font-extrabold text-lg'>ACTIVITIES</h2>
                      <hr/><hr/><hr/><hr/><br/>
                      <h2 className=' text-red-600 font-bold'>TOWAGE</h2>
                      <div className=' mt-3 grid w-fit gap-3'>
                          <span>Harbour Towage</span>
                          <span>Offshore & Terminal Towage</span>
                          <span>Chartering & Salvage</span>
                          <span>Inland Shipping</span>
                      </div>
                      <br/>

                      <h2 className=' text-red-600 font-bold'>SUBSEA</h2>
                      <div className=' mt-3 grid w-fit gap-3'>
                          <span>SPM Operations & Maintenance</span>
                          <span>Asset Integrity Management</span>
                      </div>
                      <br/>

                      <h2 className=' text-red-600 font-bold'>INTELLIGENCE</h2>
                      <div className=' mt-3 grid w-fit gap-3'>
                          <span>OptiPort</span>
                          <span>Analytics & Reporting</span>
                          <span>Drone Line Transfer</span>
                      </div>
                      <br/>

                      <h2 className=' text-red-600 font-bold'>TRAINING-CONSULTANCE</h2>
                      <div className=' mt-3 grid w-fit gap-3'>
                          <span>Training</span>
                          <span>Consultancy</span>
                          <span>Towmaster Services</span>
                      </div>
                      <br/>

                      <h2 className=' text-red-600 font-bold'>MARITIME-EXCELLENCE</h2>
                      <div className=' mt-3 grid w-fit gap-3'>
                          <span>Ship Management</span>
                          <span>Innovations</span>
                          <span>Projects & New Building</span>
                          <span>Fast Crew Transportation</span>
                      </div>
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