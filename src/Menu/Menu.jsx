import React from 'react'
import tacosMenu from '../assets/tacosmenu.jpg'
import qmenu from '../assets/quesadillamenu.jpg'
import curvy from '../assets/line.svg'

import './Menu.css'
function Menu() {

  return (
    <div className="menu-page">
      {/* Hero Section */}
      <div className="menu-hero">
        <h1 data-aos="fade">Our Menu: Fresh & Flavorful</h1>
        <p data-aos="fade">Explore the authentic taste of Mexico!</p>
      </div>

      {/* Menu Categories */}
      <div className="menu-body">
        <div className='menu-title'>
          <div>🌮</div>
          <div className='our-menu'>
            <div>OUR MENU</div>
            {/* <img src={curvy} className='curvy-line'/> */}
          </div>
          <div>🌮</div>
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














          <div className='menu-item' data-aos="fade-left">
            <img className="menu-item-img" src="https://travelfoodatlas.com/wp-content/uploads/2021/03/torta-cubana-720x720.jpg"/>
            <h1 className='menu-item-title'>TORTA CUBANA</h1>
            <p className='menu-item-price'>$10.00/ea.</p>
            
            <p className='menu-item-description'>
              Torta Filled with Asada, Pastor, Sausage, Ham, Cheese, Lettuce, Tomato, Avocado, and Jalapeno Peppers
            </p>
          </div>









          <div className='menu-item' data-aos="fade-right">
            <img className="menu-item-img" src="https://www.simplyrecipes.com/thmb/xTCx1mKCjjPYgGasys_JGafuem0=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/__opt__aboutcom__coeus__resources__content_migration__simply_recipes__uploads__2019__04__Nachos-LEAD-3-e6dd6cbb61474c9889e1524b3796601e.jpg"/>
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
            <img className="menu-item-img" src="https://insearchofyummyness.com/wp-content/uploads/2022/07/Mexican-Corn-Cup-Feature.jpg"/>
            <h1 className='menu-item-title'>ELOTE</h1>
            <p className='menu-item-price'>$4.00/ea.</p>
            
            <p className='menu-item-description'>
              

              Elote in a cup topped with Salsa, Sour Cream, Cheese, Mayonnaise, and Butter
            </p>
          </div>

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

















      <div className="kids-menu-body">
        <div className='kids-menu-title'>

          🍽️ KIDS MENU

        </div>



        <div className='menu-items'>

            <div className='menu-item' data-aos="fade-right">
              <img className="menu-item-img" src="https://www.cookwithnabeela.com/wp-content/uploads/2024/05/CheeseFries.webp"/>
              <h1 className='menu-item-title'>PAPAS CON QUESO</h1>
              <p className='menu-item-price'>$6.00/ea.</p>
              <p className='menu-item-description'>
                Potato Fries served with melted cheese on top
              </p>
            </div>

            <div className='menu-item' data-aos="fade-left">
              <img className="menu-item-img" src="https://popmenucloud.com/cdn-cgi/image/width%3D1200%2Cheight%3D1200%2Cfit%3Dscale-down%2Cformat%3Dauto%2Cquality%3D60/tgpbaezf/fc40418c-43e1-4f59-8022-25ba6ac1bb6e.jpg"/>
              <h1 className='menu-item-title'>QUSADILLA CON PAPAS</h1>
              <p className='menu-item-price'>$6.00/ea.</p>
              <p className='menu-item-description'>
              Served in a tortilla with Cheese, Carne Asada, and a side of French Fries
              </p>
            </div>

            <div className='menu-item' data-aos="fade-right">
              <img className="menu-item-img" src="https://www.fifteenspatulas.com/wp-content/uploads/2022/05/Nacho-Cheese-Sauce.jpg"/>
              <h1 className='menu-item-title'>NACHOS</h1>
              <p className='menu-item-price'>$6.00/ea.</p>
              <p className='menu-item-description'>
              Served with Nacho Cheese
              </p>
            </div>

            <div className='menu-item' data-aos="fade-left">
              <img className="menu-item-img" src="https://www.mamagourmand.com/wp-content/uploads/2017/11/stuffed-churros-3-500x500.jpg"/>
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