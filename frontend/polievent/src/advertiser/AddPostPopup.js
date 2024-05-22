import React, { useState } from 'react';
import axios from 'axios';

const AddPostPopup = ({ eventId, onClose, onAdd }) => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [image, setImage] = useState(null); // Nowe pole dla zdjęcia

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('title', title);
    formData.append('content', content);
    formData.append('image', image); // Dodanie zdjęcia do formularza

    try {
      const response = await axios.post(`/api/events/${eventId}/posts`, formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      });
      onAdd(response.data);
      onClose();
    } catch (error) {
      console.error('There was an error adding post!', error);
    }
  };

  return (
    <div className="popup">
      <div className="popup-inner">
        <button className="close-btn" onClick={onClose}>Anuluj</button>
        <h2>Dodaj post</h2>
        <form onSubmit={handleSubmit}>
          <label>Tytuł:</label>
          <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} />
          <label>Opis:</label>
          <textarea value={content} onChange={(e) => setContent(e.target.value)} />
          <label>Zdjęcie:</label>
          <input type="file" accept="image/*" onChange={(e) => setImage(e.target.files[0])} />
          <button type="submit">Wyślij</button>
        </form>
      </div>
    </div>
  );
};

export default AddPostPopup;