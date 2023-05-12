import './VerticalCard.css';

import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';

function VerticalCard({ news }) {
    function formatDate(date) {
        const daysOfWeek = [
            'Sunday',
            'Monday',
            'Tuesday',
            'Wednesday',
            'Thursday',
            'Friday',
            'Saturday',
        ];
        const monthsOfYear = [
            'January',
            'February',
            'March',
            'April',
            'May',
            'June',
            'July',
            'August',
            'September',
            'October',
            'November',
            'December',
        ];

        const now = new Date();
        const dateObj = new Date(news.publishedAt);

        if (dateObj.toDateString() === now.toDateString()) {
            return 'today';
        } else {
            let dateString = news.publishedAt;
            let dateObj = new Date(dateString);

            let dayOfWeek = daysOfWeek[dateObj.getDay()];
            let month = monthsOfYear[dateObj.getMonth()];
            let day = dateObj.getDate();
            let year = dateObj.getFullYear();

            let formattedDate = `${dayOfWeek}, ${day} ${month} ${year}`;
            return formattedDate;
        }
    }

    return (

        <Card className='verticalCard' >
            <Link to={`/news/${news._id}`}>
                <Card.Img
                    // variant="top"
                    className="verticalCardImg"
                    src={news.urlToImage}
                />
            </Link>
            <Link to={`/news/${news._id}`}>
                <Card.Body>
                    <Card.Title >
                        {news.title}
                    </Card.Title>
                </Card.Body>

                <Card.Text>
                    {
                        // <Badge className="horizontalCard__badge" >{formatDate()}</Badge>
                        <p className="horizontalCard__date">{formatDate()}</p>
                    }
                </Card.Text>

            </Link>
        </Card>

    );
}

export default VerticalCard;
