
import Card from 'react-bootstrap/Card';

function BasicExample() {
  return (
      <Card className='card'>
      <Card.Img variant="top" src="https://radio999bg.com/images/radio999bg/cache/news/ms-otmeni-natsionalnata-zabrana-za-vnos-ukrainski-stoki-960x640.jpg" />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
      </Card.Body>
      <Card.Footer className="text-muted">2 days ago</Card.Footer>
    </Card>
  );
}

export default BasicExample;