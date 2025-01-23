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
      <div style={{height:"700px"}}></div>

      {/* Call-to-Action */}
      <div className="menu-cta">
        <div className='menu-cta-content'>
          <h2>Ready to Order?</h2>
          <button className="cta-button" onClick={() => window.location.href = 'tel:682-324-4510'}>Call to Order</button>
          <p>682-324-4510</p>
        </div>
      </div>
    </div>
  );
};

export default Menu