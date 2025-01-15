import React from 'react'
import '../styles/Carousel.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'
import { faUserCircle } from '@fortawesome/free-solid-svg-icons'
function Reviews({name,review,image,reviewlink}) {
  return (
    <div className='review-container'>
        <div className='review-image'>
          <FontAwesomeIcon icon={faUserCircle} color='white' size='4x'/>

        </div>

        <h1 className='review-name'>
            {name}
        </h1>

        <div className='slider-stars'>
          <FontAwesomeIcon icon={faStar} color='gold' size='lg'/>
          <FontAwesomeIcon icon={faStar} color='gold' size='lg'/>
          <FontAwesomeIcon icon={faStar} color='gold' size='lg'/>
          <FontAwesomeIcon icon={faStar} color='gold' size='lg'/>
          <FontAwesomeIcon icon={faStar} color='gold' size='lg'/>
          </div>

        <p className='review-text'>
            {review}
        </p>
    </div>
  )
}

export default Reviews