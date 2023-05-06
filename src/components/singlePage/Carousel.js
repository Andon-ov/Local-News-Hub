import React from 'react';
import { Carousel } from 'react-bootstrap';

import { useContext } from 'react';
import { NewsContext } from '../../contexts/NewsContext';

const HeroCarousel = () => {

  const { news } = useContext(NewsContext);
    console.log(news);
  return (

    <Carousel className='carousel'>

      {news
      .filter((x) => x.type === 'hot')
      .map((slide, index) => (
        <Carousel.Item className='carouselImg' key={index}>

          <img src={slide.urlToImage} alt={slide.title} />
          <Carousel.Caption>
            <h3>{slide.title}</h3>

          </Carousel.Caption>
        </Carousel.Item>
      ))}

    </Carousel>
  );
};

export default HeroCarousel;
