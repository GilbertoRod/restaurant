import React from 'react'

import hero from '../assets/food/hero-main.jpg'
import welcome from '../assets/welcome.jpg'

import './Home.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Carousel from '../components/Carousel'
import { faBox, faLocationDot, faMobile, faParking, faPhone} from '@fortawesome/free-solid-svg-icons'

import About from './About'
import HomeMenu from './HomeMenu'
import Reviews from './Reviews'
import { Link, useNavigate } from 'react-router-dom'
import HomeBanner from './HomeBanner'


function Home() {
  const navigate=useNavigate()
  const handleMenuClick=()=>navigate("/menu")
  return (

    <div className='home'>
        <div className='home-page-supercontainer'>
        <div className='home-menu-container'>
          <div className='home-hero-filter'/>
          <img src={hero} className='home-image'/>
          <div className='home-menu-text-container'>
            <div className='home-menu-text'>
              <div className='home-menu-text-content'>
                <h1 className='home-hero-title' data-aos="slide-right">MADE FRESH, SERVED FAST</h1>
                <h1 className='home-hero-subtitle' data-aos="slide-left">MEXICAN STREET FOOD</h1>
              
                <button className='home-hero-button' data-aos="fade-up" onClick={handleMenuClick}>VIEW MENU</button>
           
              </div>
            </div>
          </div>

        </div>



        <About/>
        <HomeMenu click={handleMenuClick}/>
        <Reviews/>
        <HomeBanner/>
        
        <div className='feature-section-container'>

        <p className='home-reviews-title' style={{color:"black"}} data-aos="zoom-in-left">OUR FEATURES</p>
          <div className='features-wrapper' data-aos="slide-left">
            <div className='feature'>
              <div className='feature-icon'>
                <FontAwesomeIcon icon={faBox}/>
              </div>
              <p>TAKEOUT</p>
            </div>

            <div className='feature'>
              <div className='feature-icon'>
                <FontAwesomeIcon icon={faMobile}/>
              </div>
              <p>CALL-IN ORDERS</p>
            </div>

            <div className='feature'>
              <div className='feature-icon'>
                <FontAwesomeIcon icon={faParking}/>
              </div>
              <p>ACCESSIBLE PARKING</p>
            </div>
            
          </div>
        </div>




        <div className='map-holder-menu'>

        <iframe title='Your Creation Location On Map' className='google-map-menu' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3367.3168800796657!2d-97.10752752437693!3d32.43745190126194!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x864e5f9ff1ef4cf1%3A0xa46268b97039ed9c!2sStreet%20Tacos%20Y%20Mas%2C%20Venus%20Texas*21!5e0!3m2!1sen!2sus!4v1734835992587!5m2!1sen!2sus" 
        style={{border:'0'}}
        allowFullScreen={true}
        referrerPolicy="no-referrer-when-downgrade"/>
</div>
      </div>


    </div>
  )
}

export default Home