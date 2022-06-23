import React from "react";
import { Navbar, NavDropdown, Nav, Container } from "react-bootstrap";
import "./Navbar.css";

const NavBar = () => {
  return (
    <Navbar className="custom-navbar" expand="lg" variant="dark">
      <Container>
        <div className="div-flex">
          <div className="div-logo">
            <Navbar.Brand className="tx-color-logo" href="/">
              HackMusic
            </Navbar.Brand>
            <div className="vr"></div>
          </div>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link className="tx-color-navbar" href="/">
                Home
              </Nav.Link>
              <div className="vr"></div>
              <NavDropdown className="tx-color-navbar" title="Categories" id="basic-nav-dropdown">
                <NavDropdown.Item href="/category">Wind </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="/category">Percussion</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="/category">String</NavDropdown.Item>
              </NavDropdown>
              <div className="vr"></div>
              <Nav.Link className="tx-color-navbar" href="/aboutus">
                About us
              </Nav.Link>
              <div className="vr"></div>
              <Nav.Link className="tx-color-navbar" href="#link">
                Cart
              </Nav.Link>
              <div className="vr"></div>
              <Nav.Link className="tx-color-navbar" href="#link">
                Dash
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </div>
      </Container>
    </Navbar>
  );
};
export default NavBar;
