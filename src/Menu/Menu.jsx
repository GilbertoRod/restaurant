import React from 'react'

import './Menu.css'
function Menu() {

  return (
    <div className="menu-page">
      {/* Hero Section */}
      <div className="menu-hero">
        <h1>Our Menu: Fresh & Flavorful</h1>
        <p>Explore the authentic taste of Mexico!</p>
      </div>

      {/* Menu Categories */}
      <div className="menu-body">
        <h1 className='menu-title'>🌮 OUR MENU 🌮</h1>
        <div className='menu-item' data-aos="slide-right">
          <img className="menu-item-img" src="https://lh3.googleusercontent.com/p/AF1QipPXvtbmNsbyPhe3UZuVUvHjOY7533M8sWojl5H5=s1360-w1360-h1020"/>
          <h1 className='menu-item-title'>TACOS</h1>
          <p className='menu-item-price'>$2.50/ea.</p>
          <p className='menu-item-description'>
            Choices of Meat: <b>Pollo, Lengua, Asada, Pastor, Tripas, Barbacoa, and Campechanos (taco mix)</b>
            <br/>
            <br/>

            Served with your choice(s) of meat and topped with Fresh Cilantro and diced Onions. Comes with a side of Grilled Onions, Lime, a Roasted Jalapeno, and Salsa.
          </p>
        </div>









        <div className='menu-item' data-aos="slide-left">
          <img className="menu-item-img" src="https://lh3.googleusercontent.com/p/AF1QipOlZrhRAexB0tn2ydfc36M1Riq-k0RQ76ZP-Vvp=s1360-w1360-h1020"/>
          <h1 className='menu-item-title'>QUESADILLAS</h1>
          <p className='menu-item-price'>$9.00/ea.</p>
          <p className='menu-item-description'>
            Choices of Meat: <b>Pollo, Lengua, Asada, Pastor, Tripas, Barbacoa, and Campechanos (taco mix)</b>
            <br/>
            <br/>
            Served in a tortilla  with Cheese, Lettuce, Jalapeno Peppers, Grilled Onions, and your choice of meat.
          </p>
        </div>





        <div className='menu-item' data-aos="slide-left">
          <img className="menu-item-img" src="https://lh3.googleusercontent.com/p/AF1QipOAwZllFrmOJWJJ6NFKh8spTEV1740Anq2N0BSC=s1360-w1360-h1020"/>
          <h1 className='menu-item-title'>BURRITOS</h1>
          <p className='menu-item-price'>$9.00/ea.</p>
          
          <p className='menu-item-description'>
            
          Choices of Meat: <b>Pollo, Lengua, Asada, Pastor, Tripas, Barbacoa, and Campechanos (taco mix)</b>
          <br/>
          <br/>
            Wrapped in a tortilla  with Beans, Cheese, Lettuce, Tomato, Grilled Onions, Jalapeno Peppers, and your choice of meat
          </p>
        </div>










        <div className='menu-item' data-aos="slide-right">
          <img className="menu-item-img" src="https://travelfoodatlas.com/wp-content/uploads/2021/03/torta-cubana-720x720.jpg"/>
          <h1 className='menu-item-title'>TORTA CUBANA</h1>
          <p className='menu-item-price'>$10.00/ea.</p>
          
          <p className='menu-item-description'>
            Torta Filled with Asada, Pastor, Sausage, Ham, Cheese, Lettuce, Tomato, Avocado, and Jalapeno Peppers
          </p>
        </div>


      </div>

      {/* Call-to-Action */}
      <div className="menu-cta">
        <div className='menu-cta-content'>
          <h2>Ready to Order?</h2>
          <button className="cta-button" onClick={() => window.location.href = 'tel:682-234-4610'}>Call to Order</button>
          <p>(682)234-4610</p>
        </div>
      </div>
    </div>
  );
};

export default Menu