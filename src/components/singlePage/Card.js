
import Card from 'react-bootstrap/Card';

function BasicExample({news}) {
    function formatDate(date) {
        const now = new Date();
        const dateObj = new Date(news.publishedAt);

        if (dateObj.toDateString() === now.toDateString()) {
            return 'today';
        }

        // Add more conditions for displaying other relative date strings, such as "yesterday" or "last week"

        return dateObj.toLocaleDateString();
    }
  return (
      <Card className='card'>
      <Card.Img variant="top" src={news.urlToImage} />
      <Card.Body>
        <Card.Title>{news.title}</Card.Title>
        {/*<Card.Text>*/}
        {/*    {news.description}*/}
        {/*</Card.Text>*/}
      </Card.Body>
      <Card.Footer className="text-muted">{formatDate()}</Card.Footer>
    </Card>
  );
}

export default BasicExample;