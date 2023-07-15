import ReactPlayer from 'react-player/youtube';

function VideoPlayer({ url }) {
    // const [activeIndex, setActiveIndex] = React.useState(0);

    // const handlePrev = () => {
    //     setActiveIndex((prevIndex) => (prevIndex === 0 ? videos.length - 1 : prevIndex - 1));
    // };

    // const handleNext = () => {
    //     setActiveIndex((prevIndex) => (prevIndex === videos.length - 1 ? 0 : prevIndex + 1));
    // };


    return (
        <div style={{ position: 'relative', width: '100%', height: '486px' }}>
            <ReactPlayer
                // url={videos[activeIndex]}
                url={url}
                playIcon={false}
                width='100%'
                height='100%'
                controls={false}
                playing={true}
            />
            {/* <div>
                <button onClick={handlePrev}>Previous</button>
                <button onClick={handleNext}>Next</button>
            </div> */}
        </div>
    );
}
export default VideoPlayer;

