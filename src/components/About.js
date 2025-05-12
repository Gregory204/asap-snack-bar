// src/components/About.js
// this is where we tell our story and show off our restaurant
// it's got a nice image, some text about who we are, and a gallery of photos
import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Gallery from './Gallery';

function About() {
  return (
    <section id="about" className="section about-section">
      <Container>
        {/* the title that introduces our story section */}
        <div className="section-title">
          <h2>Our Story</h2>
          <p>How we became the Bronx's favorite Dominican restaurant</p>
        </div>
        
        <Row className="mb-5">
          {/* a nice picture of our restaurant on the left */}
          <Col md={6} className="about-image">
            <img src="/images/ASAPSnackBAr.png" alt="Restaurant Interior" />
          </Col>
          {/* our story text on the right */}
          <Col md={6} className="about-text">
            <h3>Bringing Dominican Flavors to the Bronx</h3>
            {/* three paragraphs that tell our story:
                1. our mission
                2. our background
                3. what makes us special */}
            <p>ASAP Snack Bar began with a simple mission: to bring the authentic flavors of the Dominican Republic to the Bronx community, served fast without compromising quality.</p>
            <p>Founded by a family with deep roots in Dominican culinary traditions, our restaurant combines time-honored recipes with modern convenience. Every dish we serve captures the essence of Dominican cuisine – bold flavors, fresh ingredients, and the comfort of homestyle cooking.</p>
            <p>What sets us apart is our commitment to maintaining authenticity while ensuring our food is available quickly for our busy customers. Today, we're proud to be a neighborhood favorite, bringing together people from all walks of life over the shared joy of delicious food.</p>
          </Col>
        </Row>
        
        {/* we include a gallery component to show more photos of our place */}
        <Gallery />
      </Container>
    </section>
  );
}

export default About;