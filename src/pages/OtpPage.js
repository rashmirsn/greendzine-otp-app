import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './OtpPage.css';

const OtpPage = () => {
  const [otp, setOtp] = useState('');
  const [counter, setCounter] = useState(30);
  const [errorMessage, setErrorMessage] = useState('');
  const navigate = useNavigate();

  const correctOtp = '123456'; // Hardcoded valid OTP

  useEffect(() => {
    const timer = counter > 0 && setInterval(() => setCounter(counter - 1), 1000);
    return () => clearInterval(timer);
  }, [counter]);

  const handleValidate = () => {
    if (otp.trim().length !== 6) {
      setErrorMessage('Please enter a valid 6-digit OTP.');
    } else if (otp !== correctOtp) {
      setErrorMessage('Invalid OTP. Please try again.');
    } else {
      setErrorMessage('');
      console.log('OTP Verified');
      navigate('/dashboard');
    }
  };

  return (
    <div className="otp-page">
      <h2 className="title">Analytics Dashboard</h2>
      <div className="otp-container">
        <div className="otp-box">
          <p className="instruction">Enter OTP sent to Email</p>
          <input
            type="text"
            placeholder="OTP"
            value={otp}
            onChange={(e) => setOtp(e.target.value)}
            maxLength="6"
          />
          {/* Show error if OTP is wrong */}
          {errorMessage && (
            <p style={{ color: 'red', marginTop: '5px' }}>{errorMessage}</p>
          )}
          <p className="resend-text">Resend OTP <span>{counter} sec</span></p>
          <button className="validate-btn" onClick={handleValidate}>Validate</button>
        </div>
        <div className="info-box">
          <p>Web Application with Analytics Dashboard</p>
        </div>
      </div>
    </div>
  );
};

export default OtpPage;
