import React from 'react'
import '../styles/Navbar.css'
import logo from '../assets/tacoymas.png'

function Navbar() {
  return (
    <>
    <div className='nav-container'>
      <div className='nav-content-container'>
        <img src={logo} className='company-logo' alt='Company Logo'/>

        <div>
          Menu
        </div> 

        <div>
          About Us
        </div>  

        <div>
          FAQ
        </div>
      </div>
    </div>
    </>
  )
}

export default Navbar