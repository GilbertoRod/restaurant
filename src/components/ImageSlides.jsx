import React, { useEffect, useState } from 'react';

function ImageSlides({ images }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 10000); // Change image every 5 seconds

    return () => clearInterval(interval); // Cleanup on component unmount
  }, [images.length]);

  return (
    <div className='slideshow-container'>
      <img className='serve-img' src={images[currentIndex]} alt={`Slide ${currentIndex}`} key={currentIndex}/>
      </div>
  );
}

export default ImageSlides;
