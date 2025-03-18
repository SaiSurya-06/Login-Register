import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { removeFromCart, clearCart, increaseQuantity, decreaseQuantity } from '../../store/cartSlice';
import '../../Assets/Style/Cart.css';

const Cart = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart);

  const goBackToShop = () => navigate('/shop');

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
          <div className="empty-cart">
            <p>Your cart is empty.</p>
            <button onClick={goBackToShop} className="shop-now-btn">
              Shop Now
            </button>
          </div>
        ) : (
          <div className="cart-items">
            {cart.map((item) => (
              <div key={item.id} className="cart-item">
                <img src={item.thumbnail} alt={item.title} className="cart-item-image" />
                <div className="cart-item-info">
                  <h3 className="cart-item-title">{item.title}</h3>
                  <p className="cart-item-price">${item.price.toFixed(2)}</p>
                  <div className="quantity-controls">
                    <button onClick={() => dispatch(decreaseQuantity(item.id))} className="quantity-btn">-</button>
                    <span className="quantity">{item.quantity}</span>
                    <button onClick={() => dispatch(increaseQuantity(item.id))} className="quantity-btn">+</button>
                  </div>
                  <p className="cart-item-total">Total: ${(item.price * item.quantity).toFixed(2)}</p>
                  <button onClick={() => dispatch(removeFromCart(item.id))} className="remove-btn">
                    Remove
                  </button>
                </div>
              </div>
            ))}
            <div className="cart-summary">
              <h2>Grand Total: ${cart.reduce((sum, item) => sum + item.price * item.quantity, 0).toFixed(2)}</h2>
              <div className="summary-buttons">
                <button onClick={() => dispatch(clearCart())} className="clear-cart-btn">Clear Cart</button>
                <button onClick={() => navigate('/checkout')} className="checkout-btn">Checkout</button>
              </div>
            </div>
          </div>
        )}
      </main>
    </div>
  );
};

export default Cart;