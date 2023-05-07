import React, {useContext} from 'react';
import {Link} from 'react-router-dom';
import {Nav, Navbar} from 'react-bootstrap';

import {AuthContext} from '../../contexts/AuthContext';

const Navigation = () => {
    let {user} = useContext(AuthContext);

    return (<Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" className="navBar">
        <Navbar.Brand as={Link} to="/">My App</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
        <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mr-auto">
                <Nav.Link as={Link} to="/login">Login</Nav.Link>
                <Nav.Link as={Link} to="/register">Register</Nav.Link>
                <Nav.Link as={Link} to="/logout">Logout</Nav.Link>
                {/* Add more Nav.Link components for other navigation items */}
            </Nav>
            <Navbar.Text style={{color: 'white'}}>Welcome {user.email}!</Navbar.Text>
        </Navbar.Collapse>
    </Navbar>);
};

export default Navigation;
