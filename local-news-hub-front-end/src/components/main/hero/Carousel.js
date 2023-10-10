import React, { useContext } from "react";
import { Carousel } from "react-bootstrap";
import { NewsContext } from "../../../contexts/NewsContext";
import { Link } from "react-router-dom";
import "./Carousel.css";

const HeroCarousel = () => {
  // Access the news data from the NewsContext
  const { news } = useContext(NewsContext);

  return (
    <Carousel className="carousel" wrap fade>
      {/* Filter and map the "hot" news items for the carousel */}
      {news
        .filter((x) => x.news_type === "hot")
        .map((slide, index) => (
          <Carousel.Item key={index}>
            {/* Link to the news details page */}
            <Link to={`/news/${slide.id}`}>
              {/* Display the news image */}
              <img
                src={slide.images[0]}
                className="carouselImg"
                alt={slide.title}
              />

              {/* Carousel badge for "HOT" news */}

              {/* eng */}
              {/* <div className="carousel__badge">{slide.news_type} news</div> */}

              {/* Bulgarian label */}
              <div className="carousel__badge">Горещи новини</div>

              {/* Gradient overlay */}
              <div className="gradient"></div>
            </Link>
            <Carousel.Caption>
              {/* Link to the news details page */}
              <Link to={`/news/${slide.id}`}>
                {/* Display the news title */}
                <h3 className="carousel__title">{slide.title}</h3>
              </Link>
            </Carousel.Caption>
          </Carousel.Item>
        ))}
    </Carousel>
  );
};

export default HeroCarousel;
