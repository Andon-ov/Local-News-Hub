import React from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

const NoMatch = () => {
  return (
    <Container className="text-center mt-5">
      <Row>
        <Col>
          {/* <h1>Oops!</h1>
          <h2>Page Not Found</h2>
          <p>The page you are looking for does not exist.</p>
          <Button variant="dark" href="/">
            Go Back to Homepage
          </Button> */}

          <h1>Упс!</h1>
          <h2>Страницата не е намерена</h2>
          <p>Страницата, която търсите, не съществува.</p>
          <br />

          <Button>
            <Link className="nav-link" to="/">
              Върнете се към началната страница
            </Link>
          </Button>
        </Col>
      </Row>
    </Container>
  );
};

export default NoMatch;
