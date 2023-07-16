import React from 'react';
import '../../main/main/VerticalCard.css';
import { formatDate } from '../../../services/dateService';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';

const MediastackAPIArticle = ({ article }) => {
    // main
    const { author, category, country, description, image, language, published_at, source, title, url } = article

    const urlToImage = (
        <div className='verticalCardImg__wrapper'>
            <Card.Img
                className="verticalCardImg"
                src={image}
            />
        </div>
    )
    return (<Card className="verticalCard">
        <Link to={url} target="_blank">
            {image ? urlToImage : ''}

            <Card.Body>


                <Card.Text className="verticalCard__date">
                    {formatDate(published_at)}
                </Card.Text>


                <Card.Text className="verticalCard__date" >{description}</Card.Text>
                <Card.Title>{title}</Card.Title>

            </Card.Body>



        </Link>
    </Card>);

}
export default MediastackAPIArticle;
