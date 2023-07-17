import React from 'react';
import './TabsCard.css';
import { formatDate } from '../../../services/dateService';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';

const NewsAPIArticle = ({ article }) => {
    // const { source, author, title, description, url, urlToImage, publishedAt, content } = article;
    const { title, url, urlToImage, publishedAt } = article;

    const image = (
        <div className='horizontalCardImg__wrapper'>
            <Card.Img
                className="horizontalCardImg"
                src={urlToImage}
            />
        </div>
    )
    return (<Card className="horizontalCard"
    // "display block" because do not have image and use all space!
        style={{ display: 'block' }}
    >
        <Link to={url} target="_blank">

            <Card.Text className="horizontalCard__date">
                {formatDate(publishedAt)}
            </Card.Text>

            <Card.Body>
                <Card.Title style={{ padding: '20px 20px 0 20px' }}>{title}</Card.Title>
            </Card.Body>
            {urlToImage ? image : ''}


        </Link>
    </Card>);

}
export default NewsAPIArticle;
