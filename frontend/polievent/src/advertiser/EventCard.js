import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import EditEventPopup from './EditEventPopup';
import AddPostPopup from './AddPostPopup';
import './EventCard.css'

const EventCard = ({ event }) => {
  const [showOptions, setShowOptions] = useState(false);
  const [showEditEvent, setShowEditEvent] = useState(false);
  const [showAddPost, setShowAddPost] = useState(false);
  const navigate = useNavigate();

  const handleDelete = () => {
    axios.delete(`/api/advertiser/events/${event.id}`)
      .then(() => {
        window.location.reload();
      })
      .catch(error => {
        console.error('There was an error deleting the event!', error);
      });
  };

  return (
    <div className="event-card">
      <img src={event.image} alt={event.title} />
      <h3>{event.title}</h3>
      <p>{event.date} o godzinie {event.time}</p>
      <p>Lokalizacja: {event.location}</p>
      <p>{event.attendees} zapisanych, {event.interested} zainteresowanych</p>
      <div className="options">
        <button onClick={() => setShowOptions(!showOptions)}>⋮</button>
        {showOptions && (
          <div className="options-menu">
            <button onClick={() => navigate(`/event/${event.id}`)}>Wyświetl wydarzenie</button>
            <button onClick={() => setShowEditEvent(true)}>Edytuj wydarzenie</button>
            <button onClick={() => setShowAddPost(true)}>Dodaj post</button>
            <button onClick={handleDelete}>Delete</button>
          </div>
        )}
      </div>
      {showEditEvent && <EditEventPopup event={event} onClose={() => setShowEditEvent(false)} />}
      {showAddPost && <AddPostPopup eventId={event.id} onClose={() => setShowAddPost(false)} />}
    </div>
  );
};

export default EventCard;
