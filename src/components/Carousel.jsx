import React, { useEffect, useState } from 'react'
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';
import { Swiper, SwiperSlide } from 'swiper/react';
import { FreeMode, Pagination, Navigation,Autoplay } from 'swiper/modules';
import '../styles/Swiper.css';
import Reviews from '../assets/Reviews';
function Carousel() {
  const [reviews, setReviews] = useState([]);
  useEffect(() => {
    // Fetch the reviews data
    fetch('/reviews.json')
      .then((response) => response.json())
      .then((data) => {
        console.log("Success")
        // Filter reviews with 5-star ratings and review text
        const fiveStarReviewsWithText = data.filter(
          (review) => review.review_rating === 5 && review.review_text
        );
        setReviews(fiveStarReviewsWithText);
      });
  }, []);
  return (
    <div className='reviews'>
        <h1 className='reviews-title'>OUR REVIEWS</h1>
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

          {reviews.map((review,index)=>(
            <SwiperSlide key={index}>
              <Reviews name={review.author_title} review={review.review_text} image={review.author_image} reviewlink={review.review_link}/>
            </SwiperSlide>
          ))}

        </Swiper>




















      
{/* 
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
        pagination={{ clickable: true }}
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
            <Reviews name={"Stephen A."} review={"The owners were really polite and the food was delicious. If you are looking for authentic street tacos this is the place to hit up. The salsa is really good too. They are open for lunch and dinner. Enjoy😃"}/>
        </SwiperSlide>
        <SwiperSlide>
            <Reviews name={"Jose V."} review={"Top authentic Mexican food truck in Venus! Delicious tacos and best corn in a cup I’ve been able to find (if you like it spicy, you have to try their salsa preparada! Not to mention great customer service every time I come here with my cousin who lives here. They also recently added a huge car port to shade the dining area and more parking spaces!🙌🏻 10/10 would recommend!"}/>

        </SwiperSlide>
        <SwiperSlide>
            <Reviews name={"Jamal K"} review={"These tacos are authentic as can be.  They’re so so good.  This place is a must try.  The staff was very nice and kind.  Great family vibe.  I would definitely come back as a regular."}/>

        </SwiperSlide>
        <SwiperSlide>
            <Reviews name={"Ashley L"} review={"The food is delicious, fresh, & authentic. I love their tacos. They cook them fresh and serve them hot. The sautéed onions are so good. Add lime, cilantro & salsa and they’re perfect. I also really enjoy the elote. Great food. Take home or dine out on the little patio. The owners are always so friendly. We’ll be back again for sure."}/>

        </SwiperSlide>
      </Swiper> */}
      
    </div>
  )
}

export default Carousel