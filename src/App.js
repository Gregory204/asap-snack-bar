import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import Header from './components/Header';
import Hero from './components/Hero';
import Menu from './components/Menu';
import About from './components/About';
import Gallery from './components/Gallery';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ShoppingCart from './components/ShoppingCart';

function App() {
  const [cart, setCart] = useState([]);
  const [showCart, setShowCart] = useState(false);

  // Add to cart function
  const addToCart = (item) => {
    const existingItem = cart.find(cartItem => cartItem.id === item.id);
    
    if (existingItem) {
      setCart(cart.map(cartItem => 
        cartItem.id === item.id 
          ? { ...cartItem, quantity: cartItem.quantity + 1 } 
          : cartItem
      ));
    } else {
      setCart([...cart, { ...item, quantity: 1 }]);
    }
  };

  // Remove from cart
  const removeFromCart = (id) => {
    setCart(cart.filter(item => item.id !== id));
  };

  // Update quantity
  const updateQuantity = (id, change) => {
    setCart(cart.map(item => {
      if (item.id === id) {
        const newQuantity = item.quantity + change;
        return newQuantity > 0 ? { ...item, quantity: newQuantity } : null;
      }
      return item;
    }).filter(Boolean));
  };

  // Clear cart
  const clearCart = () => {
    setCart([]);
  };

  // Toggle cart visibility
  const toggleCart = () => {
    setShowCart(!showCart);
  };

  return (
    <div className="App">
      <Header 
        cartCount={cart.reduce((total, item) => total + item.quantity, 0)} 
        toggleCart={toggleCart} 
      />
      
      <ShoppingCart 
        cart={cart} 
        show={showCart} 
        handleClose={() => setShowCart(false)}
        removeFromCart={removeFromCart}
        updateQuantity={updateQuantity}
        clearCart={clearCart}
      />
      
      <main>
        <Hero />
        <Menu addToCart={addToCart} />
        <About />
        <Contact />
      </main>
      
      <Footer />
    </div>
  );
}

export default App;