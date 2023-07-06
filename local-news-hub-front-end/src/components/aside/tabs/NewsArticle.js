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

//   return (
//     <div>
//       <h2>{title}</h2>
//       <p>{description}</p>
//       <p>Author: {author}</p>
//       <p>Published At: {publishedAt}</p>
//       <p>Source: {source.name}</p>
//       <img src={urlToImage} alt={title} />
//       <p>{content}</p>
//       <a href={url} target="_blank" rel="noopener noreferrer">Read More</a>
//     </div>
//   );
// };