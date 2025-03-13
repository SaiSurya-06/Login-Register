// App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { CartProvider } from './Context/CartContext';
import LoginRegister from './Components/Pages/LoginRegister';
import Shop from './Components/Pages/Shop';
import Cart from './Components/Pages/Cart';
import NotFound from './Components/Pages/NotFound'; // Add a 404 page

const ProtectedRoute = ({ children }) => {
  const isLoggedIn = localStorage.getItem('isLoggedIn');
  return isLoggedIn ? children : <Navigate to="/" />;
};

function App() {
  return (
    <CartProvider>
      <Router>
        <Routes>
          <Route path="/" element={<LoginRegister />} />
          <Route path="/shop" element={<ProtectedRoute><Shop /></ProtectedRoute>} />
          <Route path="/cart" element={<ProtectedRoute><Cart /></ProtectedRoute>} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
    </CartProvider>
  );
}

export default App;