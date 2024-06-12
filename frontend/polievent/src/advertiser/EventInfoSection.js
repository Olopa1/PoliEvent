import React from 'react';
import './EventInfoSection.css'

const EventInfoSection = ({ event }) => {
  return (
    <div className="event-info-section">
      <h3>Event Information</h3>
      <p>Date: {event.date}</p>
      <p>Time: {event.startTime}</p>
      <p>Place: {event.place}</p>
      <p>Description: {event.description}</p>
      <h3>Signed Up Users</h3>
      <ul>
        {event.signedUpUsers.map(user => (
          <li key={user.id}>{user.firstName} {user.lastName}</li>
        ))}
      </ul>
    </div>
  );
}

export default EventInfoSection;
