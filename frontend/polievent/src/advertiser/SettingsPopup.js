import React, { useState } from 'react';
import axios from 'axios';

const SettingsPopup = ({ onClose }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('/api/advertiser/settings', formData)
      .then(response => {
        console.log(response.data);
        onClose();
      })
      .catch(error => {
        console.error('There was an error!', error);
      });
  };

  return (
    <div className="popup">
      <button onClick={onClose}>Close</button>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input type="text" name="name" value={formData.name} onChange={handleChange} required />
        </label>
        <label>
          Email:
          <input type="email" name="email" value={formData.email} onChange={handleChange} required />
        </label>
        <label>
          Password:
          <input type="password" name="password" value={formData.password} onChange={handleChange} required />
        </label>
        <button type="submit">Save</button>
      </form>
    </div>
  );
};

export default SettingsPopup;
