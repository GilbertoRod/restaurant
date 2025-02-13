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
function Menu() {

  return (
    <div className="menu-page">
      {/* Hero Section */}
      {/* <div className="menu-hero">
        <h1 data-aos="fade">Our Menu: Fresh & Flavorful</h1>
        <p data-aos="fade">Explore the authentic taste of Mexico!</p>
      </div> */}

      <div className='menu-hero-2'>
        <div className='menu-hero-content'>
          <div className='menu-hero-left'>
            <p className='menu-hero-comment-text' data-aos="fade-down-right">|BEST FOOD TRUCK IN ENNIS</p>
            <h1 className='menu-hero-title' data-aos="fade-down-right">
                <span>Mexican</span> Street Food Menu | Tacos & More in <span>Venus</span>, <span>TX</span>
            </h1>

              <div id='menu-hero-bar' data-aos="fade-right"/>
            <p style={{fontFamily:"leckerli",fontWeight:"800"}} data-aos="fade-up-left">Order From Our Delicious Selection of Tacos, Quesadillas, Tortas, and More</p>
   
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






        <div className='menu-items'>
            <div className='menu-item' data-aos="fade-right">
              <img className="menu-item-img" src={tacosMenu}/>
              <h1 className='menu-item-title'>TACOS</h1>
              <p className='menu-item-price'>$2.50/ea.</p>
              <p className='menu-item-description'>
                Choices of Meat: <b>Pollo, Lengua, Asada, Pastor, Tripas, Barbacoa, and Campechanos (taco mix)</b>
                <br/>
                <br/>

                Served with your choice(s) of meat and topped with Fresh Cilantro and diced Onions. Comes with a side of Grilled Onions, Lime, a Roasted Jalapeno, and Salsa.
              </p>
            </div>









            <div className='menu-item' data-aos="fade-left">
              <img className="menu-item-img" src={qmenu}/>
              <h1 className='menu-item-title'>QUESADILLAS</h1>
              <p className='menu-item-price'>$9.00/ea.</p>
              <p className='menu-item-description'>
                Choices of Meat: <b>Pollo, Lengua, Asada, Pastor, Tripas, Barbacoa, and Campechanos (taco mix)</b>
                <br/>
                <br/>
                Served in a tortilla  with Cheese, Lettuce, Jalapeno Peppers, Grilled Onions, and your choice of meat.
              </p>
            </div>



          <div className='menu-item' data-aos="fade-right">
            <img className="menu-item-img" src="https://www.svgrepo.com/show/508699/landscape-placeholder.svg"/>
            <h1 className='menu-item-title'>BURRITOS</h1>
            <p className='menu-item-price'>$9.00/ea.</p>
            
            <p className='menu-item-description'>
              
            Choices of Meat: <b>Pollo, Lengua, Asada, Pastor, Tripas, Barbacoa, and Campechanos (taco mix)</b>
            <br/>
            <br/>
              Wrapped in a tortilla  with Beans, Cheese, Lettuce, Tomato, Grilled Onions, Jalapeno Peppers, and your choice of meat
            </p>
          </div>














          <div className='menu-item' data-aos="fade-left">
            <img className="menu-item-img" src="https://www.svgrepo.com/show/508699/landscape-placeholder.svg"/>
            <h1 className='menu-item-title'>TORTA CUBANA</h1>
            <p className='menu-item-price'>$10.00/ea.</p>
            
            <p className='menu-item-description'>
              Torta Filled with Asada, Pastor, Sausage, Ham, Cheese, Lettuce, Tomato, Avocado, and Jalapeno Peppers
            </p>
          </div>









          <div className='menu-item' data-aos="fade-right">
            <img className="menu-item-img" style={{objectPosition:" center"}} src={loadednachos}/>
            <h1 className='menu-item-title'>LOADED NACHOS</h1>
            <p className='menu-item-price'>$12.00/ea.</p>
            
            <p className='menu-item-description'>
              
            Choices of Meat: <b>Pollo, Lengua, Asada, Pastor, Tripas, Barbacoa, and Campechanos (taco mix)</b>
            <br/>
            <br/>
              Nachos Served with your choice of Meat, Cheese, Beans, Sour Cream, and Pico de Gallo
            </p>
          </div>

          <div className='menu-item' data-aos="fade-left">
            <img className="menu-item-img" src={elote}/>
            <h1 className='menu-item-title'>ELOTE</h1>
            <p className='menu-item-price'>$4.00/ea.</p>
            
            <p className='menu-item-description'>
              

              Elote in a cup topped with Salsa, Sour Cream, Cheese, Mayonnaise, and Butter
            </p>
          </div>







          <div className='menu-item' data-aos="fade-right">
            <img className="menu-item-img" src={loadedfries}/>
            <h1 className='menu-item-title'>CARNE ASADA FRIES</h1>
            <p className='menu-item-price'>$9.00/ea.</p>
            
            <p className='menu-item-description'>
              Crinkle cut frnech fries topped with carne asada, cheese, sour cream, and jalapenos
            </p>
          </div>

        </div>
      </div>








      {/* Call-to-Action */}
      <div className="menu-cta">
        <div className='menu-cta-content'>
          <h2>Ready to Order?</h2>
          <button className="nav-call-btn" onClick={() => window.location.href = 'tel:682-234-4610'}>Call to Order</button>
          <p>(682)234-4610</p>
        </div>
      </div>

















      <div className="kids-menu-body">
        <div className='kids-menu-title'>

          🍽️ KIDS MENU

        </div>



        <div className='menu-items'>

            <div className='menu-item' data-aos="fade-right">
              <img className="menu-item-img" src="https://www.svgrepo.com/show/508699/landscape-placeholder.svg"/>
              <h1 className='menu-item-title'>PAPAS CON QUESO</h1>
              <p className='menu-item-price'>$6.00/ea.</p>
              <p className='menu-item-description'>
                Potato Fries served with melted cheese on top
              </p>
            </div>

            <div className='menu-item' data-aos="fade-left">
              <img className="menu-item-img" src="https://www.svgrepo.com/show/508699/landscape-placeholder.svg"/>
              <h1 className='menu-item-title'>QUESADILLA CON PAPAS</h1>
              <p className='menu-item-price'>$6.00/ea.</p>
              <p className='menu-item-description'>
              Served in a tortilla with Cheese, Carne Asada, and a side of French Fries
              </p>
            </div>

            <div className='menu-item' data-aos="fade-right">
              <img className="menu-item-img" style={{objectPosition:"bottom"}} src={kidsnachos}/>
              <h1 className='menu-item-title'>NACHOS</h1>
              <p className='menu-item-price'>$6.00/ea.</p>
              <p className='menu-item-description'>
              Served with Nacho Cheese
              </p>
            </div>

            <div className='menu-item' data-aos="fade-left">
              <img className="menu-item-img" src="https://www.svgrepo.com/show/508699/landscape-placeholder.svg"/>
              <h1 className='menu-item-title'>CHURROS</h1>
              <p className='menu-item-price'>$6.00/ea.</p>
              <p className='menu-item-description'>
              Filled with either Vanilla or Cajeta
              </p>
            </div>
        </div>

      </div>
    </div>






























 








  );
};

export default Menu