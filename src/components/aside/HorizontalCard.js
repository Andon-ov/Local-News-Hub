import React from 'react';
import Card from 'react-bootstrap/Card';
import {Link} from 'react-router-dom';
import './HorizontalCard.css';
import {formatDate} from "../../services/dateService";

const HorizontalCard = ({news}) => {


    return (<Card className="horizontalCard">
        <Link to={`/news/${news._id}`}>
            <div className='horizontalCardImg__wrapper'>
                <Card.Img
                    variant="left"
                    className="horizontalCardImg"
                    src={news.urlToImage}
                />
            </div>
        </Link>
        <Card.Body>
            <Link to={`/news/${news._id}`}>
                <Card.Title>{news.title}</Card.Title>

                <Card.Text>
                    {// <Badge className="horizontalCard__badge" >{formatDate()}</Badge>
                        <p className="horizontalCard__date">{formatDate(news.publishedAt)}</p>}
                </Card.Text>
            </Link>
        </Card.Body>
    </Card>);
};

export default HorizontalCard;
