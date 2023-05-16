import './VerticalCard.css';
import { formatDate } from "../../../services/dateService";
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';

function VerticalCard({ news }) {

    return (<Card className="verticalCard">
        <Link to={`/news/${news._id}`}>
            <div className='verticalCardImg__wrapper'>
                <Card.Img
                    className="verticalCardImg"
                    src={news.urlToImage}
                />
            </div>
        </Link>
        <Link to={`/news/${news._id}`}>
            <Card.Text>
                {// <Badge className="horizontalCard__badge" >{formatDate()}</Badge>
                    <p className="verticalCard__date">{formatDate(news.publishedAt)}</p>}
            </Card.Text>
            <Card.Body>
                <Card.Title>{news.title}</Card.Title>
            </Card.Body>

        </Link>
    </Card>);
}

export default VerticalCard;
