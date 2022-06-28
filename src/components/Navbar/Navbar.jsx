import React from "react";
import { Navbar, NavDropdown, Nav, Container } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import "./Navbar.css";
import { Link } from "react-router-dom";
import * as FaIcons from "react-icons/fa";

const NavBar = () => {
  const user = useSelector((state) => state.user);

  return (
    <Navbar className="custom-navbar py-0 " expand="lg" variant="dark">
      <div className="div-flex h-100 w-100 ">
        <div className="div-logo bg-third-color h-100">
          <Navbar.Brand
            className="tx-color-logo px-3 h-100 d-flex align-items-center justify-content-center"
            href="/"
          >
            <span className="title-size">HackMusic </span>
            <FaIcons.FaHeadphonesAlt className="icon-size-logo" />
          </Navbar.Brand>
        </div>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse className="h-100 flex-grow-1" id="basic-navbar-nav">
          <Nav className="me-auto h-100">
            <Nav.Link
              as={Link}
              to="/"
              className="tx-color-navbar d-flex align-items-center justify-content-center width-b"
            >
              <span>HOME</span>
            </Nav.Link>
            <NavDropdown
              className="tx-color-navbar d-flex align-items-center justify-content-center width-b"
              title="CATEGORIES"
              id="basic-nav-dropdown"
            >
              <NavDropdown.Item as={Link} to="/category/drums-and-percussion">
                <span>Drums & Percussion</span>
              </NavDropdown.Item>

              <NavDropdown.Divider />
              <NavDropdown.Item as={Link} to="/category/guitar-and-bass">
                <span>Guitar & Bass</span>
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item as={Link} to="/category/wind-instruments">
                <span>Wind instruments</span>
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item as={Link} to="/category/keyboards-and-pianos">
                <span>Keyboard & Pianos</span>
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item as={Link} to="/category/accessories">
                <span>Accessories</span>
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link
              className="tx-color-navbar d-flex align-items-center justify-content-center width-b"
              as={Link}
              to="/about-us"
            >
              <span>ABOUT US</span>
            </Nav.Link>
            <Nav.Link
              className="tx-color-navbar d-flex align-items-center justify-content-center width-b"
              as={Link}
              to="/cart"
            >
              <span>
                <FaIcons.FaShoppingCart className="icon-size" />
              </span>
            </Nav.Link>
            <NavDropdown
              className="tx-color-navbar d-flex align-items-center justify-content-center width-b"
              title={<FaIcons.FaUserAlt className="icon-size" />}
              id="basic-nav-dropdown"
            >
              <NavDropdown.Item as={Link} to="/register">
                <span>Register</span>
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item as={Link} to="/login">
                <span>Login</span>
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item as={Link} to="/logout">
                <span>Logout</span>
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link
              className="tx-color-navbar d-flex align-items-center justify-content-center width-b"
              as={Link}
              to="/dashboard"
            >
              <span>DASHBOARD</span>
            </Nav.Link>

            {user && (
              <Nav.Link className="tx-color-navbar d-flex align-items-center justify-content-center">
                <span className="tx-size-sm">{"Hello, " + user.firstName + "!"}</span>
              </Nav.Link>
            )}
          </Nav>
        </Navbar.Collapse>
      </div>
    </Navbar>
  );
};
export default NavBar;
