import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store';
import LoginRegister from './Components/Pages/LoginRegister';
import Shop from './Components/Pages/Shop';
import Cart from './Components/Pages/Cart';
import NotFound from './Components/Pages/NotFound';
import Footer from './Components/Pages/Footer';

// Layout component to include Footer
const PageWithFooter = ({ children }) => (
  <div className="app-container">
    {children}
    <Footer />
  </div>
);

const ProtectedRoute = ({ children }) => {
  const isLoggedIn = localStorage.getItem('isLoggedIn');
  return isLoggedIn ? children : <Navigate to="/" />;
};

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Routes>
          {/* LoginRegister page without Footer */}
          <Route path="/" element={<LoginRegister />} />

          {/* Pages with Footer */}
          <Route
            path="/shop"
            element={
              <ProtectedRoute>
                <PageWithFooter>
                  <Shop />
                </PageWithFooter>
              </ProtectedRoute>
            }
          />
          <Route
            path="/cart"
            element={
              <ProtectedRoute>
                <PageWithFooter>
                  <Cart />
                </PageWithFooter>
              </ProtectedRoute>
            }
          />
          <Route
            path="*"
            element={
              <PageWithFooter>
                <NotFound />
              </PageWithFooter>
            }
          />
        </Routes>
      </Router>
    </Provider>
  );
}

export default App;