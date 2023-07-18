import React, { useState } from 'react';
import ReactPlayer from 'react-player/youtube';
import './VideoCarousel.css';

const VideoCarousel = ({ videos }) => {
    const [activeIndex, setActiveIndex] = useState(0);

    const handleNext = () => {
        setActiveIndex((prevIndex) => (prevIndex + 1) % videos.length);
    };

    const handlePrev = () => {
        setActiveIndex((prevIndex) => (prevIndex - 1 + videos.length) % videos.length);
    };
    const buttons = (
        <div className="carousel__buttons">
            <button className='prevBtn' onClick={handlePrev}>Prev</button>
            <button className='nextBtn' onClick={handleNext}>Next</button>
        </div>
    )

    return (
        <div className="video__carousel">
            <div className="video__container">
                <ReactPlayer

                    url={videos[activeIndex]}
                    playIcon={false}
                    width='100%'
                    height='100%'
                    controls={false}
                    playing={true}
                />
            </div>
            {videos.length > 1
                ? buttons
                : ''}
        </div>
    );
};

export default VideoCarousel;
