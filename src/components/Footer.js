// src/components/Footer.js
// this is our footer that sits at the bottom of every page
// it's got our basic info, contact details, and social media links
import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FaInstagram } from 'react-icons/fa';

function Footer() {
  return (
    <footer>
      <Container>
        <Row>
          {/* left column: our quick intro */}
          <Col md={4} className="mb-4">
            <h3>ASAP Snack Bar</h3>
            <p>Dominican-inspired Spanish food in the Bronx. Fast, fresh, and delicious.</p>
          </Col>
          
          {/* middle column: how to reach us */}
          <Col md={4} className="mb-4">
            <h3>Contact Info</h3>
            <p>909 Sheridan Ave, Bronx, NY 10451</p>
            <p>(917) 920-1449</p>
            <p>somethin@asapsnackbar.com</p>
          </Col>
          
          {/* right column: our social media */}
          <Col md={4} className="mb-4">
            <h3>Follow Us</h3>
            <div className="d-flex">
              {/* our instagram link with a nice icon */}
              <a href="https://www.instagram.com/asapsnackbar?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" className="social-link" target="_blank" rel="noopener noreferrer">
                <FaInstagram />
              </a>
            </div>
          </Col>
        </Row>
        
        {/* the copyright notice at the very bottom */}
        <div className="footer-bottom">
          <p>© 2025 ASAP Snack Bar. All rights reserved.</p>
        </div>
      </Container>
    </footer>
  );
}

export default Footer;