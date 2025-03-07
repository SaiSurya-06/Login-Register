// Cart.jsx
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useCart } from '../../Context/CartContext';
import './Cart.css';

const Cart = () => {
  const navigate = useNavigate();
  const { cart } = useCart();

  const goBackToShop = () => {
    navigate('/shop');
  };

  return (
    <div className="cart-container">
      <header className="cart-header">
        <h1 className="cart-title">Your Cart</h1>
        <button className="back-btn" onClick={goBackToShop}>
          Back to Shop
        </button>
      </header>
      <main className="cart-main">
        {cart.length === 0 ? (
          <p className="empty-cart">Your cart is empty.</p>
        ) : (
          <div className="cart-items">
            {cart.map((item) => (
              <div key={item.id} className="cart-item">
                <img src={item.thumbnail} alt={item.title} className="cart-item-image" />
                <div className="cart-item-info">
                  <h3 className="cart-item-title">{item.title}</h3>
                  <p className="cart-item-price">${item.price.toFixed(2)}</p>
                  <p className="cart-item-quantity">Quantity: {item.quantity}</p>
                  <p className="cart-item-total">
                    Total: ${(item.price * item.quantity).toFixed(2)}
                  </p>
                </div>
              </div>
            ))}
            <div className="cart-summary">
              <h2>
                Grand Total: $
                {cart.reduce((sum, item) => sum + item.price * item.quantity, 0).toFixed(2)}
              </h2>
            </div>
          </div>
        )}
      </main>
    </div>
  );
};

export default Cart;