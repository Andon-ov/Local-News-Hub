import React, { useState } from "react";
import ReactPlayer from "react-player/youtube";
import "./VideoCarousel.css";

const VideoCarousel = ({ videos }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  // Function to handle the next video
  const handleNext = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % videos.length);
  };

  // Function to handle the previous video
  const handlePrev = () => {
    setActiveIndex(
      (prevIndex) => (prevIndex - 1 + videos.length) % videos.length
    );
  };

  // Render previous and next buttons if there is more than one video
  const buttons = (
    <div className="carousel__buttons">
      <button className="prevBtn" onClick={handlePrev}>
        Prev
      </button>
      <button className="nextBtn" onClick={handleNext}>
        Next
      </button>
    </div>
  );

  return (
    <div className="video__carousel">
      <div className="video__container">
        <ReactPlayer
          url={videos[activeIndex]}
          playIcon={false}
          width="100%"
          height="100%"
          controls={false}
          playing={true}
        />
      </div>
      {videos.length > 1 ? buttons : ""}
    </div>
  );
};

export default VideoCarousel;
