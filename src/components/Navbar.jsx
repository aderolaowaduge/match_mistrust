// src/components/Navbar.jsx
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './Navbar.css';
import logo from '../assets/img/med-mistrust-logo.png'


function Navigation() {
  return (
    <div>
      <Navbar expand="lg" className="bg-body-tertiary fixed-top navbar-custom">
        <Container fluid>
          <Navbar.Brand href="/">
            <img
              src={logo}
              alt="Medical Mistrust Logo"
              height="50"
              className="d-inline-block align-center"
            /> 
            Overcoming Medical Mistrust
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link href="/">Home</Nav.Link>
              <Nav.Link href="/research">Research</Nav.Link>
              <Nav.Link href="/match-of-mistrust">Match of Mistrust</Nav.Link>
              <Nav.Link href="/about">About</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}

export default Navigation;
