import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import {LinkContainer} from 'react-router-bootstrap';



export default function NavComp() {
  return (
    <Navbar collapseOnSelect expand="sm" bg="dark" variant="dark">
    <Container>

    <LinkContainer to="/">
      <Navbar.Brand href="#home">Home</Navbar.Brand>
        </LinkContainer>

      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="me-auto">

        <LinkContainer to="user">
          <Nav.Link >User</Nav.Link>
        </LinkContainer>

        <LinkContainer to="Admin">
          <Nav.Link >Admin</Nav.Link>
          </LinkContainer>


        </Nav>
        <Nav>
        <LinkContainer to="Login">
          <Nav.Link >Login</Nav.Link>
          </LinkContainer>

          <LinkContainer to="Register">
          <Nav.Link > Register </Nav.Link>
          </LinkContainer>


        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
  )
}
