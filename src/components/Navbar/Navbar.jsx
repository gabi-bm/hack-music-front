import React from "react";
import { Navbar, NavDropdown, Nav, Container, Badge } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import "./Navbar.css";
import { Link } from "react-router-dom";
import * as FaIcons from "react-icons/fa";

const NavBar = () => {
  const { user, cart } = useSelector((state) => state);

  return (
    <Navbar collapseOnSelect expand="lg" variant="dark" className="p-0" id="navbar">
      <Container fluid>
        <Navbar.Brand>
          <Link to="/" style={{ color: "var(--fourth-color)" }}>
            <span className="pe-2">HackMusic</span>
            <FaIcons.FaHeadphonesAlt className="icon-size-logo" />
          </Link>
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav>
            <Nav.Link as={Link} to="/">
              HOME
            </Nav.Link>

            <NavDropdown title="CATEGORIES" id="categories-dropdown">
              <NavDropdown.Item as={Link} to="/category/drums-and-percussion">
                Drums & Percussion
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item as={Link} to="/category/guitar-and-bass">
                Guitar & Bass
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item as={Link} to="/category/wind-instruments">
                Wind Instruments
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item as={Link} to="/category/keyboards-and-pianos">
                Keyboard & Pianos
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item as={Link} to="/category/accessories">
                Accessories
              </NavDropdown.Item>
            </NavDropdown>

            <Nav.Link as={Link} to="/about-us">
              ABOUT US
            </Nav.Link>

            <Nav.Link as={Link} to="/dashboard">
              DASHBOARD
            </Nav.Link>

            <Nav.Link as={Link} to="/cart">
              <div style={{ position: "relative" }}>
                <FaIcons.FaShoppingCart className="icon-size" style={{ transform: "scale(1.5)" }} />
                <Badge pill bg="danger">
                  {cart.totalQuantity < 10 ? cart.totalQuantity : "+9"}
                </Badge>
              </div>
            </Nav.Link>

            <NavDropdown
              title={
                <span>
                  {user.firstName && <span className="pe-3">Hello, {user.firstName}!</span>}
                  <span>
                    <FaIcons.FaUserAlt style={{ transform: "scale(1.5)", paddingBottom: "2px" }} />
                  </span>
                </span>
              }
            >
              {user.firstName ? (
                <>
                  <NavDropdown.Item as={Link} to="/user-profile">
                    Profile
                  </NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item as={Link} to="/logout">
                    Logout
                  </NavDropdown.Item>
                </>
              ) : (
                <>
                  <NavDropdown.Item as={Link} to="/register">
                    Register
                  </NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item as={Link} to="/login">
                    Login
                  </NavDropdown.Item>
                </>
              )}
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
export default NavBar;
