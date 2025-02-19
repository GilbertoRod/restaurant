import React from 'react'
import tacosMenu from '../assets/tacosmenu.jpg'
import qmenu from '../assets/food/quesadilla.jpg'
import loadednachos from '../assets/food/loaded-nachos-alt.jpg'
import kidsnachos from '../assets/food/kids-nachos.jpg'
import elote from '../assets/elote.jpg'
import loadedfries from '../assets/food/papas-con-carne.jpg'
import heroImg from '../assets/food/hero-menu-alt-2.jpg'
import './Menu.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faClock, faPepperHot, faStar, faUtensils } from '@fortawesome/free-solid-svg-icons'

function MenuCard({pic,item, price, description}){
  return(
    <div className='menu-page-card'>
    <img className='menu-page-card-img' src={pic?pic:"https://www.svgrepo.com/show/508699/landscape-placeholder.svg"}/>
    <div className='menu-page-card-content'>
      <h1 className='menu-page-card-title'>{item}</h1>
      <p className='menu-page-card-price'>${price}/ea.</p>
      {/* <p className='menu-page-card-subinfo'></p> */}
      <p className='menu-page-card-info'>{description}</p>
    </div>
  </div>
  )
}
function Menu() {

  return (
    <div className="menu-page">


      <div className='menu-hero-2'>
        <div className='menu-hero-content'>
          <div className='menu-hero-left'>
            <p className='menu-hero-comment-text' data-aos="fade-down-right">|BEST FOOD TRUCK IN ENNIS</p>
            <h1 className='menu-hero-title' data-aos="fade-down-right">
                <span>Mexican</span> Street Food Menu | Tacos & More in <span>Venus</span>, <span>TX</span>
            </h1>

              <div id='menu-hero-bar' data-aos="fade-right"/>
            <p style={{fontFamily:"leckerli",fontWeight:"800"}} className='menu-hero-description' data-aos="fade-up-left">Order From Our Delicious Selection of Tacos, Quesadillas, Tortas, and More</p>
   
            <button data-aos="slide-right" onClick={() => window.location.href = 'tel:682-234-4610'} className='menu-hero-button'>
              <div className='hero-menu-button-icon'><FontAwesomeIcon icon={faUtensils}/></div>
              <div>ORDER NOW</div>
            </button>
 



          </div>

          <div className='menu-hero-right'>
            <img src={heroImg}/>
          </div>
        </div>
      </div>


      {/*Hero transition*/}
      <div className='menu-hero-transition'>
        <div className='menu-hero-transition-wrapper'>
          <div className='menu-hero-transition-content'>
            <div className="menu-transition-icon-block">
              <FontAwesomeIcon icon={faPepperHot} className="menu-transition-icon"/>
            </div>
            <div>
              <h2>Fresh Ingredients</h2>
              <p>We use fresh ingredients to create bold, authentic Mexican street food flavors you’ll love.</p>
            </div>

          </div>

          <div className='menu-hero-transition-content'>
            <div className="menu-transition-icon-block">
              <FontAwesomeIcon icon={faClock} className="menu-transition-icon"/>
            </div>
            <div>
              <h2>Quick Service</h2>
              <p>Fast and friendly service with the authentic taste of Mexican street food in every bite.</p>
            </div>

          </div>

          <div className='menu-hero-transition-content'>
            <div className="menu-transition-icon-block">
              <FontAwesomeIcon icon={faStar} className="menu-transition-icon"/>
            </div>
            <div>
              <h2>Authentic Taste</h2>
              <p>Traditional Mexican recipes crafted to perfection, delivering authentic flavor every single time.</p>
            </div>

          </div>
        </div>
      </div>

      



      


      {/* Menu Categories */}
      <div className="menu-body">
        <div className='menu-title'>
          <div className='our-menu'>🌮 OUR MENU 🌮</div>
        </div>
        <p className='menu-meat-choices'><span style={{color:"var(--comp)"}}>*</span> Our Choices of Meat Include: <b>Pollo, Lengua, Asada, Pastor, Tripas, Barbacoa, and Campechanos (taco mix)</b></p>
        <div className='menu-items'>


          <MenuCard pic={tacosMenu} item={"TACOS"} price={"2.50"} description={"Served with your choice(s) of meat and topped with Fresh Cilantro and diced Onions. Comes with a side of Grilled Onions, Lime, a Roasted Jalapeno, and Salsa."}/>

          <MenuCard pic={qmenu} item={"QUESADILLAS"} price={"9.00"} description={"Served in a tortilla  with Cheese, Lettuce, Jalapeno Peppers, Grilled Onions, and your choice of meat."}/>

          <MenuCard item={"BURRITOS"} price={"9.00"} description={"Wrapped in a tortilla  with Beans, Cheese, Lettuce, Tomato, Grilled Onions, Jalapeno Peppers, and your choice of meat."}/>

          <MenuCard item={"TORTA CUBANA"} price={"10.00"} description={"Torta Filled with Asada, Pastor, Sausage, Ham, Cheese, Lettuce, Tomato, Avocado, and Jalapeno Peppers"}/>

          <MenuCard pic={loadednachos} item={"LOADED NACHOS"} price={"12.00"} description={"Nachos Served with your choice of Meat, Cheese, Beans, Sour Cream, and Pico de Gallo."}/>


          <MenuCard pic={elote} item={"ELOTE"} price={"4.00"} description={"Mexican Street Corn in a cup topped with Salsa, Sour Cream, Cheese, Mayonnaise, and Butter."}/>


          <MenuCard pic={loadedfries} item={"CARNE ASADA FRIES"} price={"12.50"} description={"Crinkle cut frnech fries topped with carne asada, cheese, sour cream, and jalapenos."}/>



        </div>
      </div>








      {/* Call-to-Action */}
      <div className="menu-cta">
        <div className='menu-cta-content'>
          <h2>Ready to Order?</h2>
          <button className="nav-call-btn" style={{marginLeft:'0px'}} onClick={() => window.location.href = 'tel:682-234-4610'}>Call to Order</button>
          <p>(682)234-4610</p>
        </div>
      </div>

















      <div className="menu-body">
        <div className='menu-title'>
          🍽️ KIDS MENU
        </div>



        <div className='menu-items'>
          <MenuCard  item={"PAPAS CON QUESO"} price={"6.00"} description={"Potato Fries served with melted cheese on top."}/>
          <MenuCard  item={"QUESADILLA CON PAPAS"} price={"6.00"} description={"Served in a tortilla with Cheese, Carne Asada, and a side of French Fries."}/>
          <MenuCard  pic={kidsnachos} item={"NACHOS"} price={"4.00"} description={"Served with Nacho Cheese and an option of jalapeno peppers."}/>
          <MenuCard  item={"CHURROS"} price={"2.50"} description={"Filled with either Vanilla or Cajeta."}/>
        </div>

      </div>
      <div className='map-holder-menu'>

            <iframe title='Your Creation Location On Map' className='google-map-menu' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3367.3168800796657!2d-97.10752752437693!3d32.43745190126194!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x864e5f9ff1ef4cf1%3A0xa46268b97039ed9c!2sStreet%20Tacos%20Y%20Mas%2C%20Venus%20Texas*21!5e0!3m2!1sen!2sus!4v1734835992587!5m2!1sen!2sus" 
            style={{border:'0'}}
            allowFullScreen={true}
            loading="lazy" 
          referrerPolicy="no-referrer-when-downgrade"/>
      </div>

    </div>






























 








  );
};

export default Menu