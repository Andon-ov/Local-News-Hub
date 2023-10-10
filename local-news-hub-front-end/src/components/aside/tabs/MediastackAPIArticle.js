import React from "react";
// import '../../main/main/VerticalCard.css';
import "./TabsCard.css";
import { formatDate } from "../../../services/dateService";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";

const MediastackAPIArticle = ({ article }) => {
  // const { author, category, country, description, image, language, published_at, source, title, url } = article
  const { published_at, title, url } = article;

  // const urlToImage = (
  //   <div className="horizontalCardImg__wrapper">
  //     <Card.Img className="horizontalCardImg" src={image} />
  //   </div>
  // );
  return (
    <Card className="horizontalCard">
      <Link to={url} target="_blank">
        {/* image */}
        {/* {image ? urlToImage : ""} */}
      </Link>

      <Link to={url} target="_blank">
        <Card.Body>
          <Card.Title className="horizontalCard__title">{title}</Card.Title>

          <Card.Text className="horizontalCard__date">
            {formatDate(published_at)}
          </Card.Text>
          {/* description */}
          {/* <Card.Text className="horizontalCard__description" >{description}</Card.Text> */}
        </Card.Body>
      </Link>
    </Card>
  );
};
export default MediastackAPIArticle;
