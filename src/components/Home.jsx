import React from 'react'

import tacos from '../assets/tacos.jpg'
import welcome from '../assets/welcome.jpg'

import '../styles/Home.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Carousel from './Carousel'
import { faLocationDot} from '@fortawesome/free-solid-svg-icons'
import ImageSlides from './ImageSlides'


function Home() {
  return (

    <>
        {/* <div className='hero-container'>

            <img src={hero} className='hero-image'/>
            <div className='home-text'>
              <h1 className='home-title'>Mouthwatering. Mobile. Mexican.</h1>
              <h3>Bold Tacos with Soul. Because the Best Bites Start with the Cravings You Can't Ignore.</h3>
            </div>
        </div> */}




        <div className='home-page-supercontainer'>
        <div className='home-menu-container'>
          <div className='transition-black-div'/>

          <img src={tacos} className='home-image'/>
          <div className='home-menu-text-container'>
            <div className='home-menu-text'>
              <div className='home-menu-text-content'>
                <h1 style={{color:"white"}}>DELICIOUS VARIETY YOU CAN'T REFUSE!</h1>
                <button>VIEW MENU</button>
              </div>
            </div>
          </div>

        </div>




        <div className='home-content-supercontainer'>




        <div className='welcome-container'>
          <div className='welcome-img'>
            <img className='welcome-img-alt' src={welcome}/>
          </div>
          <div className='welcome-text'>
            <h1 className='welcome-text-title'>WELCOME TO STREET TACOS Y MAS!</h1>
            <img className='welcome-img-mobile' src={welcome}/>

            <p>A family-owned food truck in Venus, TX, serving authentic Mexican flavors made with love and tradition. Our menu features tacos, tortas, burritos, and quesadillas crafted with fresh ingredients. At Street Tacos Y Mas, we’re all about great food and a welcoming community. Come enjoy a taste of Mexico with every bite!
            {/* A Family-owned food truck right here in Venus, TX! We’re passionate about bringing you the authentic flavors of Mexico, crafted with love and tradition, and served straight to your neighborhood.

            Our menu features all your Mexican food favorites, from tacos and tortas to burritos and quesadillas, each made with the freshest ingredients. Whether you’re in the mood for something classic or a new twist on an old favorite, we've got something to satisfy every craving.

            At Street Tacos Y Mas, we believe in more than just great food – we believe in creating a community where everyone feels welcome. Every dish we serve is made with care, bringing you a taste of tradition in every bite.

            So come hungry, bring your family and friends, and enjoy a meal made with the spirit of Mexican hospitality. We’re here to make your day a little brighter and your meal a lot more delicious! */}
            </p>
          </div>
        </div>



        <div>
          <h1 className='location-text-title'>OUR FOOD</h1>
          <div className='serve-img-container'>



                <ImageSlides images={['https://cdn.concreteplayground.com/content/uploads/2017/06/beerbeautifultruthoart2_klow_smallres_9.jpg','https://hips.hearstapps.com/hmg-prod/images/chicken-quesadillas-index-668eeabf1a2c7.jpg?crop=0.8885870590454631xw:1xh;center,top&resize=1200:*']}/>



          </div>
        </div>


        








          <Carousel/>




        </div>

        

        <div className='location-super-container'>
          <div className='location-container'>
            <div className='location-text-info'>
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
            <div className='empty-location-text'/>
          </div>
          <div className='map-holder'>

            <iframe title='Your Creation Location On Map' className='google-map' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3367.3168800796657!2d-97.10752752437693!3d32.43745190126194!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x864e5f9ff1ef4cf1%3A0xa46268b97039ed9c!2sStreet%20Tacos%20Y%20Mas%2C%20Venus%20Texas*21!5e0!3m2!1sen!2sus!4v1734835992587!5m2!1sen!2sus" 
            style={{border:'0'}}
            allowFullScreen={true}
            loading="lazy" 
          referrerPolicy="no-referrer-when-downgrade"/>
          </div>
        </div>
      </div>


    </>
  )
}

export default Home