import React from 'react'
import './AboutUs.css'
import group from '../assets/about.jpg'
import FAQaccordion from './FAQaccordion'
function AboutUs() {
  return (
    <div className='about-us-container'>
      <div className='about-us-inner'>
        <div className='about-us-content'>
          <div className='about-us-image-container'>
            <img className='about-us-image' data-aos="slide-right" src={group}/>
          </div>
          <div className='about-us-text'  data-aos="slide-left">
            <p className='about-us-title'>OUR STORY</p>

            <p>We are a family-owned food truck serving the Venus, TX community with authentic Mexican flavors made from cherished recipes passed down through generations. Our journey began with a shared love for food and a desire to bring the vibrant tastes of Mexico to our neighbors. At Street Tacos Y Mas, every dish is crafted with love, tradition, and the freshest ingredients.</p>

            <h2>The Meaning Behind Street Tacos Y Mas</h2>
            
            <div className='page-divider'/>

            <p>We chose the name "Street Tacos Y Mas" to highlight our focus on authentic street-style Mexican cuisine, while "Y Mas" represents the variety and creativity we bring to our menu. It’s more than just food—it’s about sharing a piece of our culture with every meal.</p>

            <h2>Why Choose Street Tacos Y Mas?</h2>

            <div className='page-divider'/>

            <p><b>Authentic Flavors:</b> Each dish is made with fresh, high-quality ingredients and traditional recipes for an unforgettable taste.</p>

            <p><b>Welcoming Atmosphere:</b> We’re more than a food truck; we’re a place where the community comes together to share delicious food and good times.
            Variety for Everyone: From tacos and tortas to burritos and quesadillas, we offer something for every craving.</p>

            <p><b>Passion for the Community:</b> We love connecting with our customers and take pride in being a part of your special moments.</p>

            <p>Thank you for choosing Street Tacos Y Mas. We can’t wait to serve you a taste of Mexico with every bite!</p>


          </div>


        </div>


        <div className='faq-container' data-aos="flip-up">
          <h1 className='about-us-title' >FAQs</h1>
          <div className='faq-accordions'>
            <FAQaccordion title="Are you open every day?" content="Yes We're open everyday! See our Hours down below for more details!"/>
            <FAQaccordion title="What payment methods do you accept?" content="We accept cash, credit cards, and most major digital payment methods."/>
            <FAQaccordion title="Can I call ahead to place an order?" content="Absolutely! Call us to place your order ahead of time, and we’ll have it ready for pickup."/>
            <FAQaccordion title=" Do you have outdoor seating available?" content="Yes! We have plenty of seating under a covered roof, providing a comfortable space to enjoy your meal no matter the weather."/>
          </div>
        </div>

      </div>

    </div>
  )
}

export default AboutUs