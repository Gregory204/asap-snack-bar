// src/components/Hero.js
// this is our big welcome section that hits you right when you land on the page
// it's got our main tagline and a big call-to-action button
import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

function Hero() {
  return (
    <section id="home" className="hero">
      <Container>
        <Row>
          {/* we're using a smaller column width to keep the text nice and readable */}
          <Col md={8} lg={6}>
            <div className="hero-content">
              {/* our main headline that tells people what we're all about */}
              <h1>Dominican-Inspired Spanish Food</h1>
              {/* a quick description that gets people excited about our food */}
              <p>Get ready for a taste of Dominican flavor that's rápido y delicioso! Experience the best authentic food in the Bronx.</p>
              {/* the big button that gets people to start ordering */}
              <button className="hero-btn">ORDER NOW</button>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default Hero;