import Card from 'react-bootstrap/Card';
import {Link} from 'react-router-dom';

function VerticalCard({news}) {
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

        <Card>
            <Card.Img
                variant="top"
                className="verticalCardImg"
                src={news.urlToImage}
            />
            <Card.Body>
                <Card.Title
                    style={{
                        overflow: 'hidden',
                        textOverflow: 'ellipsis',
                        display: '-webkit-box',
                        WebkitLineClamp: 5,
                        WebkitBoxOrient: 'vertical',
                    }}
                >
                    {news.title}
                </Card.Title>
            </Card.Body>
            <Card.Footer className="text-muted">{formatDate()}</Card.Footer>
            <Link to={`/news/${news._id}`}>Details</Link>
        </Card>

    );
}

export default VerticalCard;
