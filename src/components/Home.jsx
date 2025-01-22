import React from 'react'

import tacos from '../assets/tacos.jpg'
import welcome from '../assets/welcome.jpg'

import '../styles/Home.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Carousel from './Carousel'
import { faLocationDot} from '@fortawesome/free-solid-svg-icons'
import ImageSlides from './ImageSlides'
import About from '../Home/About'
import HomeMenu from '../Home/HomeMenu'
import Reviews from '../Home/Reviews'


function Home() {
  return (

    <div className='home'>
        <div className='home-page-supercontainer'>
        <div className='home-menu-container'>
          <img src={tacos} className='home-image'/>
          <div className='home-menu-text-container'>
            <div className='home-menu-text'>
              <div className='home-menu-text-content'>
                <h1 className='home-hero-title'>MADE FRESH, SERVED FAST</h1>
                <h1 className='home-hero-subtitle'>MEXICAN STREET FOOD</h1>
                <button className='home-hero-button'>VIEW MENU</button>
              </div>
            </div>
          </div>

        </div>



        <About/>
        <HomeMenu/>
        <Reviews/>

        
        <div className='location-wrapper'>
        <div className='location-overlay'/>
        <div className='location-super-container'>
          <div className='location-container'>
            <div className='location-text-info' data-aos="slide-right">
              <h1 className='location-text-title'>LOCATION &amp; BUSINESS HOURS</h1>
              <p>
                <a href='https://maps.app.goo.gl/rr9R4xcZq6C3WJ1W6' target='_blank'>
                <FontAwesomeIcon icon={faLocationDot} color='var(--main)'/> 110 FM157, Venus, TX 76084
                </a>
              </p>
              <p>

                Monday: 10 AM - 9 PM<br/>
                Tuesday: 10 AM - 8 PM<br/>
                Wednesday: 10 AM - 8 PM<br/>
                Thursday: 10 AM - 9 PM<br/>
                Friday: 10 AM - 10 PM<br/>
                Saturday: 10 AM - 10 PM<br/>
                Sunday: 12 PM - 9 PM<br/>
              </p>
            </div>

          </div>
          <div className='map-holder' data-aos="slide-left">

            <iframe title='Your Creation Location On Map' className='google-map' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3367.3168800796657!2d-97.10752752437693!3d32.43745190126194!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x864e5f9ff1ef4cf1%3A0xa46268b97039ed9c!2sStreet%20Tacos%20Y%20Mas%2C%20Venus%20Texas*21!5e0!3m2!1sen!2sus!4v1734835992587!5m2!1sen!2sus" 
            style={{border:'0'}}
            allowFullScreen={true}
            loading="lazy" 
          referrerPolicy="no-referrer-when-downgrade"/>
          </div>
          </div>
        </div>
      </div>


    </div>
  )
}

export default Home