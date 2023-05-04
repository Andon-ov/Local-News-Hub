import Carousel from 'react-bootstrap/Carousel';

function IndividualIntervalsExample() {
    return (
        <Carousel className={'carousel'}>
            <Carousel.Item interval={1000}>
                <img
                    className="d-block w-100"
                    src="https://radio999bg.com/images/radio999bg/cache/news/ms-otmeni-natsionalnata-zabrana-za-vnos-ukrainski-stoki-960x640.jpg"
                    alt="First slide"
                />
                <Carousel.Caption>
                    <h3>First slide label</h3>
                    <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item interval={500}>
                <img
                    className="d-block w-100"
                    src="https://radio999bg.com/images/radio999bg/cache/news/ms-otmeni-natsionalnata-zabrana-za-vnos-ukrainski-stoki-960x640.jpg"
                    alt="Second slide"
                />
                <Carousel.Caption>
                    <h3>Second slide label</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src="https://radio999bg.com/images/radio999bg/cache/news/ms-otmeni-natsionalnata-zabrana-za-vnos-ukrainski-stoki-960x640.jpg"
                    alt="Third slide"
                />
                <Carousel.Caption>
                    <h3>Third slide label</h3>
                    <p>
                        Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                    </p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    );
}

export default IndividualIntervalsExample;