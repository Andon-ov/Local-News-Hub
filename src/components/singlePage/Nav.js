import React from 'react';
import {Link} from 'react-router-dom';
import {Nav, Navbar} from 'react-bootstrap';

const Navigation = () => {

    return (
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" className="navBar">
            <Navbar.Brand as={Link} to="/">My App</Navbar.Brand>
            <p style={{color: 'withe'}}>Here!</p>
            <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="mr-auto">
                    <Nav.Link as={Link} to="/login">Login</Nav.Link>
                    <Nav.Link as={Link} to="/register">Register</Nav.Link>
                    <Nav.Link as={Link} to="/logout">Logout</Nav.Link>
                    {/* Add more Nav.Link components for other navigation items */}
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
};

export default Navigation;


// import Nav from 'react-bootstrap/Nav';
// import Navbar from 'react-bootstrap/Navbar';
// import NavDropdown from 'react-bootstrap/NavDropdown';
// import { Link } from 'react-router-dom';

// function HeaderNav() {
//   return (
//     <Navbar bg="dark" variant="dark" expand="lg" className="navBar">
//       <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
//       <Navbar.Toggle aria-controls="basic-navbar-nav" />
//       <Navbar.Collapse id="basic-navbar-nav">
//         <Nav className="me-auto">
//           <Nav.Link href="#home">Home</Nav.Link>
//           {/* <Nav.Link to="/login" as={Link} >Login</Nav.Link> */}

//           <NavDropdown title="Dropdown" id="basic-nav-dropdown">
//             <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
//             <NavDropdown.Item href="#action/3.2">
//               Another action
//             </NavDropdown.Item>
//             <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
//             <NavDropdown.Divider />
//             <NavDropdown.Item href="#action/3.4">
//               Separated link
//             </NavDropdown.Item>
//           </NavDropdown>
//         </Nav>
//       </Navbar.Collapse>
//     </Navbar>
//   );
// }

// export default HeaderNav;