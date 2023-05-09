import React from 'react';
import Card from 'react-bootstrap/Card';
import Badge from 'react-bootstrap/Badge';


const HorizontalCard = ({news}) => {
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
                <Badge className="badge" bg="secondary">Днес</Badge>

                <Card.Text>{
                    news.publishedAt
                }</Card.Text>

            </Card.Body>
        </Card>
    );
};

export default HorizontalCard;

