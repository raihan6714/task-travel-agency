import React from "react";
import { Button, Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import useFirebase from "../../../hooks/useFirebae";

const Header = () => {
  const { users, logout } = useFirebase();
  return (
    <>
      <Navbar
        collapseOnSelect
        expand="lg"
        bg="dark"
        variant="dark"
        sticky="top"
        height="300vh"
      >
        <Container>
          <Navbar.Brand href="#home">
            <img
              src="img/logo.svg"
              width="150"
              height="36"
              className="d-inline-block align-top"
              alt="React Bootstrap logo"
            />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link to="/home">Home</Nav.Link>
              <Nav.Link to="/tours">Tours</Nav.Link>
              <Nav.Link to="/hotels">Hotels</Nav.Link>
              <Nav.Link to="/restaurants">Restaurants</Nav.Link>
              <Nav.Link to="/adventure">Adventure</Nav.Link>
              <Nav.Link to="/about">About</Nav.Link>
            </Nav>
            <Nav>
              {users.email ? (
                <Link to="/">
                  <Button onClick={logout} className="btn btn-danger">
                    Logout
                  </Button>
                </Link>
              ) : (
                <Link to="/login">
                  <Button className="btn btn-warning">Login</Button>
                </Link>
              )}
              <Nav.Link to="/dashboard">
                <Button variant="warning">Adimn Panel</Button>{" "}
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default Header;
