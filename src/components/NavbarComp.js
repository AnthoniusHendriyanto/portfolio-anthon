import React, { Component } from "react";
import { Container, Nav, Navbar} from "react-bootstrap";

export default class NavbarComp extends Component {
  render() {
    return (
      <div>
        <Navbar bg="dark" variant="dark" expand={'sm'}>
          <Container>
            <Navbar.Brand href="/">Portfolio Anthon</Navbar.Brand>
            <Navbar.Toggle aria-controls="offcanvasNavbar" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="me-auto">
                <Nav.Link href="#home">Home</Nav.Link>
                <Nav.Link href="#experience">Experience</Nav.Link>
                <Nav.Link href="#contact">Contact</Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </div>
    );
  }
}
