import React, { useState } from 'react';
import axios from 'axios';

const EditEventPopup = ({ event, onClose }) => {
  const [formData, setFormData] = useState({
    title: event.title,
    date: event.date,
    time: event.time,
    location: event.location,
    description: event.description,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.put(`/api/advertiser/events/${event.id}`, formData)
      .then(response => {
        onClose();
        window.location.reload();
      })
      .catch(error => {
        console.error('There was an error updating the event!', error);
      });
  };

  return (
    <div className="popup">
      <button onClick={onClose}>Close</button>
      <form onSubmit={handleSubmit}>
        <label>
          Title:
          <input type="text" name="title" value={formData.title} onChange={handleChange} required />
        </label>
        <label>
          Date:
          <input type="date" name="date" value={formData.date} onChange={handleChange} required />
        </label>
        <label>
          Time:
          <input type="time" name="time" value={formData.time} onChange={handleChange} required />
        </label>
        <label>
          Location:
          <input type="text" name="location" value={formData.location} onChange={handleChange} required />
        </label>
        <label>
          Description:
          <textarea name="description" value={formData.description} onChange={handleChange} required />
        </label>
        <button type="submit">Save Changes</button>
      </form>
    </div>
  );
};

export default EditEventPopup;
