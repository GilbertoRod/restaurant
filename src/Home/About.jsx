import React from 'react'
import './About.css'
import welcome from '../assets/welcome.jpg'
import { Link } from 'react-router-dom'

function About() {
  return (
    <div style={{maxWidth:"1700px", padding:"20px 10px"}}>
      <div className='home-about-inner-container'>
        <img data-aos="fade-right" src={welcome} className='home-about-image'/>
        <div data-aos="fade-left" className='home-about-text'>
          <p className='home-about-title'>WELCOME TO STREET TACOS Y MAS!</p>
          <p className='home-about-p'>A family-owned food truck in Venus, TX, serving authentic Mexican flavors made with love and tradition. Our menu features tacos, tortas, burritos, and quesadillas crafted with fresh ingredients. At Street Tacos Y Mas, we’re all about great food and a welcoming community. Come enjoy a taste of Mexico with every bite!</p>
          <img  src={welcome} className='home-about-image-mobile'/>
          <Link to={'/about'}>
            <button className='home-about-more-btn'>MORE INFO</button>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default About