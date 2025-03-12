// App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { CartProvider } from './Context/CartContext';
import LoginRegister from './Components/Pages/LoginRegister';
import Shop from './Components/Pages/Shop';
import Cart from './Components/Pages/Cart';

function App() {
  return (
    <CartProvider>
      <Router>
        <Routes>
          <Route path="/" element={<LoginRegister />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </Router>
    </CartProvider>
  );
}

export default App;