import Nav from 'react-bootstrap/Nav';

function Tabs() {
  return (
    <Nav variant="tabs" defaultActiveKey="/home" fill>
      <Nav.Item>
        <Nav.Link href="/home">Active</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="link-1">Option 2</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="disabled" disabled>
          Disabled
        </Nav.Link>
      </Nav.Item>
    </Nav>
  );
}

export default Tabs;



// import React from 'react';
// import { BrowserRouter as Router, Routes, Route, Link, Outlet } from 'react-router-dom';
// import { Nav } from 'react-bootstrap';

// const Jambol = () => <h2>Jambol</h2>;
// const Sliven = () => <h2>Sliven</h2>;
// const Other = () => <h2>Other</h2>;

// const NavTabs = () => {
//   return (
//     <Router>
//       <Nav variant="tabs" defaultActiveKey="/" className="mb-3">
//         <Nav.Item>
//           <Nav.Link as={Link} to="/" eventKey="/">Home</Nav.Link>
//         </Nav.Item>
//         <Nav.Item>
//           <Nav.Link as={Link} to="/about" eventKey="/about">About</Nav.Link>
//         </Nav.Item>
//         <Nav.Item>
//           <Nav.Link as={Link} to="/contact" eventKey="/contact">Contact</Nav.Link>
//         </Nav.Item>
//       </Nav>

//       <Routes>
//         <Route path="/" element={<Home />} />
//         <Route path="/about" element={<About />} />
//         <Route path="/contact" element={<Contact />} />
//       </Routes>
//     </Router>
//   );
// };

// export default NavTabs;