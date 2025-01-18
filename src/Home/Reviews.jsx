import React from 'react'
import './Reviews.css'
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';
import { Swiper, SwiperSlide } from 'swiper/react';
import { FreeMode, Pagination, Navigation,Autoplay } from 'swiper/modules';
import '../styles/Swiper.css';



function ReviewCard(){
  return(
    <div>
      <h1>Hi</h1>
    </div>
  )
}

function Reviews() {
  return (
    <div className='home-reviews'>
      <p className='home-reviews-slogan'>WORDS FROM OUR FOODIES</p>
      <p className='home-reviews-title'>OUR REVIEWS</p>
      


      <div className='home-reviews-slider'>
                <Swiper
                breakpoints={{
                  1500:{
                    slidesPerView: 3,
                    spaceBetween: 15
                  },
                  860: {
                    slidesPerView: 2,
                    spaceBetween: 15
                  }
                }}
                freeMode={true}
                navigation={true}
                loop={true}
                autoplay={{
                  delay: 5000, // Delay in milliseconds (3 seconds)
                  disableOnInteraction: true, // Continue autoplay after user interactions
                  pauseOnMouseEnter: true, // Pause autoplay on mouse hover
                }}
                modules={[FreeMode, Pagination, Navigation, Autoplay]}
              >
                <SwiperSlide><ReviewCard/></SwiperSlide>
                <SwiperSlide>Hello</SwiperSlide>
                <SwiperSlide>Hello</SwiperSlide>
              </Swiper>
      </div>
    </div>
  )
}

export default Reviews