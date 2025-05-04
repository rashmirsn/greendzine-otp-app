import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './VerifyOtpPage.css';  // Import custom CSS file for OTP page styling

const VerifyOtpPage = () => {
  const [otp, setOtp] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (otp === '123456') {  // Sample OTP for demonstration
      navigate('/dashboard');
    } else {
      alert('Invalid OTP. Please try again.');
    }
  };

  return (
    <div className="otp-container">
      <div className="otp-form">
        <h2>Verify OTP</h2>
        <form onSubmit={handleSubmit}>
          <div className="otp-input-group">
            <input
              type="text"
              maxLength="6"
              value={otp}
              onChange={(e) => setOtp(e.target.value)}
              placeholder="Enter OTP"
              required
            />
          </div>
          <button type="submit" className="otp-btn">Verify OTP</button>
        </form>
      </div>
    </div>
  );
};

export default VerifyOtpPage;
