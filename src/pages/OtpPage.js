import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './OtpPage.css';

const OtpPage = () => {
  const [otp, setOtp] = useState('');
  const [counter, setCounter] = useState(30);
  const navigate = useNavigate();

  useEffect(() => {
    const timer =
      counter > 0 && setInterval(() => setCounter(counter - 1), 1000);
    return () => clearInterval(timer);
  }, [counter]);

  const handleValidate = () => {
    if (otp.trim().length === 6) {
      // Replace with your own validation logic
      console.log("OTP Verified");
      navigate('/dashboard'); // example redirect
    } else {
      alert("Please enter a valid 6-digit OTP.");
    }
  };

  return (
    <div className="otp-page">
      <h2 className="title">Analytics Dashboard</h2>
      <div className="otp-container">
        <div className="otp-box">
          <p className="instruction">Enter Otp sent to Email</p>
          <input
            type="text"
            placeholder="OTP"
            value={otp}
            onChange={(e) => setOtp(e.target.value)}
            maxLength="6"
          />
          <p className="resend-text">resend otp <span>{counter} sec</span></p>
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
