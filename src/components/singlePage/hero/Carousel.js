import React, {useContext} from 'react';
import {Carousel} from 'react-bootstrap';
import {NewsContext} from '../../../contexts/NewsContext';
import {Link} from 'react-router-dom';
import './Carousel.css';

const HeroCarousel = () => {
    const {news} = useContext(NewsContext);
    return (
        <Carousel className="carousel" wrap fade>
            {news
                .filter((x) => x.type === 'hot')
                .map((slide, index) => (
                    <Carousel.Item key={index}>
                        <Link to={`/news/${slide._id}`}>
                            <img
                                src={slide.urlToImage}
                                className="carouselImg"
                                alt={slide.title}
                            />
                            <div className="carousel__badge">{slide.type} news</div>


                            <div className="gradient"></div>
                        </Link>
                        <Carousel.Caption>
                            <Link to={`/news/${slide._id}`}>
                                <h3 className='carousel__title'>{slide.title}</h3>
                            </Link>
                        </Carousel.Caption>
                    </Carousel.Item>
                ))}
        </Carousel>
    );
};

export default HeroCarousel;
