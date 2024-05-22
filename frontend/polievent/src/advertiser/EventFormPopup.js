import React, { useState } from 'react';
import axios from 'axios';

const EventFormPopup = ({ onClose, onSubmit }) => {
  const [title, setTitle] = useState('');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [location, setLocation] = useState('');
  const [image, setImage] = useState(null);

  const handleImageChange = (event) => {
    setImage(event.target.files[0]);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData();
    formData.append('title', title);
    formData.append('date', date);
    formData.append('time', time);
    formData.append('location', location);
    formData.append('image', image);

    try {
      const response = await axios.post('/api/events', formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      });
      onSubmit(response.data);
      onClose();
    } catch (error) {
      console.error('There was an error creating the event!', error);
    }
  };

  return (
    <div className="popup">
      <div className="popup-inner">
        <h2>Dodaj wydarzenie</h2>
        <form onSubmit={handleSubmit}>
          <input type="text" placeholder="Tytuł" value={title} onChange={(e) => setTitle(e.target.value)} required />
          <input type="date" placeholder="Data" value={date} onChange={(e) => setDate(e.target.value)} required />
          <input type="time" placeholder="Czas" value={time} onChange={(e) => setTime(e.target.value)} required />
          <input type="text" placeholder="Miejsce" value={location} onChange={(e) => setLocation(e.target.value)} required />
          <input type="file" onChange={handleImageChange} accept="image/*" />
          <button type="submit">Dodaj</button>
        </form>
        <button onClick={onClose}>Anuluj</button>
      </div>
    </div>
  );
};

export default EventFormPopup;
