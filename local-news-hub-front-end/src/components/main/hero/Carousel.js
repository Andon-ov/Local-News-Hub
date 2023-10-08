import React, { useContext } from 'react';
import { Carousel } from 'react-bootstrap';
import { NewsContext } from '../../../contexts/NewsContext';
import { Link } from 'react-router-dom';
import './Carousel.css';

const HeroCarousel = () => {
    const { news } = useContext(NewsContext);
    return (
        <Carousel className="carousel" wrap fade>
            {news
                .filter((x) => x.news_type === 'hot')
                .map((slide, index) => (
                    <Carousel.Item key={index}>
                        <Link to={`/news/${slide.id}`}>
                            <img
                                src={slide.images[0]}
                                className="carouselImg"
                                alt={slide.title}
                            />

                            {/* Carousel badge HOT */}
                            {/* eng */}
                            {/* <div className="carousel__badge">{slide.news_type} news</div> */}

                            {/* bg */}
                            <div className="carousel__badge">Горещи новини</div>

                            <div className="gradient"></div>
                        </Link>
                        <Carousel.Caption>
                            <Link to={`/news/${slide.id}`}>
                                <h3 className='carousel__title'>{slide.title}</h3>
                            </Link>
                        </Carousel.Caption>
                    </Carousel.Item>
                ))}
        </Carousel>
    );
};

export default HeroCarousel;
