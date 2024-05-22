import React, { useState } from 'react';
import axios from 'axios';

const EditEventPopup = ({ event, onClose, onUpdate }) => {
  const [title, setTitle] = useState(event.title);
  const [date, setDate] = useState(event.date);
  const [location, setLocation] = useState(event.location);
  const [image, setImage] = useState(null); // Nowe pole dla zdjęcia

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('title', title);
    formData.append('date', date);
    formData.append('location', location);
    formData.append('image', image); // Dodanie zdjęcia do formularza

    try {
      const response = await axios.put(`/api/events/${event.id}`, formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      });
      onUpdate(response.data);
      onClose();
    } catch (error) {
      console.error('There was an error updating event!', error);
    }
  };

  return (
    <div className="popup">
      <div className="popup-inner">
        <button className="close-btn" onClick={onClose}>Anuluj</button>
        <h2>Edytuj wydarzenie</h2>
        <form onSubmit={handleSubmit}>
          <label>Tytuł:</label>
          <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} />
          <label>Data:</label>
          <input type="date" value={date} onChange={(e) => setDate(e.target.value)} />
          <label>Miejsce:</label>
          <input type="text" value={location} onChange={(e) => setLocation(e.target.value)} />
          <label>Zdjęcie:</label>
          <input type="file" accept="image/*" onChange={(e) => setImage(e.target.files[0])} />
          <button type="submit">Wyślij</button>
        </form>
      </div>
    </div>
  );
};

export default EditEventPopup;
