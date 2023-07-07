import React from 'react';
import '../../main/main/VerticalCard.css';
import { formatDate } from '../../../services/dateService';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';

const NewsArticle = ({ article }) => {
    const { source, author, title, description, url, urlToImage, publishedAt, content } = article;
    const image = (
        <div className='verticalCardImg__wrapper'>
            <Card.Img
                className="verticalCardImg"
                src={urlToImage}
            />
        </div>
    )
    return (<Card className="verticalCard">
        <Link to={url} target="_blank">

            <Card.Text className="verticalCard__date">
                {formatDate(publishedAt)}
            </Card.Text>

            <Card.Body>
                <Card.Title>{title}</Card.Title>
            </Card.Body>
            {urlToImage ? image : ''}


        </Link>
    </Card>);

}
export default NewsArticle;
