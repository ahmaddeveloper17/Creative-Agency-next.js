import React from 'react'
import Navebar from '../navebar/Navebar'
export default function Header(props) {
  return (
    <div>
      <section className='background' >
        
        
      
      <div className='container-fluid'>
        
        <div className='row'>
          <div className='col-1'>
            
            <h3>LOGO</h3>
            
          </div>
          <div className='col'>
         
          </div>
        </div>
        <div className='row'>
          <div className='col'>
          
          

          </div>
        </div>
        <div className='row'>
          <div className='col'>
          <Navebar/>
            </div></div>
            <div className='row'>
          <div className='col'>
            <h1>{props.title}</h1>
            </div></div>
            
      </div>
      </section>
      

    </div>
  )
}
