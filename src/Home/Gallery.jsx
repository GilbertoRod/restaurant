import React from 'react'
import './Gallery.css'
import pic1 from '../assets/customer-pics/customer-1.jpg'
import pic2 from '../assets/customer-pics/customer-2.jpg'
import pic3 from '../assets/customer-pics/customer-3.jpg'
import pic4 from '../assets/customer-pics/customer-4.jpg'
import pic5 from '../assets/customer-pics/customer-5.jpg'
import pic6 from '../assets/customer-pics/customer-6.jpg'
import pic7 from '../assets/customer-pics/customer-7.jpg'
import pic8 from '../assets/customer-pics/customer-8.jpg'
import pic9 from '../assets/customer-pics/customer-9.jpg'
import pic10 from '../assets/customer-pics/customer-10.jpg'
import pic11 from '../assets/customer-pics/customer-11.jpg'
function Gallery() {
  return (
    <div className='home-gallery'>
            <p className='home-reviews-slogan' data-aos="zoom-in-left">CUSTOMER APPROVED</p>
            <p id="customer-gallery-title" className='home-reviews-title' data-aos="zoom-in-left">OUR CUSTOMER GALLERY</p>
            <div class="customer-gallery">
              <div class="div1" data-aos="zoom-in">
                <img loading="lazy" className='grid-img' style={{objectPosition:"center bottom"}} src={pic1}/>
              </div>
              <div class="div2" data-aos="zoom-in">
                <img loading="lazy" className='grid-img' style={{objectPosition:"center"}} src={pic2}/>
              </div>
              <div class="div3" data-aos="zoom-in">
                <img loading="lazy" className='grid-img' style={{objectPosition:"center"}} src={pic3}/>
              </div>
              <div class="div4" data-aos="zoom-in">
                <img  loading="lazy" className='grid-img' style={{objectPosition:"center"}} src={pic4}/>
              </div>
              <div class="div5" data-aos="zoom-in">
                <img loading="lazy" className='grid-img' style={{objectPosition:"center"}} src={pic5}/>
              </div>
              <div class="div6" data-aos="zoom-in">
                <img loading="lazy" className='grid-img' style={{objectPosition:"center"}} src={pic6}/>
              </div>
              <div class="div7" data-aos="zoom-in">
                <img loading="lazy" className='grid-img' style={{objectPosition:"center"}} src={pic7}/>
              </div>
              <div class="div8" data-aos="zoom-in">
                <img loading="lazy" className='grid-img' style={{objectPosition:"center bottom"}} src={pic8}/>
              </div>
              <div class="div9" data-aos="zoom-in">
                <img loading="lazy" className='grid-img' style={{objectPosition:"center"}} src={pic9}/>

              </div>
              <div class="div10" data-aos="zoom-in">
              <img loading="lazy" className='grid-img' style={{objectPosition:"center "}} src={pic11}/>

              </div>

            </div>
    </div>
  )
}

export default Gallery