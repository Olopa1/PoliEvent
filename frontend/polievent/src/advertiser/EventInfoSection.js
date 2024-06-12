import React from 'react';
import './EventInfoSection.css'

const EventInfoSection = ({ event }) => {
  return (
    <div className="event-info-section">
      <h3>{event.title}</h3>
      <p>Data: {event.date}</p>
      <p>Start: {event.startTime}</p>
      <p>Miejsce: {event.place}</p>
      <p>Opis: {event.description}</p>
      <h3>Zapisane osoby</h3>
      <ul>
        {event.signedUpUsers.map(user => (
          <li key={user.id}>{user.firstName} {user.lastName}</li>
        ))}
      </ul>
    </div>
  );
}

export default EventInfoSection;
