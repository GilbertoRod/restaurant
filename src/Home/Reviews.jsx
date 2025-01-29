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
      <p className='home-reviews-slogan' data-aos="zoom-in-left">WORDS FROM OUR FOODIES</p>
      <p className='home-reviews-title' data-aos="zoom-in-left">OUR REVIEWS</p>
      


      <div className='home-reviews-slider' data-aos="zoom-in">
        <Swiper
        breakpoints={{
          1200:{
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
        style={{padding:"20px"}}
        >
          
          <SwiperSlide>
              <Review name={"Stephen A"} review={"The owners were really polite and the food was delicious. If you are looking for authentic street tacos this is the place to hit up. The salsa is really good too. They are open for lunch and dinner. Enjoy😃"}/>
          </SwiperSlide>
          <SwiperSlide>
              <Review name={"Jose V"} review={"Top authentic Mexican food truck in Venus! Delicious tacos and best corn in a cup I’ve been able to find (if you like it spicy, you have to try their salsa preparada! Not to mention great customer service every time I come here with my cousin who lives here. They also recently added a huge car port to shade the dining area and more parking spaces!🙌🏻 10/10 would recommend!"}/>

          </SwiperSlide>
          <SwiperSlide>
              <Review name={"Chris L"} review={"Very delicious… tacos were juicy and flavored very well! Elote was in point! Highly recommend if you are in the Venus area. Pricing was very good!"}/>
          </SwiperSlide>
          <SwiperSlide>
              <Review name={"Iris H"} review={"Always saw this taco truck at the corner of 157 and 67 in Venus. It moved right down the road on 157 past some storage units. Tacos are loaded. Grilled onions and yummy. Green Salsa was perfect for the tacos. Limes were a little dry and meat was a little on the charred side but still hit the spot. Jarritos out of an ice chest to finish up the meal. 5 tacos...1 jarritos...$16."}/>
          </SwiperSlide>
          <SwiperSlide>
              <Review name={"Samantha Z"} review={"My family loves this place! We order frequently and can never get enough. Definitely reminds us of home. The family that runs the truck is generous, friendly, and kind. The food is great as well. Highly recommend!"}/>
          </SwiperSlide>
          <SwiperSlide>
              <Review name={"DOC D"} review={"Great people great food. The green sauce is amazing. Everyone of their items is off the charts 10 out of 10 would recommend… Peppers are hot like they’re supposed to be drinks are cold like they’re supposed to be great hidden taco spot."}/>
          </SwiperSlide>
          <SwiperSlide>
              <Review name={"Tam J"} review={"I tried Street Tacos Y Mas for the first time and it was amazing. The owners are very friendly, great chill atmosphere, and the food is reasonably priced and tastes amazing. I’ll definitely return and recommend to others."}/>
          </SwiperSlide>
          <SwiperSlide>
              <Review name={"Andrea"} review={"5/5 🌟 Stopped at this food truck driving through and was very impressed by the service and the food. We ordered asada tacos and elotes which both were great! The elotes were well prepared with lots of toppings and the salsa was 👌🏼 (if you like spicy definitely try it out). As we were waiting for our food they gave us complimentary nachos which was a nice surprise. The owner stopped to talk to us and made sure we were good with everything. Highly recommend!!"}/>
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