// const NavBar = () => {
//   return (
//     <div className="d-flex justify-content-end">
//       <ul className="nav">
//         <li className="nav-item">
//           <a className="nav-link" href="#home">Home</a>
//         </li>
//         <li className="nav-item">
//           <a className="nav-link" href="#about">About Us</a>
//         </li>
//         <li className="nav-item">
//           <a className="nav-link" href="#workouts">Exercises</a>
//         </li>
//         <li className="nav-item">
//           <a className="nav-link" href="#contact fitflex">Contact</a>
//         </li>
//       </ul>
//     </div>
//   );
// };

// export default NavBar;


// NavBar.jsx
import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import './nav.css';
import { Link } from 'react-router-dom';


const NavBar = () => {
  return (
    <Navbar bg="light" expand="lg" className="justify-content-end">
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="m3">
          <Nav.Link as={Link} to="/" className="nav-link-custom">Home</Nav.Link>
          <Nav.Link href="#about" className="nav-link-custom">About Us</Nav.Link>
          <Nav.Link as={Link} to="/login" className="nav-link-custom">Login</Nav.Link>
          <Nav.Link as={Link} to="/signup" className="nav-link-custom">Sign Up</Nav.Link>
          <Nav.Link href="#contact fitflex" className="nav-link-custom">Contact</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default NavBar;

