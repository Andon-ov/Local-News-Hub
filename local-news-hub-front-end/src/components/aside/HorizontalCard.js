import React from 'react';
import Card from 'react-bootstrap/Card';
import {Link} from 'react-router-dom';
import './HorizontalCard.css';
import {formatDate} from '../../services/dateService';

const HorizontalCard = ({news}) => {
    console.log(news);


    return (<Card className="horizontalCard">
        <Link to={`/news/${news.id}`}>
            <div className='horizontalCardImg__wrapper'>
                <Card.Img
                    variant="left"
                    className="horizontalCardImg"
                    src={news.images[0]}
                />
            </div>
        </Link>
        <Card.Body>
            <Link to={`/news/${news.id}`}>
                <Card.Title>{news.title}</Card.Title>
                <Card.Text className="horizontalCard__date">{formatDate(news.published_at)}
                </Card.Text>
            </Link>
        </Card.Body>
    </Card>);
};

export default HorizontalCard;
