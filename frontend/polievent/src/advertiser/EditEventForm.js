import React, { useState } from 'react';

const EditEventForm = ({ eventData, onClose, onSave }) => {
  const [updatedEvent, setUpdatedEvent] = useState({
    title: eventData.title,
    date: eventData.date,
    startTime: eventData.startTime,
    place: eventData.place,
    description: eventData.description,
    status: eventData.status
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUpdatedEvent(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave(updatedEvent);
  };

  return (
    <div className="popup">
      <div className="popup-inner">
        <button className="close-btn" onClick={onClose}>Anuluj</button>
        <h2>Edytuj wydarzenie</h2>
        <form onSubmit={handleSubmit}>
          <label>Tytuł:</label>
          <input type="text" name="title" value={updatedEvent.title} onChange={handleChange} />
          <label>Data:</label>
          <input type="date" name="date" value={updatedEvent.date} onChange={handleChange} />
          <label>Czas:</label>
          <input type="time" name="startTime" value={updatedEvent.startTime} onChange={handleChange} />
          <label>Miejsce:</label>
          <input type="text" name="place" value={updatedEvent.place} onChange={handleChange} />
          <label>Opis:</label>
          <input type="text" name="description" value={updatedEvent.description} onChange={handleChange} />
          <button type="submit">Zapisz zmiany</button>
        </form>
      </div>
    </div>
  );
};

export default EditEventForm;
