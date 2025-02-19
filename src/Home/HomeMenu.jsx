import React from 'react'
import './HomeMenu.css'
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';
import tacos from '../assets/food/tacos-1.jpg'
import tacosblur from '../assets/food/tacos-1-b.webp'
import papas from '../assets/food/papas-con-carne.jpg'
import papasblur from '../assets/food/papas-con-carne-b.webp'
import nachos from '../assets/food/loaded-nachos-alt.jpg'
import nachosblur from '../assets/food/loaded-nachos-alt-b.webp'
import elote from '../assets/food/elote.jpg'
import eloteblur from '../assets/food/elote-b.webp'
import { Swiper, SwiperSlide } from 'swiper/react';
import { FreeMode, Pagination, Navigation,Autoplay } from 'swiper/modules';
import '../styles/Swiper.css';


function MenuCard({image, title,bgBlur}) {
  return (
    <div className='menu-card' data-aos="zoom-in" style={{background:`url(${bgBlur})`, backgroundSize:"cover", backgroundPosition:"center"}}>
      <div className='menu-card-filter'/>
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
                <MenuCard image={tacos} bgBlur={tacosblur} title={"TACOS"}/>
              </SwiperSlide>
              <SwiperSlide>
                <MenuCard image={papas} bgBlur={papasblur} title={"PAPAS CON CARNE"}/>
              </SwiperSlide>

              <SwiperSlide>
              <MenuCard image={nachos} bgBlur={nachosblur} title="LOADED NACHOS"/>
              </SwiperSlide>
              
              <SwiperSlide>
              <MenuCard image={elote} bgBlur={eloteblur} title="ELOTE"/>
              </SwiperSlide>
            </Swiper>
            
      </div>
      <button className='home-about-more-btn' onClick={click} >VIEW FULL MENU</button>
    </div>
  )
}

export default HomeMenu