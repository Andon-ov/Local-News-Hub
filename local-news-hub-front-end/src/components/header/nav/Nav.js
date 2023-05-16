import './Nav.css';
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { Nav } from 'react-bootstrap';

import { AuthContext } from '../../../contexts/AuthContext';

const Navigation = () => {
  const { user } = useContext(AuthContext);

  return (
    <nav className="nav">
      <section className="navBar">
        <Nav.Link className='home' as={Link} to="/">
          Home
        </Nav.Link>
        <Nav.Link as={Link} cla to="/login">
          Login
        </Nav.Link>
        <Nav.Link as={Link} to="/register">
          Register
        </Nav.Link>
        <Nav.Link as={Link} to="/search">
          Search
        </Nav.Link>
        <Nav.Link as={Link} to="/logout">
          Logout
        </Nav.Link>
      </section>
      {user.email !== '' ? (
        <p className="nav__user" >Welcome {user.email}!</p>
      ) : (
        ''
      )}
    </nav>
  );
};

export default Navigation;
