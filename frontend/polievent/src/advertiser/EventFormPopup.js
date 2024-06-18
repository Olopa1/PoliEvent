// EventFormPopup.jsx
import React, { useState } from 'react';
import axios from 'axios';
import './EventFormPopup.css';
import Cookies from 'js-cookie';

const EventFormPopup = ({onClose, onSubmit }) => {
  const [eventData, setEventData] = useState({
    title: '',
    date: '',
    startTime: '',
    place: '',
    description: '',
    picturePath:'null',
    status: 'active',
    advertiserId: Cookies.get('userID')
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEventData(prevData => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(`http://localhost:8080/addEvent`, eventData);
      onSubmit(response.data);
      onClose();
    } catch (error) {
      console.error('Error adding event:', error);
    }
  };

  return (
    <div className="popup">
      <div className="popup-inner">
        <h2>Dodaj wydarzenie</h2>
        <form onSubmit={handleSubmit}>
          <input type="text" name="title" placeholder="Tytuł" value={eventData.title} onChange={handleChange} required />
          <input type="date" name="date" placeholder="Data" value={eventData.date} onChange={handleChange} required />
          <input type="time" name="startTime" placeholder="Czas" value={eventData.startTime} onChange={handleChange} required />
          <input type="text" name="place" placeholder="Miejsce" value={eventData.place} onChange={handleChange} required />
          <input type="text" name="description" placeholder="Opis" value={eventData.description} onChange={handleChange} required />
          <button type="submit">Dodaj</button>
        </form>
        <button onClick={onClose}>Anuluj</button>
      </div>
    </div>
  );
};

export default EventFormPopup;
