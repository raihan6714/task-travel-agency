import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <>
      {/* <header className="header menu_fixed">
        <div id="preloader">
          <div data-loader="circle-side"></div>
        </div>
        <div id="logo">
          <Link to="/home">
            <img
              src="img/logo.svg"
              width="150"
              height="36"
              alt=""
              className="logo_normal"
            />
            <img
              src="img/logo_sticky.svg"
              width="150"
              height="36"
              alt=""
              className="logo_sticky"
            />
          </Link>
        </div>
        <ul id="top_menu">
          <li>
            <Link to="/cart" className="cart-menu-btn" title="Cart">
              <strong>4</strong>
            </Link>
          </li>
          <li>
            <Link to="/singIn" id="sign-in" className="login" title="Sign In">
              Sign In
            </Link>
          </li>
          <li>
            <Link
              to="/wishList"
              className="wishlist_bt_top"
              title="Your wishlist"
            >
              Your wishlist
            </Link>
          </li>
        </ul>
        <Link to="#menu" className="btn_mobile">
          <div className="hamburger hamburger--spin" id="hamburger">
            <div className="hamburger-box">
              <div className="hamburger-inner"></div>
            </div>
          </div>
        </Link>
        <nav id="menu" className="main-menu">
          <ul>
            <li>
              <span>
                <Link to="/home" className="text-decoration-none">
                  Home
                </Link>
              </span>
            </li>
            <li>
              <span>
                <Link to="" className="text-decoration-none">
                  Tours
                </Link>
              </span>
              <ul>
                <li>
                  <Link to="/tours" className="text-decoration-none">
                    Tours Grid Isotope
                  </Link>
                </li>
                <li>
                  <Link to="/toursDetails" className="text-decoration-none">
                    Tour Detail
                  </Link>
                </li>
              </ul>
            </li>
            <li>
              <span>
                <Link to="#0" className="text-decoration-none">
                  Hotels
                </Link>
              </span>
              <ul>
                <li>
                  <Link to="/hotels" className="text-decoration-none">
                    Hotel Grid Isotope
                  </Link>
                </li>
                <li>
                  <Link to="/hotelDetails" className="text-decoration-none">
                    Hotel Detail
                  </Link>
                </li>
              </ul>
            </li>
            <li>
              <span>
                <Link to="#0" className="text-decoration-none">
                  Eat &amp; Drink
                </Link>
              </span>
              <ul>
                <li>
                  <Link to="/restaurants" className="text-decoration-none">
                    Restaurant Grid Isotope
                  </Link>
                </li>
                <li>
                  <Link to="/restaurantDetail" className="text-decoration-none">
                    Restaurant Detail
                  </Link>
                </li>
              </ul>
            </li>
            <li>
              <span>
                <Link to="/adventure" className="text-decoration-none">
                  Adventure
                </Link>
              </span>
            </li>
            <li>
              <span>
                <Link to="/pages" className="text-decoration-none">
                  Pages
                </Link>
              </span>
              <ul>
                <li>
                  <Link
                    to="admin_section/index.html"
                    className="text-decoration-none"
                    target="_blank"
                  >
                    Admin Section
                  </Link>
                </li>
                <li>
                  <Link to="/about" className="text-decoration-none">
                    About
                  </Link>
                </li>
                <li>
                  <Link to="/mediaGallery" className="text-decoration-none">
                    Media gallery
                  </Link>
                </li>
                <li>
                  <Link to="/help" className="text-decoration-none">
                    Help Section
                  </Link>
                </li>
                <li>
                  <Link to="/faq" className="text-decoration-none">
                    Faq Section
                  </Link>
                </li>
                <li>
                  <Link to="/wishlist" className="text-decoration-none">
                    Wishlist page
                  </Link>
                </li>
                <li>
                  <Link to="/contacts" className="text-decoration-none">
                    Contacts
                  </Link>
                </li>
                <li>
                  <Link to="/login" className="text-decoration-none">
                    Login
                  </Link>
                </li>
                <li>
                  <Link to="/register" className="text-decoration-none">
                    Register
                  </Link>
                </li>
                <li>
                  <Link to="/blog" className="text-decoration-none">
                    Blog
                  </Link>
                </li>
                <li>
                  <Link to="/payment" className="text-decoration-none">
                    Payment{" "}
                  </Link>
                </li>
              </ul>
            </li>
            <li>
              <span>
                <Link to="#0" className="text-decoration-none">
                  Extra
                </Link>
              </span>
              <ul>
                <li>
                  <Link
                    to="/invoice"
                    className="text-decoration-none"
                    target="_blank"
                  >
                    Invoice
                  </Link>
                </li>
              </ul>
            </li>
            <li>
              <span>
                <Link to="/login" className="text-decoration-none">
                  Login
                </Link>
              </span>
            </li>
          </ul>
        </nav>
      </header> */}
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
              <Nav.Link href="#features">Features</Nav.Link>
              <Nav.Link href="#pricing">Pricing</Nav.Link>
            </Nav>
            <Nav>
              <Nav.Link href="#deets">More deets</Nav.Link>
              <Nav.Link eventKey={2} href="#memes">
                Dank memes
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default Header;
