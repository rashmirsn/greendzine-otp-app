import React, { useState, useEffect } from 'react';
import './OtpForm.css'; // for OtpForm.css

const OtpForm = ({ onValidate, onResendOtp }) => {
  const [otp, setOtp] = useState('');
  const [timer, setTimer] = useState(30);
  const [isDisabled, setIsDisabled] = useState(false);

  useEffect(() => {
    if (timer === 0) {
      setIsDisabled(false); // Enable resend OTP button when timer reaches 0
    }
    const interval = setInterval(() => {
      setTimer((prev) => (prev > 0 ? prev - 1 : 0));
    }, 1000);
    return () => clearInterval(interval);
  }, [timer]);

  const handleSubmit = (e) => {
    e.preventDefault();
    onValidate(otp);
  };

  const handleResendOtp = () => {
    onResendOtp();  // Resend OTP logic passed from parent component
    setTimer(30);    // Reset timer to 30 seconds
    setIsDisabled(true); // Disable resend OTP button while timer counts down
  };

  return (
    <div className="form-container">
      <h2>Enter Otp sent to Email</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="OTP"
          value={otp}
          onChange={(e) => setOtp(e.target.value)}
          required
        />
        <div className="otp-actions">
          <p>
            Resend OTP <span>{timer} sec</span>
          </p>
          <button
            type="button"
            onClick={handleResendOtp}
            disabled={isDisabled} // Disable resend button during countdown
          >
            Resend OTP
          </button>
        </div>
        <button type="submit">Validate</button>
      </form>
    </div>
  );
};

export default OtpForm;
