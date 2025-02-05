import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './HomeBanner.css'
import { faPhoneVolume } from '@fortawesome/free-solid-svg-icons'
function HomeBanner() {
  return (
    <div className='home-banner-wrapper'>
        <div className='home-banner-filter'/>
        <div className='home-banner-text-container'>
            <p>READY TO ORDER?</p>
            <h1>CALL US NOW!</h1>
            <a href='tel:+16822344610'><button className='banner-btn'><FontAwesomeIcon icon={faPhoneVolume} color='var(--main)'/> (682) 234-4610</button></a>
        </div>
    </div>
  )
}

export default HomeBanner