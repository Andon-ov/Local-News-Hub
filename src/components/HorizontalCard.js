import Badge from 'react-bootstrap/Badge';

function HorizontalCard() {
  return (
    <a
      className="horizontalCard"
      href="https://radio999bg.com/yambol/atraktsii-predizvikatelstva-priklyucheniya-evropeyskata-nosh"
    >
      <img
        src="https://radio999bg.com/images/radio999bg/cache/news/atraktsii-predizvikatelstva-priklyucheniya-evropeyskata-nosht-muzeite-yambol-155x100.jpg"
        alt="Атракции, предизвикателства и приключения в европейската нощ на музеите в Ямбол"
        className="img-responsive center-block img-thumbnail"
      />
      <div className="cardBody">
        <p className="cardText">
          <Badge className="badge" bg="secondary">
            Днес
          </Badge>
          Атракции, предизвикателства и приключения в европейската нощ на
          музеите в Ямбол Атракции, предизвикателства и приключения в
          европейската нощ на музеите в Ямбол
        </p>
      </div>
    </a>
  );
}
export default HorizontalCard;
