import React, { Component } from "react";
import { Container, Nav, Navbar } from "react-bootstrap";

export default class NavbarComp extends Component {
  render() {
    return (
      <>
        <Navbar bg="dark" variant="dark" expand={"sm"}>
          {/* Dalam Container Supaya Rapi ga minggir banget. */}
          <Container>
            {/* Untuk Logo */}
            <Navbar.Brand href="/" className="navbar-brand">Portfolio Anthon</Navbar.Brand>
            {/* Toogle Untuk saat di kecilin. */}
            <Navbar.Toggle />
            <Navbar.Collapse>
              <Nav className="offset-md-4">
                <Nav.Link href="#home">Home</Nav.Link>
                <Nav.Link href="#experience">Experience</Nav.Link>
                <Nav.Link href="#contact">Contact</Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </>
    );
  }
}
