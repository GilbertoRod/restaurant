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

            <p>At Street Tacos Y Mas, we’re a family-owned food truck proudly serving the Venus, TX and Johnson County community with authentic Mexican flavors. Our recipes, reflect a deep love for traditional Mexican cuisine. Every dish is crafted with fresh ingredients, rich flavors, and a touch of home.</p>

            <h2>The Meaning Behind Street Tacos Y Mas</h2>
            
            <div className='page-divider'/>

            <p>Our name, "Street Tacos Y Mas," reflects our commitment to authentic Mexican street food while "Y Mas"—meaning "and more"—showcases the variety and creativity on our menu. Each meal is a celebration of our culture, made to share with our community.</p>

            <h2>Why Choose Street Tacos Y Mas?</h2>

            <div className='page-divider'/>

            <p><b>Authentic Flavors:</b> Each dish is made with fresh, high-quality ingredients and traditional recipes for an unforgettable taste.</p>

            <p><b>Welcoming Atmosphere:</b> We’re more than a food truck; we’re a place where the community comes together to share delicious food and good times.
            </p>

            <p>
              <b>Delicious Variety: </b>
              From tacos and tortas to burritos and quesadillas, we offer something for every craving.
            </p>

            <p><b>Passion for the Community:</b> We love connecting with our customers and take pride in being part of your special moments. As a family-owned business, we treat every guest like family and are honored to share our passion for authentic Mexican flavors with you.</p>

            <p>Thank you for supporting Street Tacos Y Mas. We’re excited to share the bold, authentic flavors of Mexico with you—one delicious bite at a time!</p>


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