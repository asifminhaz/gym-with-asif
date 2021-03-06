import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
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
  <Navbar.Brand as={Link} to="/">Gym With Asif</Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="me-auto">
      <Nav.Link as={Link} to ="/home">Home</Nav.Link>
      <Nav.Link as={Link}to="/blog">Blog</Nav.Link>
     
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