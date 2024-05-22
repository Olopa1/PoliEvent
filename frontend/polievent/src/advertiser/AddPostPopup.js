import React, { useState } from 'react';
import axios from 'axios';

const AddPostPopup = ({ eventId, onClose }) => {
  const [formData, setFormData] = useState({
    title: '',
    image: '',
    content: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post(`/api/events/${eventId}/posts`, formData)
      .then(response => {
        onClose();
        window.location.reload();  // Refresh the page to show the new post
      })
      .catch(error => {
        console.error('There was an error creating the post!', error);
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
          Image URL:
          <input type="text" name="image" value={formData.image} onChange={handleChange} required />
        </label>
        <label>
          Content:
          <textarea name="content" value={formData.content} onChange={handleChange} required />
        </label>
        <button type="submit">Add Post</button>
      </form>
    </div>
  );
};

export default AddPostPopup;
