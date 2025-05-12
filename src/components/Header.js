// src/components/Header.js
// so basically this is our main navigation bar that sits at the top of every page
// it's got our logo, menu links, and a shopping cart icon that shows how many items you've got
import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { FaShoppingCart } from 'react-icons/fa';

// this component takes two props:
// cartCount: keeps track of how many items are in your cart
// toggleCart: a function that opens/closes the cart when you click the icon
function Header({ cartCount, toggleCart }) {
  return (
    <Navbar bg="dark" variant="dark" expand="lg" fixed="top">
      <Container>
        {/* our brand name that shows up on the left */}
        <Navbar.Brand href="#home" className="logo">ASAP Snack Bar</Navbar.Brand>
        {/* this is the hamburger menu that shows up on mobile */}
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          {/* all our main navigation links */}
          <Nav className="ms-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#menu">Menu</Nav.Link>
            <Nav.Link href="#about">About</Nav.Link>
            <Nav.Link href="#contact">Contact</Nav.Link>
          </Nav>
          {/* the shopping cart icon with a little badge showing your item count */}
          <div className="cart-icon" onClick={toggleCart}>
            <FaShoppingCart />
            <span className="cart-badge">{cartCount}</span>
          </div>
          {/* a big "Order Now" button that stands out */}
          <Nav.Link href="#" className="order-btn ms-3">Order Now</Nav.Link>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;