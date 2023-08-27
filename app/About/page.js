import React from 'react'
import Header from '../(components)/Header/Header'
import Image from 'next/image'
export default function page() {
  return (
    
    <div >

   <Header title="About Us"/>
      <div className='container'>
        <div className='row'>
          <div className='col-6'>
            <h1 className='abouthead'>WE ENVISION, CREATE AND MANAGE BUSINESS CRITICAL DIGITAL SOLUTIONS.</h1>
            <p>In the past century, four pioneers started out on a mission to create a dent in the digital landscape. This was long before there were browsers on phones. In fact, Triple brought video streaming to phones long before they were even considered smartphones. Since then Triple has been a digital partner for many A-list brands. We regard VodafoneZiggo, Heineken, citizenM, ANWB and Max Verstappen among our beloved clients. At Triple, we deliver holistic concepts including; strategy, development, design, data & analytics and cloud services.</p>
          </div>
        </div>
        <div className='row'>
          <div className='col'>
            <p>At Triple we believe in long-term partnerships that evolve throughout time, building trust and creating an innovative space between us and our clients. We see the world changing at an accelerating speed. We thrive in that digital storm that some see as chaos. We’ve been compelled to chase that storm and make sense of that chaos by transforming it into business opportunities for ourselves and the clients we work along with.</p>
          </div>
          <div className='col'>
            <Image src="/img/about.png" width={"600"} height={"500"} alt="not found" />
          </div>
        </div>
      </div>
     
      
      
    </div>
  )
}
