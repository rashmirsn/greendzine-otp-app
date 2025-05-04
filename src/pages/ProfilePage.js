import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const ProfilePage = () => {
  const navigate = useNavigate();

  // State to control form visibility
  const [isEditing, setIsEditing] = useState(false);
  const [isAdding, setIsAdding] = useState(false);

  // Example profile data (This can be dynamic, e.g., fetched from an API)
  const [profileData, setProfileData] = useState({
    name: 'John Doe',
    email: 'john.doe@example.com',
    bio: 'A passionate software developer.',
    profilePhoto: null,  // To store the profile photo
  });

  // Form data (for editing or adding)
  const [formData, setFormData] = useState(profileData);

  // Handle form changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Handle profile photo change
  const handlePhotoChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setFormData({
        ...formData,
        profilePhoto: URL.createObjectURL(file),  // Display the image immediately
      });
    }
  };

  // Handle saving the profile (both adding and editing)
  const handleSave = () => {
    setProfileData(formData);
    setIsEditing(false);
    setIsAdding(false);
  };

  // Handle adding a new person (could open a modal or navigate)
  const handleAddNewPerson = () => {
    // Implement logic to add a new person (e.g., navigate to another page or open a modal)
    alert('Add New Person feature can be implemented here');
  };

  return (
    <div style={{ padding: '20px' }}>
      <button onClick={() => navigate('/dashboard')} style={backButtonStyle}>Back to Dashboard</button>

      <h2>Profile</h2>
      <p>Welcome to your profile page! Here, you can view and edit your personal information.</p>

      {/* Profile info display */}
      {!isEditing && !isAdding && (
        <div style={profileInfoStyle}>
          <h3>{profileData.name}</h3>
          <p>Email: {profileData.email}</p>
          <p>Bio: {profileData.bio}</p>

          {/* Display profile photo */}
          {profileData.profilePhoto ? (
            <img
              src={profileData.profilePhoto}
              alt="Profile"
              style={profileImageStyle}
            />
          ) : (
            <div style={profileImageStyle}>No Photo</div>
          )}

          {/* Buttons for Edit and Add */}
          <button onClick={() => setIsEditing(true)} style={buttonStyle}>Edit Profile</button>
          <button onClick={() => setIsAdding(true)} style={buttonStyle}>Add Info</button>
        </div>
      )}

      {/* Form for editing profile */}
      {(isEditing || isAdding) && (
        <div style={formStyle}>
          <h3>{isEditing ? 'Edit Profile' : 'Add Info'}</h3>
          <form>
            <label>
              Name:
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Enter your name"
                style={inputStyle}
              />
            </label>
            <br />
            <label>
              Email:
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Enter your email"
                style={inputStyle}
              />
            </label>
            <br />
            <label>
              Bio:
              <textarea
                name="bio"
                value={formData.bio}
                onChange={handleChange}
                placeholder="Enter your bio"
                style={inputStyle}
              />
            </label>
            <br />
            <label>
              Profile Photo:
              <input
                type="file"
                accept="image/*"
                onChange={handlePhotoChange}
                style={inputStyle}
              />
            </label>
            <br />
            <button type="button" onClick={handleSave} style={saveButtonStyle}>Save</button>
            <button type="button" onClick={() => { setIsEditing(false); setIsAdding(false); }} style={cancelButtonStyle}>Cancel</button>
          </form>
        </div>
      )}

      {/* Add New Person Button */}
      <button onClick={handleAddNewPerson} style={addPersonButtonStyle}>Add New Person</button>
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

const profileInfoStyle = {
  marginTop: '20px',
};

const buttonStyle = {
  padding: '8px 16px',
  backgroundColor: '#007bff',
  color: '#fff',
  border: 'none',
  borderRadius: '5px',
  cursor: 'pointer',
  marginRight: '10px',
};

const formStyle = {
  marginTop: '20px',
  backgroundColor: '#f4f4f4',
  padding: '20px',
  borderRadius: '8px',
};

const inputStyle = {
  padding: '8px',
  width: '100%',
  marginBottom: '10px',
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

const cancelButtonStyle = {
  padding: '10px 15px',
  backgroundColor: '#dc3545',
  color: '#fff',
  border: 'none',
  borderRadius: '5px',
  cursor: 'pointer',
  marginLeft: '10px',
};

const profileImageStyle = {
  width: '100px',
  height: '100px',
  borderRadius: '50%',
  backgroundColor: '#ccc',
  marginBottom: '20px',
  textAlign: 'center',
  lineHeight: '100px',
  fontSize: '16px',
};

const addPersonButtonStyle = {
  padding: '10px 15px',
  backgroundColor: '#007bff',
  color: '#fff',
  border: 'none',
  borderRadius: '5px',
  cursor: 'pointer',
  marginTop: '20px',
};

export default ProfilePage;
