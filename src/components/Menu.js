// src/components/Menu.js
// this is where we show off all our delicious food items
// each item has a picture, description, price, and a button to add it to your cart
import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

// we need the addToCart function from the parent to handle adding items to your cart
function Menu({ addToCart }) {
  // here's all our menu items with their details
  // we keep them in an array so we can easily map through them
  const menuItems = [
    {
      id: "1",
      name: "Chimmi Sandwhich",
      description: "Our signature burger with special sauce",
      price: 10.99,
      image: "images/burger.jpeg"
    },
    {
      id: "2",
      name: "Protein Bowl",
      description: "Grilled chicken, avocado, vegetables",
      price: 12.99,
      image: "images/protien.jpeg"
    },
    {
      id: "3",
      name: "Combo Platter",
      description: "Mixed proteins with fries and plantains",
      price: 15.99,
      image: "images/plantains.jpeg"
    },
    {
      id: "4",
      name: "Mangu con Los Tres Golpes",
      description: "Mashed plantains with eggs, cheese, and salami",
      price: 12.99,
      image: "images/mangu.jpeg"
    },
    {
      id: "5",
      name: "Empanadas",
      description: "Choice of beef, chicken, or cheese",
      price: 3.99,
      image: "images/empandas.jpeg"
    },
    {
      id: "6",
      name: "Morir Soñando",
      description: "Orange juice and milk drink",
      price: 4.99,
      image: "images/morirsonando.jpeg"
    }
  ];

  return (
    <section id="menu" className="section">
      <Container>
        {/* the title section that introduces our menu */}
        <div className="section-title">
          <h2>Our Menu</h2>
          <p>Authentic Dominican-inspired Spanish cuisine</p>
        </div>
        
        <Row>
          {/* we map through each menu item to create a card for it */}
          {menuItems.map(item => (
            <Col md={6} lg={4} key={item.id}>
              <div className="menu-item">
                {/* the food image */}
                <img src={item.image} alt={item.name} />
                <div className="menu-item-content">
                  {/* the name and description of the dish */}
                  <h3>{item.name}</h3>
                  <p>{item.description}</p>
                  {/* showing the price with 2 decimal places */}
                  <div className="menu-price">${item.price.toFixed(2)}</div>
                  {/* when you click this button, it adds the item to your cart
                      and shows a quick "Added!" message before going back to normal */}
                  <button 
                    className="add-to-cart" 
                    onClick={() => {
                      addToCart(item);
                      const btn = document.activeElement;
                      btn.textContent = "Added!";
                      setTimeout(() => {
                        btn.textContent = "Add to Cart";
                      }, 1000);
                    }}
                  >
                    Add to Cart
                  </button>
                </div>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
}

export default Menu;