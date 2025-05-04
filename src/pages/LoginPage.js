import React from 'react';
import LoginForm from '../components/LoginForm';
import { useNavigate } from 'react-router-dom';
import './LoginPage.css';

const LoginPage = () => {
  const navigate = useNavigate();

  const handleSendOtp = (email) => {
    if (email && email.includes('@')) {
      console.log("Sending OTP to:", email);
      navigate('/otp');
    } else {
      alert("Please enter a valid email.");
    }
  };

  return (
    <div className="login-page">
      <h2 className="title">Analytics Dashboard</h2>
      <div className="login-container">
        <div className="login-box">
          <LoginForm onSendOtp={handleSendOtp} />
        </div>
        <div className="info-box">
          <p>Web Application with Analytics Dashboard</p>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
