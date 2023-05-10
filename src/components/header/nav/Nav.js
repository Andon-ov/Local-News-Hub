import './Nav.css';
import React, { useContext, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Nav, Navbar } from 'react-bootstrap';

import { AuthContext } from '../../../contexts/AuthContext';

const Navigation = () => {
    const { user } = useContext(AuthContext);
    const [sticky, setSticky] = useState(false);
  
    useEffect(() => {
      const handleScroll = () => {
        setSticky(window.scrollY > 200);
      };
  
      window.addEventListener('scroll', handleScroll);
  
      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }, []);

    return (<Navbar  collapseOnSelect expand="lg" bg="light" variant="light" className="navBar sticky-top">
        <Navbar.Brand as={Link} to="/" className='brad'>Local News Hub</Navbar.Brand >
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mr-auto">
                <Nav.Link as={Link} to="/login">Login</Nav.Link>
                <Nav.Link as={Link} to="/register">Register</Nav.Link>
                <Nav.Link as={Link} to="/logout">Logout</Nav.Link>
                <Nav.Link as={Link} to="/search">Search</Nav.Link>
                {/* Add more Nav.Link components for other navigation items */}
            </Nav>

        {user.email !== ''
            ? <Navbar.Text style={{ color: 'black' }}>Welcome {user.email}!</Navbar.Text>
            : ""}
        </Navbar.Collapse>

    </Navbar>);
};

export default Navigation;
