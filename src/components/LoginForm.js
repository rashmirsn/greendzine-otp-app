import React, { useState } from 'react';
import './LoginForm.css'; // Importing the CSS for LoginForm

const LoginForm = ({ onSendOtp }) => {
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onSendOtp(email);
  };

  return (
    <div className="form-container">
      <h2>Sign In</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <button type="submit">Send Otp</button>
      </form>
    </div>
  );
};

export default LoginForm;
