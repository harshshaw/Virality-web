import React from 'react';
import { FaTrashAlt } from 'react-icons/fa';
import './Css/Cart.css';

const Cart = ({ cart, removeFromCart }) => {
  // Calculate total price
  const totalPrice = cart.reduce((total, product) => total + product.price, 0);

  return (
    <div className="cart-container">
      <h2>Your Cart</h2>
      {cart.length > 0 ? (
        <>
          {cart.map(product => (
            <div key={product.id} className="cart-item">
              <img src={product.image} alt={product.name} />
              <div className="cart-details">
                <h3>{product.name}</h3>
                <p>${product.price}</p>
                <button onClick={() => removeFromCart(product)}>
                  <FaTrashAlt /> Remove
                </button>
              </div>
            </div>
          ))}
          <div className="cart-total">
            <h3>Total: ${totalPrice.toFixed(2)}</h3>
            <button className="checkout-button">Checkout</button>
          </div>
        </>
      ) : (
        <p>Your cart is empty.</p>
      )}
    </div>
  );
};

export default Cart;
