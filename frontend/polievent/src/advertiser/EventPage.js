import React from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import './EventPage.css';

const EventPage = () => {
  const { eventId } = useParams();
  const [event, setEvent] = React.useState(null);

  React.useEffect(() => {
    axios.get(`/api/events/${eventId}`)
      .then(response => {
        setEvent(response.data);
      })
      .catch(error => {
        console.error('There was an error fetching the event!', error);
      });
  }, [eventId]);

  // Stałe wydarzenie do wyświetlenia na stronie wydarzenia
  const staticEvent = {
    id: 1,
    title: "Przykładowe Wydarzenie",
    date: "2024-06-01",
    time: "15:00",
    location: "Przykładowe Lokalizacja",
    attendees: 20,
    interested: 30,
    image: "https://via.placeholder.com/150",
    description: "Opis przykładowego wydarzenia."
  };

  return (
    <div className="event-page">
      <div className="event-header">
        <img src={event ? event.image : staticEvent.image} alt={event ? event.title : staticEvent.title} className="event-background" />
        <h1>{event ? event.title : staticEvent.title}</h1>
      </div>
      <div className="event-details">
        <div className="posts-panel">
          {/* TODO: dodać wyświetlanie postów */}
        </div>
        <div className="event-info-panel">
          <p>Data: {event ? event.date : staticEvent.date}</p>
          <p>Czas: {event ? event.time : staticEvent.time}</p>
          <p>Lokalizacja: {event ? event.location : staticEvent.location}</p>
          <p>Zapisani: {event ? event.attendees : staticEvent.attendees}</p>
          <p>Zainteresowani: {event ? event.interested : staticEvent.interested}</p>
          {/*TODO: dodać przyciski do edycji/usunięcia wydarzenia */}
        </div>
      </div>
    </div>
  );
};

export default EventPage;
