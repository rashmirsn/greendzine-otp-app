import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Sidebar = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    // Example: Clear any auth tokens or user data here
    // localStorage.removeItem("token");
    navigate('/');
  };

  return (
    <div style={sidebarStyle}>
      <ul style={{ listStyleType: 'none', padding: 0, marginTop: '20px' }}>
        <li><Link to="/dashboard" style={sidebarLinkStyle}>Dashboard</Link></li>
        <li><Link to="/profile" style={sidebarLinkStyle}>Profile</Link></li>
        <li><Link to="/settings" style={sidebarLinkStyle}>Settings</Link></li>
        <li>
          <button onClick={handleLogout} style={{ ...sidebarLinkStyle, background: 'none', border: 'none', textAlign: 'left' }}>
            Logout
          </button>
        </li>
      </ul>
    </div>
  );
};

// Sidebar styles
const sidebarStyle = {
  width: '200px',
  height: '100vh',
  backgroundColor: '#003249',
  color: '#fff',
  padding: '20px',
  position: 'fixed',
  top: 0,
  left: 0,
  display: 'flex',
  flexDirection: 'column',
};

// Link/button styles
const sidebarLinkStyle = {
  color: '#fff',
  textDecoration: 'none',
  padding: '12px 0',
  display: 'block',
  fontSize: '16px',
  cursor: 'pointer',
};

export default Sidebar;
