import React, { useState } from 'react';
import './LoginRegister.css';
import { FaUser, FaLock, FaEnvelope } from 'react-icons/fa';

const LoginRegister = () => {
  const [isLogin, setIsLogin] = useState(true);

  const registerLink = () => {
    setIsLogin(false);
  };

  const loginLink = () => {
    setIsLogin(true);
  };

  const handleLoginSubmit = (e) => {
    e.preventDefault();
    // Handle login logic
  };

  const handleRegisterSubmit = (e) => {
    e.preventDefault();
    // Handle registration logic
  };

  return (
    <div className={`wrapper ${isLogin ? '' : 'active'}`}>
      {isLogin ? (
        <div className="form-box login">
          <form onSubmit={handleLoginSubmit}>
            <h1>Login</h1>
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
