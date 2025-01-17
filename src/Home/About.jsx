import React from 'react'
import './About.css'
import welcome from '../assets/welcome.jpg'

function About() {
  return (
    <div>
      <div>
        <img className='home-about-image'/>
        <div className='home-about-text'>
          <p className='home-about-title'></p>
          <p className='home-about-p'></p>
          <img className='home-about-image-mobile'/>
          <button className='home-about-more-btn'></button>
        </div>
      </div>
    </div>
  )
}

export default About