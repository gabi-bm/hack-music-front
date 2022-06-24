import React from "react";
import { Navbar, NavDropdown, Nav, Container } from "react-bootstrap";
import "./Navbar.css";

const NavBar = () => {
  return (
    <Navbar className="custom-navbar py-0" expand="lg" variant="dark">
      <div className="div-flex h-100">
        <div className="div-logo bg-third-color h-100">
          <Navbar.Brand className="tx-color-logo px-3 h-100 d-flex align-items-center" href="/">
            <span>HackMusic</span>
          </Navbar.Brand>
        </div>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse className="h-100" id="basic-navbar-nav">
          <Nav className="me-auto h-100">
            <Nav.Link className="tx-color-navbar d-flex align-items-center px-4" href="/">
              <span>HOME</span>
            </Nav.Link>
            <div className="vr"></div>
            <NavDropdown
              className="tx-color-navbar d-flex align-items-center px-4"
              title="CATEGORIES"
              id="basic-nav-dropdown"
            >
              <NavDropdown.Item href="/category/drums-and-percussion">
                Drums & Percussion{" "}
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="/category/guitar-and-bass/">Guitar & Bass</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="/category/wind-instruments">
                Wind instruments
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="/category/keyboards-and-pianos">
                Keyboard & Pianos
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="/category/accessories">Accessories</NavDropdown.Item>
            </NavDropdown>
            <div className="vr"></div>
            <Nav.Link className="tx-color-navbar d-flex align-items-center px-4" href="/aboutus">
              <span>ABOUT US</span>
            </Nav.Link>
            <div className="vr"></div>
            <Nav.Link className="tx-color-navbar d-flex align-items-center px-4" href="#link">
              <span>CART</span>
            </Nav.Link>
            <div className="vr"></div>
            <Nav.Link className="tx-color-navbar d-flex align-items-center px-4" href="#link">
              <span>DASHBOARD</span>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </div>
    </Navbar>
  );
};
export default NavBar;
