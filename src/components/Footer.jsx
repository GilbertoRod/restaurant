import React from 'react'
import'../styles/Footer.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faLocationDot, faPhone, faVoicemail} from '@fortawesome/free-solid-svg-icons'

function Footer() {
  return (
    <div className='footer-container'>
      <div className='footer-info-container'>
        <div className='footer-company-info'>
          <p className='footer-company-name'>STREET TACOS Y MAS</p>

          <p><FontAwesomeIcon icon={faLocationDot} color='var(--main)'/> <a href='https://maps.app.goo.gl/rr9R4xcZq6C3WJ1W6' target='_blank'>110 FM157, Venus, TX 76084</a></p>

          <p><FontAwesomeIcon icon={faPhone} color='var(--main)'/> <a href='tel:+16822344610'>(682) 234-4610</a></p>

        </div>
        <div className='footer-location-hours'>
          <p style={{textDecoration:"underline", textDecorationColor:"var(--main)", fontSize:"30px"}}>HOURS</p>
          <p>
            Monday 10 AM - 9 PM<br/>
            Tuesday 10 AM - 8 PM<br/>
            Wednesday 10 AM - 8 PM<br/>
            Thursday 10 AM - 9 PM<br/>
            Friday 10 AM - 10 PM<br/>
            Saturday 10 AM - 10 PM<br/>
            Sunday 12 PM - 9 PM<br/>
          </p>
        </div>
        <div className='footer-directory'>
          <p><a href='/'>HOME</a>  | <a href='/'>MENU</a> | <a href='/'>ABOUT</a> | <a href='/'>FAQ</a> </p>
        </div>
  
      </div>
      <div className='footer-cr'>
        &copy; 2025 <span style={{color:"var(--main)"}}>Street Tacos Y Mas</span>
      </div>
    </div>
  )
}

export default Footer