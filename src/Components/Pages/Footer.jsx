import React from 'react';
import '../../Assets/Style/Footer.css'; // We'll create this CSS file next

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section">
          <h3>ecom.in</h3>
          <p>Your one-stop shop for everything!</p>
        </div>
        <div className="footer-section">
          <h4>Quick Links</h4>
          <ul>
            <li><a href="/shop">Shop</a></li>
            <li><a href="/cart">Cart</a></li>
            <li><a href="/">Login</a></li>
          </ul>
        </div>
        <div className="footer-section">
          <h4>Contact Us</h4>
          <p>Email: support@ecom.in</p>
          <p>Phone: +1 234-567-890</p>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2025 ecom.in. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;