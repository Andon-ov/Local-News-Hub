import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

const NewsCarousel = ({ images }) => {
  if (images.length <= 1) {
    // If there is only one image, render it directly without the carousel
    return <img style={{width: '100%'}} src={images[0]} alt="News" />;
    

   
  }

  return (
    <Carousel>
      {images.map((image, index) => (
        <div key={index}>
          <img src={image} alt={`News ${index + 1}`} />
        </div>
      ))}
    </Carousel>
  );
};

export default NewsCarousel;
