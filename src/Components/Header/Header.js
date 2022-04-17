import React from 'react';
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../Firebase.init';
import { signOut } from 'firebase/auth';

const handleSignout= () => {
          signOut(auth)
}
const Header = () => {
          const [user] = useAuthState(auth)
          return (
<div>
 <Navbar collapseOnSelect expand="lg" className="sticky-top" bg="dark" variant="dark" >
  <Container>
  <Navbar.Brand as={Link} to="/">Gym Freak</Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="me-auto">
      <Nav.Link as={Link} to ="/home">Home</Nav.Link>
      <Nav.Link as={Link}to="/blog">Blog</Nav.Link>
      <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
        <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
      </NavDropdown>
    </Nav>
    <Nav>
      <Nav.Link as={Link} to="/about">About</Nav.Link>
      {
                user?
                <button className="btn btn-link text-decoration-none" onClick={handleSignout}>Signout</button>
                :
      <Nav.Link as={Link} to="/login">
        Login
      </Nav.Link>}
    </Nav>
  </Navbar.Collapse>
  </Container>
</Navbar>
    </div>
          );
};

export default Header;