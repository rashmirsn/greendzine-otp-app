import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const SettingsPage = () => {
  const navigate = useNavigate();

  // Get theme from localStorage or default to 'Light'
  const savedTheme = localStorage.getItem('theme') || 'Light';
  const [settings, setSettings] = useState({
    notifications: true,
    privacy: 'Public',
    language: 'English',
    theme: savedTheme,  // Initialize theme from saved value
    twoFactorAuth: false,
    emailNotifications: true,
    smsNotifications: false,
    pushNotifications: true,
  });

  // Handle settings change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setSettings({
      ...settings,
      [name]: value,
    });
  };

  // Handle toggle changes (for checkboxes and switches)
  const handleToggle = (name) => {
    setSettings({
      ...settings,
      [name]: !settings[name],
    });
  };

  // Handle theme change and apply to body
  const handleThemeChange = (e) => {
    const newTheme = e.target.value;
    setSettings({
      ...settings,
      theme: newTheme,
    });

    // Save theme to localStorage
    localStorage.setItem('theme', newTheme);

    // Apply the theme to the body
    if (newTheme === 'Dark') {
      document.body.classList.add('dark-theme');
      document.body.classList.remove('light-theme');
    } else {
      document.body.classList.add('light-theme');
      document.body.classList.remove('dark-theme');
    }
  };

  // Apply theme dynamically when the page loads
  useEffect(() => {
    if (settings.theme === 'Dark') {
      document.body.classList.add('dark-theme');
      document.body.classList.remove('light-theme');
    } else {
      document.body.classList.add('light-theme');
      document.body.classList.remove('dark-theme');
    }
  }, [settings.theme]); // Re-run when theme changes

  return (
    <div style={{ padding: '20px' }}>
      <button onClick={() => navigate('/dashboard')} style={backButtonStyle}>Back to Dashboard</button>

      <h2>Settings</h2>
      <form>
        <div style={formGroupStyle}>
          <label>Notifications</label>
          <input
            type="checkbox"
            checked={settings.notifications}
            onChange={() => handleToggle('notifications')}
          />
        </div>

        <div style={formGroupStyle}>
          <label>Privacy</label>
          <select
            name="privacy"
            value={settings.privacy}
            onChange={handleChange}
            style={selectStyle}
          >
            <option value="Public">Public</option>
            <option value="Private">Private</option>
          </select>
        </div>

        <div style={formGroupStyle}>
          <label>Language</label>
          <select
            name="language"
            value={settings.language}
            onChange={handleChange}
            style={selectStyle}
          >
            <option value="English">English</option>
            <option value="Spanish">Spanish</option>
            <option value="French">French</option>
          </select>
        </div>

        <div style={formGroupStyle}>
          <label>Theme</label>
          <select
            name="theme"
            value={settings.theme}
            onChange={handleThemeChange}
            style={selectStyle}
          >
            <option value="Light">Light</option>
            <option value="Dark">Dark</option>
          </select>
        </div>

        <div style={formGroupStyle}>
          <label>Two-Factor Authentication</label>
          <input
            type="checkbox"
            checked={settings.twoFactorAuth}
            onChange={() => handleToggle('twoFactorAuth')}
          />
        </div>

        <h3>Notification Preferences</h3>
        <div style={formGroupStyle}>
          <label>Email Notifications</label>
          <input
            type="checkbox"
            checked={settings.emailNotifications}
            onChange={() => handleToggle('emailNotifications')}
          />
        </div>

        <div style={formGroupStyle}>
          <label>SMS Notifications</label>
          <input
            type="checkbox"
            checked={settings.smsNotifications}
            onChange={() => handleToggle('smsNotifications')}
          />
        </div>

        <div style={formGroupStyle}>
          <label>Push Notifications</label>
          <input
            type="checkbox"
            checked={settings.pushNotifications}
            onChange={() => handleToggle('pushNotifications')}
          />
        </div>

        <button type="submit" style={saveButtonStyle}>Save Settings</button>
      </form>
    </div>
  );
};

// Styling
const backButtonStyle = {
  padding: '10px 15px',
  backgroundColor: '#007bff',
  color: '#fff',
  border: 'none',
  borderRadius: '5px',
  cursor: 'pointer',
};

const formGroupStyle = {
  marginBottom: '15px',
};

const selectStyle = {
  padding: '8px',
  width: '100%',
  borderRadius: '4px',
  border: '1px solid #ccc',
};

const saveButtonStyle = {
  padding: '10px 15px',
  backgroundColor: '#28a745',
  color: '#fff',
  border: 'none',
  borderRadius: '5px',
  cursor: 'pointer',
};

export default SettingsPage;
