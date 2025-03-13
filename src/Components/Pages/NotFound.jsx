// NotFound.jsx
import React from 'react';
import { useNavigate } from 'react-router-dom';

const NotFound = () => {
  const navigate = useNavigate();

  return (
    <div className="not-found">
      <h1>404 - Page Not Found</h1>
      <p>The page you are looking for does not exist.</p>
      <button onClick={() => navigate('/shop')} className="go-to-shop-btn">
        Go to Shop
      </button>
    </div>
  );
};

export default NotFound;