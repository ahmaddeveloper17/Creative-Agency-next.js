import React from 'react'
import Link from "next/link"
export default function Navebar() {
  return (
    <div className='nave'>
    <div className='container'>
    <div className='row'>
      
    <div className="col-1"><Link href={"./"}>Home</Link></div>
      <div className="col-1"><Link href={"./About"}>About</Link></div>
      <div className="col-1"> <Link href={"./pages"}>Pages</Link></div>
     <div className="col-1"> <Link href={"./blog"}>Blog</Link></div>
     <div className="col-1"><Link href={"./content"}>Content</Link></div>
     <div className="col-1"><Link href={"./portfolio"}>Portfoli</Link></div>
     <div className="col-1"><Link href={"./services"}>Services</Link></div>
    </div>
    
   
    </div>
    </div>
  )
}
