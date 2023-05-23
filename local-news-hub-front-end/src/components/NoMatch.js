import React from 'react';
import {Button, Col, Container, Row} from 'react-bootstrap';

const NoMatch = () => {
    return (
        <Container className="text-center mt-5">
            <Row>
                <Col>
                    <h1>Oops!</h1>
                    <h2>Page Not Found</h2>
                    <p>The page you are looking for does not exist.</p>
                    <Button variant="dark" href="/">Go Back to Homepage</Button>
                </Col>
            </Row>
        </Container>
    );
};

export default NoMatch;
