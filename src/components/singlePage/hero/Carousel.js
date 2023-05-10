import React, {useContext} from 'react';
import {Carousel} from 'react-bootstrap';
import {NewsContext} from '../../../contexts/NewsContext';
import './Carousel.css';

const HeroCarousel = () => {

    const {news} = useContext(NewsContext);
    return (

        <Carousel className='carousel' wrap fade>

            {news
                .filter((x) => x.type === 'hot')
                .map((slide, index) => (
                    <Carousel.Item key={index}>

                        <img src={slide.urlToImage} className='carouselImg' alt={slide.title}/>
                        <div className='gradient'></div>
                        <Carousel.Caption>
                            <h3>{slide.title}</h3>

                        </Carousel.Caption>
                    </Carousel.Item>
                ))}

        </Carousel>
    );
};

export default HeroCarousel;
