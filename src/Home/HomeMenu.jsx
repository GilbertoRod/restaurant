import React from 'react'
import './HomeMenu.css'
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';
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


function HomeMenu() {
  return (
    <div className='home-menu'>
      <div className='color-block-1'/>
      <p className='home-menu-slogan' data-aos="slide-right">SATISFY YOUR CRAVINGS</p>
      <p className='home-menu-title' data-aos="slide-left">OUR KITCHEN</p>
      <div className='home-menu-items'>
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
                  <MenuCard image={"https://travelfoodatlas.com/wp-content/uploads/2021/03/torta-cubana-720x720.jpg"} title={"Tortas"}/>
              </SwiperSlide>
              <SwiperSlide>
                <MenuCard image="https://www.recipetineats.com/tachyon/2018/06/Quesadillas_4.jpg" title="QUESADILLAS"/>
              </SwiperSlide>
              <SwiperSlide>
                <MenuCard image={"https://www.thecookierookie.com/wp-content/uploads/2024/05/street-tacos-recipe-2.jpg"} title={"Tacos"}/>
              </SwiperSlide>
              <SwiperSlide>
              <MenuCard image="https://www.seriouseats.com/thmb/lOdEqFZsV3LOzX5Pc2Y6XCJuvTs=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/__opt__aboutcom__coeus__resources__content_migration__serious_eats__seriouseats.com__2020__10__20201002-mission-style-burrito-jillian-atkinson-2-6841455590ed4c3981529b232166643a.jpg" title="Burritos"/>
              </SwiperSlide>
            </Swiper>
            
      </div>
      <button className='home-about-more-btn' >VIEW FULL MENU</button>
    </div>
  )
}

export default HomeMenu