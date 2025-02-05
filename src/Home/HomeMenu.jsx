import React from 'react'
import './HomeMenu.css'
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';
import tacos from '../assets/food/tacos-1.jpg'
import quesadillas from '../assets/food/quesadilla.jpg'
import nachos from '../assets/food/loaded-nachos-alt.jpg'
import { Swiper, SwiperSlide } from 'swiper/react';
import { FreeMode, Pagination, Navigation,Autoplay } from 'swiper/modules';
import '../styles/Swiper.css';


function MenuCard({image, title}) {
  return (
    <div className='menu-card' data-aos="zoom-in">
      <img className='menu-card-img' src={image}/>
      <p className='menu-card-title'>{title}</p>
    </div>
  )
}


function HomeMenu({click}) {
  return (
    <div className='home-menu'>
      <div className='color-block-1'/>
      <div className='home-menu-overlay'/>
      <p className='home-menu-slogan' data-aos="slide-right">SATISFY YOUR CRAVINGS</p>
      <p className='home-menu-title' data-aos="slide-left">OUR KITCHEN</p>
      <div className='home-menu-items'>
       <Swiper
              breakpoints={{
                1200:{
                  slidesPerView: 3,

                },
                760: {
                  slidesPerView: 2,

                }
              }}
              spaceBetween={15}
              freeMode={true}
              navigation={true}
              pagination={{ clickable: true }}
              loop={true}
              autoplay={{
                delay: 5000, // Delay in milliseconds (3 seconds)
                disableOnInteraction: true, // Continue autoplay after user interactions
                pauseOnMouseEnter: true, // Pause autoplay on mouse hover
              }}
              modules={[FreeMode, Pagination, Navigation, Autoplay]}
            >
              <SwiperSlide>
                <MenuCard image={tacos} title={"TACOS"}/>
              </SwiperSlide>
              <SwiperSlide>
                <MenuCard image={quesadillas} title={"QUESADILLAS"}/>
              </SwiperSlide>

              <SwiperSlide>
              <MenuCard image={nachos} title="LOADED NACHOS"/>
              </SwiperSlide>
            </Swiper>
            
      </div>
      <button className='home-about-more-btn' onClick={click} >VIEW FULL MENU</button>
    </div>
  )
}

export default HomeMenu