// src/components/Contact.js
// this is our contact page where people can find our info and send us messages
// it's got our address, hours, and a contact form
import React, { useState } from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';

function Contact() {
  // we use state to keep track of what people type in the form
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  // this function updates our state whenever someone types in a field
  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData({ ...formData, [id]: value });
  };

  // when someone submits the form, we show a thank you message and clear the form
  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Thank you for your message! We will get back to you A.S.A.P.');
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <section id="contact" className="section">
      <Container>
        {/* the title section for our contact page */}
        <div className="section-title">
          <h2>Contact Us</h2>
          <p>We'd love to hear from you</p>
        </div>
        
        <Row>
          {/* left side: our contact info and hours */}
          <Col lg={6} className="mb-4">
            <div className="contact-info">
              {/* where to find us */}
              <div className="contact-item">
                <h3>Address</h3>
                <p>909 Sheridan Ave, Bronx, NY 10451</p>
              </div>
              {/* how to call us */}
              <div className="contact-item">
                <h3>Phone</h3>
                <p>(917) 920-1449</p>
              </div>
              {/* when we're open */}
              <div className="contact-item">
                <h3>Hours</h3>
                <p>Sunday: 10:00 am - 1:00 am</p>
                <p>Monday - Friday: 7:00 am - 1:00 am</p>
                <p>Saturday: 10:00 am - 1:00 am</p>
              </div>
              {/* placeholder for a map */}
              <div className="contact-map">
                Google Map would display here
              </div>
            </div>
          </Col>
          
          {/* right side: the contact form */}
          <Col lg={6}>
            <div className="contact-form">
              <h3>Send Us a Message</h3>
              <Form onSubmit={handleSubmit}>
                {/* name field */}
                <Form.Group className="mb-3">
                  <Form.Label>Name</Form.Label>
                  <Form.Control 
                    type="text" 
                    id="name" 
                    value={formData.name} 
                    onChange={handleChange} 
                    required 
                  />
                </Form.Group>
                
                {/* email field */}
                <Form.Group className="mb-3">
                  <Form.Label>Email</Form.Label>
                  <Form.Control 
                    type="email" 
                    id="email" 
                    value={formData.email} 
                    onChange={handleChange} 
                    required 
                  />
                </Form.Group>
                
                {/* message field - it's a bigger text area */}
                <Form.Group className="mb-3">
                  <Form.Label>Message</Form.Label>
                  <Form.Control 
                    as="textarea" 
                    rows={5} 
                    id="message" 
                    value={formData.message} 
                    onChange={handleChange} 
                    required 
                  />
                </Form.Group>
                
                {/* the submit button */}
                <Button type="submit" className="submit-btn">
                  Send Message
                </Button>
              </Form>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default Contact;