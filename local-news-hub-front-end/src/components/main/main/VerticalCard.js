import './VerticalCard.css';
import { formatDate } from '../../../services/dateService';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';

function VerticalCard({ news }) {

    return (<Card className="verticalCard">
        <Link to={`/news/${news.id}`}>
            <div className='verticalCardImg__wrapper'>
                <Card.Img
                    className="verticalCardImg"
                    src={news.images[0]}
                />
            </div>
        </Link>

        <Link to={`/news/${news.id}`}>
            <Card.Text className="verticalCard__date">
                {formatDate(news.published_at)}
            </Card.Text>
            <Card.Body>
                <Card.Title>{news.title}</Card.Title>
            </Card.Body>

        </Link>
    </Card>);
}

export default VerticalCard;
