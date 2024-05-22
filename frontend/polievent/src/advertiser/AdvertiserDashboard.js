import React, { useState, useEffect } from 'react';
import axios from 'axios';
import NotificationPopup from './NotificationPopup';
import SettingsPopup from './SettingsPopup';
import EventCard from './EventCard';
import EventFormPopup from './EventFormPopup';
import './AdvertiserDashboard.css';

const AdvertiserDashboard = () => {
  const [events, setEvents] = useState([]);
  const [notifications, setNotifications] = useState([]);
  const [showNotifications, setShowNotifications] = useState(false);
  const [showSettings, setShowSettings] = useState(false);
  const [showEventForm, setShowEventForm] = useState(false);

  useEffect(() => {
    axios.get('/api/advertiser/events')
      .then(response => {
        setEvents(response.data);
      })
      .catch(error => {
        console.error('There was an error fetching events!', error);
      });
    axios.get('/api/advertiser/notifications')
      .then(response => {
        setNotifications(response.data);
      })
      .catch(error => {
        console.error('There was an error fetching notifications!', error);
      });
  }, []);

  const handleLogout = () => {
    // Implement logout functionality
  };

  const handleAddEvent = (newEvent) => {
    setEvents([...events, newEvent]);
    setShowEventForm(false);
  };

  // Stałe wydarzenie do wyświetlenia na tablicy reklamodawcy
  const staticEvent = {
    id: 1,
    title: "Przykładowe Wydarzenie",
    date: "2024-06-01",
    time: "15:00",
    location: "Przykładowa Lokalizacja",
    attendees: 20,
    interested: 30,
    image: "https://via.placeholder.com/150",
    description: "Opis wydarzenia."
  };

  return (
    <div className="dashboard">
      <nav className="menu">
        <button onClick={() => setShowNotifications(true)}>Notifications</button>
        <button onClick={() => setShowSettings(true)}>Settings</button>
        <button onClick={handleLogout}>Logout</button>
      </nav>
      <div className="events-grid">
        {events.map(event => (
          <EventCard key={event.id} event={event} />
        ))}
        <EventCard key={staticEvent.id} event={staticEvent} />
        <div className="add-event-card" onClick={() => setShowEventForm(true)}>
          <span>+</span>
        </div>
      </div>
      {showNotifications && <NotificationPopup notifications={notifications} onClose={() => setShowNotifications(false)} />}
      {showSettings && <SettingsPopup onClose={() => setShowSettings(false)} />}
      {showEventForm && <EventFormPopup onClose={() => setShowEventForm(false)} onSubmit={handleAddEvent} />}
    </div>
  );
};

export default AdvertiserDashboard;
