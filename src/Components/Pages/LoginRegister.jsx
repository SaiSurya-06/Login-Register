/* eslint-disable jsx-a11y/anchor-is-valid */
// LoginRegister.jsx
import React, { useState } from 'react';
import '../../Assets/Style/LoginRegister.css';
import { FaUser, FaLock, FaEnvelope } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

const LoginRegister = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const registerLink = () => {
    setIsLogin(false);
    setError('');
  };

  const loginLink = () => {
    setIsLogin(true);
    setError('');
  };

  const validateEmail = (email) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
  };

  const validatePassword = (password) => {
    return password.length >= 6;
  };

  const handleLoginSubmit = (e) => {
    e.preventDefault();
    const username = e.target[0].value;
    const password = e.target[1].value;

    const storedUser = JSON.parse(localStorage.getItem('user'));

    if (storedUser && storedUser.username === username && storedUser.password === password) {
      localStorage.setItem('isLoggedIn', true);
      navigate('/shop');
    } else {
      setError('Invalid credentials');
    }
  };

  const handleRegisterSubmit = (e) => {
    e.preventDefault();
    const username = e.target[0].value;
    const email = e.target[1].value;
    const password = e.target[2].value;

    if (!validateEmail(email)) {
      setError('Please enter a valid email address.');
      return;
    }

    if (!validatePassword(password)) {
      setError('Password must be at least 6 characters long.');
      return;
    }

    const userData = { username, email, password };
    localStorage.setItem('user', JSON.stringify(userData));
    setIsLogin(true);
    setError('Registration successful! Please login.');
  };

  return (
    <div className={`wrapper ${isLogin ? '' : 'active'}`}>
      {isLogin ? (
        <div className="form-box login">
          <form onSubmit={handleLoginSubmit}>
            <h1>Login</h1>
            {error && <p className="error-message">{error}</p>}
            <div className="input-box">
              <input type="text" placeholder="Username" required />
              <FaUser className="icon" />
            </div>
            <div className="input-box">
              <input type="password" placeholder="Password" required />
              <FaLock className="icon" />
            </div>
            <div className="remember-forgot">
              <label>
                <input type="checkbox" /> Remember Me
              </label>
              <a href="#">Forgot Password?</a>
            </div>
            <button type="submit">Login</button>
            <div className="register-link">
              <p>
                Don't have an account?{' '}
                <a href="#" onClick={registerLink}>
                  Register
                </a>
              </p>
            </div>
          </form>
        </div>
      ) : (
        <div className="form-box register">
          <form onSubmit={handleRegisterSubmit}>
            <h1>Registration</h1>
            {error && <p className="error-message">{error}</p>}
            <div className="input-box">
              <input type="text" placeholder="Username" required />
              <FaUser className="icon" />
            </div>
            <div className="input-box">
              <input type="email" placeholder="Email" required />
              <FaEnvelope className="icon" />
            </div>
            <div className="input-box">
              <input type="password" placeholder="Password" required />
              <FaLock className="icon" />
            </div>
            <div className="remember-forgot">
              <label>
                <input type="checkbox" /> I accept terms & conditions
              </label>
            </div>
            <button type="submit">Register</button>
            <div className="register-link">
              <p>
                Already have an account?{' '}
                <a href="#" onClick={loginLink}>
                  Login
                </a>
              </p>
            </div>
          </form>
        </div>
      )}
    </div>
  );
};

export default LoginRegister;