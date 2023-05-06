// import Badge from 'react-bootstrap/Badge';

// function HorizontalCard() {
//   return (
//     <a
//       className="horizontalCard"
//       href="https://radio999bg.com/yambol/atraktsii-predizvikatelstva-priklyucheniya-evropeyskata-nosh"
//     >
//       <img
//         src="https://radio999bg.com/images/radio999bg/cache/news/atraktsii-predizvikatelstva-priklyucheniya-evropeyskata-nosht-muzeite-yambol-155x100.jpg"
//         alt="Атракции, предизвикателства и приключения в европейската нощ на музеите в Ямбол"
//         className="img-responsive center-block img-thumbnail"
//       />
//       <div className="cardBody">
//         <p className="cardText">
//           <Badge className="badge" bg="secondary">
//             Днес
//           </Badge>
//           Атракции, предизвикателства и приключения в европейската нощ на
//           музеите в Ямбол Атракции, предизвикателства и приключения в
//           европейската нощ на музеите в Ямбол
//         </p>
//       </div>
//     </a>
//   );
// }

import React from 'react';
import Card from 'react-bootstrap/Card';


const HorizontalCard = ({news}) => {
    return (
        <Card className="horizontalCard"
            //  style={{ width: '18rem' }}
        >
            <Card.Img variant="left" className='horizontalCardImg'
                      src={news.urlToImage}
            />
            <Card.Body>
                <Card.Title>{news.title}</Card.Title>
                <Card.Text>{news.publishedAt}</Card.Text>
            </Card.Body>
        </Card>
    );
};

export default HorizontalCard;