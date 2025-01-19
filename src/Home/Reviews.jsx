import React from 'react'
import './Reviews.css'

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';
import { Swiper, SwiperSlide } from 'swiper/react';
import { FreeMode, Pagination, Navigation,Autoplay } from 'swiper/modules';
import '../styles/Swiper.css';
import Review from '../assets/Review'

function Reviews() {
  return (
    <div className='home-reviews'>
      <p className='home-reviews-slogan' data-aos="slide-down">WORDS FROM OUR FOODIES</p>
      <p className='home-reviews-title' data-aos="slide-up">OUR REVIEWS</p>
      


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
        <SwiperSlide>
            <Review name={"Stephen A."} review={"The owners were really polite and the food was delicious. If you are looking for authentic street tacos this is the place to hit up. The salsa is really good too. They are open for lunch and dinner. Enjoy😃"}/>
        </SwiperSlide>
        <SwiperSlide>
            <Review name={"Jose V."} review={"Top authentic Mexican food truck in Venus! Delicious tacos and best corn in a cup I’ve been able to find (if you like it spicy, you have to try their salsa preparada! Not to mention great customer service every time I come here with my cousin who lives here. They also recently added a huge car port to shade the dining area and more parking spaces!🙌🏻 10/10 would recommend!"}/>

        </SwiperSlide>
        <SwiperSlide>
            <Review name={"Jamal K"} review={"These tacos are authentic as can be.  They’re so so good.  This place is a must try.  The staff was very nice and kind.  Great family vibe.  I would definitely come back as a regular."}/>

        </SwiperSlide>
        <SwiperSlide>
            <Review name={"Ashley L"} review={"The food is delicious, fresh, & authentic. I love their tacos. They cook them fresh and serve them hot. The sautéed onions are so good. Add lime, cilantro & salsa and they’re perfect. I also really enjoy the elote. Great food. Take home or dine out on the little patio. The owners are always so friendly. We’ll be back again for sure."}/>

        </SwiperSlide>
              </Swiper>
      </div>
    </div>
  )
}

export default Reviews