import React from 'react'
import './About.css'
import welcome from '../assets/welcome.jpg'

function About() {
  return (
    <div>
      <div>
        <img className='home-about-image'/>
        <div className='home-about-text'>
          <p className='home-about-title'>WELCOME TO STREET TACOS Y MAS!</p>
          <p className='home-about-p'>A family-owned food truck in Venus, TX, serving authentic Mexican flavors made with love and tradition. Our menu features tacos, tortas, burritos, and quesadillas crafted with fresh ingredients. At Street Tacos Y Mas, we’re all about great food and a welcoming community. Come enjoy a taste of Mexico with every bite!</p>
          <img className='home-about-image-mobile'/>
          <button className='home-about-more-btn'>MORE INFO</button>
        </div>
      </div>
    </div>
  )
}

export default About