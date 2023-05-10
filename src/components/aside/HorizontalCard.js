import React from 'react';
import Card from 'react-bootstrap/Card';
// import Badge from 'react-bootstrap/Badge';
import './HorizontalCard.css';


const HorizontalCard = ({ news }) => {


    function formatDate(date) {
        const now = new Date();
        const dateObj = new Date(news.publishedAt);

        if (dateObj.toDateString() === now.toDateString()) {
            return 'today';
        }
        // Add more conditions for displaying other relative date strings,
        //  such as "yesterday" or "last week"

        return dateObj.toLocaleDateString();
    }
    return (
        <Card className="horizontalCard"
        //  style={{ width: '18rem' }}
        >
            <Card.Img
                variant="left"
                className='horizontalCardImg'
                src={news.urlToImage}
            />
            <Card.Body>
                <Card.Title style={{
                    overflow: 'hidden',
                    textOverflow: 'ellipsis',
                    display: '-webkit-box',
                    WebkitLineClamp: 2,
                    WebkitBoxOrient: 'vertical',
                }}>{
                        news.title
                    }</Card.Title>

                <Card.Text>{
                    // <Badge className="horizontalCard__badge" >{formatDate()}</Badge>
                    <p className="horizontalCard__badge">{formatDate()}</p>
                    
                }</Card.Text>

            </Card.Body>
        </Card>
    );
};

export default HorizontalCard;

