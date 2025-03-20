// import React from "react";
// import { NavLink } from "react-router-dom";
// import "./Header.css";

// function Header() {
//   return (
//     <nav>
//       <ul>
//         <li>
//           <NavLink to="/" className={({ isActive }) => (isActive ? "nav-link active" : "nav-link")}>
//             Home
//           </NavLink>
//         </li>
//         <li>
//           <NavLink to="/register" className={({ isActive }) => (isActive ? "nav-link active" : "nav-link")}>
//             Register
//           </NavLink>
//         </li>
//         <li>
//           <NavLink to="/login" className={({ isActive }) => (isActive ? "nav-link active" : "nav-link")}>
//             Login
//           </NavLink>
//         </li>
//       </ul>
//     </nav>
//   );
// }

// export default Header;


import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import React from "react";
import "./Header.css";
import { Link } from 'react-router-dom';

  export const Header = () => {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container fluid>
   
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link as={Link} to="/">Home</Nav.Link>
            <Nav.Link as={Link} to="/register">Register </Nav.Link>
            <Nav.Link as={Link} to="/login">Login </Nav.Link>
            

          </Nav>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success">Search</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;