// src/components/ShoppingCart.js
// this is our shopping cart that pops up when you click the cart icon
// it shows all the items you've added and lets you adjust quantities or remove stuff
import React from 'react';
import { Modal, Button } from 'react-bootstrap';

// we need a bunch of props to make this work:
// cart: the list of items you've added
// show: whether the cart should be visible
// handleClose: function to close the cart
// removeFromCart: function to take items out
// updateQuantity: function to change how many of each item you want
// clearCart: function to empty the whole cart
function ShoppingCart({ cart, show, handleClose, removeFromCart, updateQuantity, clearCart }) {
  // calculate the total price of everything in your cart
  const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  
  // when you click checkout, we show your total and clear the cart
  const handleCheckout = () => {
    if (cart.length > 0) {
      alert(`Thank you for your order! Your total is $${total.toFixed(2)}`);
      clearCart();
      handleClose();
    } else {
      alert('Your cart is empty. Please add some items first.');
    }
  };

  return (
    <Modal show={show} onHide={handleClose} className="cart-modal" contentClassName="bg-dark text-white">
      {/* the header with the title and close button */}
      <Modal.Header className="cart-header">
        <Modal.Title>Your Cart</Modal.Title>
        <Button variant="link" onClick={handleClose} className="text-white border-0">✕</Button>
      </Modal.Header>
      
      <Modal.Body>
        {/* if your cart is empty, we show a friendly message */}
        {cart.length === 0 ? (
          <div className="text-center py-5 text-muted">
            <p>Your cart is empty</p>
            <p>Add items from the menu to get started</p>
          </div>
        ) : (
          <div>
            {/* map through each item in your cart */}
            {cart.map((item) => (
              <div key={item.id} className="cart-item">
                {/* show the item name and price */}
                <div className="cart-item-info">
                  <div className="cart-item-title">{item.name}</div>
                  <div className="cart-item-price">${item.price.toFixed(2)}</div>
                </div>
                {/* the quantity controls with + and - buttons */}
                <div className="d-flex align-items-center mx-3">
                  <button 
                    className="quantity-btn" 
                    onClick={() => updateQuantity(item.id, -1)}
                  >
                    -
                  </button>
                  <span className="mx-2">{item.quantity}</span>
                  <button 
                    className="quantity-btn" 
                    onClick={() => updateQuantity(item.id, 1)}
                  >
                    +
                  </button>
                </div>
                {/* the remove button to take this item out */}
                <button 
                  className="remove-item" 
                  onClick={() => removeFromCart(item.id)}
                >
                  ✕
                </button>
              </div>
            ))}
          </div>
        )}
      </Modal.Body>
      
      {/* the footer with the total and action buttons */}
      <Modal.Footer className="d-block">
        {/* show the total amount */}
        <div className="cart-total">
          <h3>Total:</h3>
          <div className="cart-total-amount">${total.toFixed(2)}</div>
        </div>
        {/* the checkout button */}
        <Button 
          variant="warning" 
          className="w-100 mb-2 checkout-btn" 
          onClick={handleCheckout}
        >
          Checkout
        </Button>
        {/* the clear cart button */}
        <Button 
          variant="secondary" 
          className="w-100 clear-cart" 
          onClick={clearCart}
        >
          Clear Cart
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default ShoppingCart;