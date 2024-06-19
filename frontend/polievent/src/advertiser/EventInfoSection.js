import React from 'react';
import './EventInfoSection.css'


const EventInfoSection = ({ event }) => {
  const formattedStartTime = event.startTime ? event.startTime.substring(0, 5) : '';
  const getDayOfWeek = (dateString) => {
    const date = new Date(dateString);
    const options = { weekday: 'long' };
    return new Intl.DateTimeFormat('pl-PL', options).format(date); // 'pl-PL' for Polish locale
  };

  const dayOfWeek = event.date ? getDayOfWeek(event.date) : '';

  return (
    <div className="event-info-section">
      <h3>{event.title}</h3>
      <p>Data: {event.date} ({dayOfWeek})</p>
      <p>Start: {formattedStartTime}</p>
      <p>Miejsce: {event.place}</p>
      <p>Opis: {event.description}</p>
    </div>
  );
}

export default EventInfoSection;

/* <h3>Zapisane osoby</h3>
<ul>
  {event.signedUpUsers.map(user => (
    <li key={user.id}>{user.firstName} {user.lastName}</li>
  ))}
</ul> */
