import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import NotificationPopup from './NotificationPopup';
import SettingsPopup from './SettingsPopup';
import EventFormPopup from './EventFormPopup';
import './AdvertiserDashboard.css';
import { Button, Card, Container, Row, Col } from 'react-bootstrap';

const AdvertiserDashboard = () => {
  const [events, setEvents] = useState([]);
  const [notifications, setNotifications] = useState([]);
  const [showNotifications, setShowNotifications] = useState(false);
  const [showSettings, setShowSettings] = useState(false);
  const [showEventForm, setShowEventForm] = useState(false);

  useEffect(() => {
    axios.get('http://localhost:8080/getEventsByAdvertiser?advertiserId=4')
      .then(response => {
        setEvents(response.data);
      })
      .catch(error => {
        console.error('Error fetching events:', error);
      });
  }, []);

  const handleDeleteEvent = (eventId) => {};

  const handleAddEvent = (newEvent) => {
    setEvents([...events, newEvent]);
    setShowEventForm(false);
  };

  return (
    <div className="dashboard">
      <nav className="menu">
        <button onClick={() => setShowNotifications(true)}>Powiadomienia</button>
        <br></br>
        <button onClick={() => setShowSettings(true)}>Ustawienia</button>
        <br></br>
        <Link to="/"><button>Wyloguj</button></Link>
      </nav>
      <Container>
        <h1>Twoje wydarzenia</h1>
        <Row>
          {events.map(event => (
            <Col key={event.id} xs={12} sm={6} md={4} lg={3}>
              <Card style={{ marginBottom: '20px' }}>
                <Card.Body>
                  <Card.Title>{event.title}</Card.Title>
                  <Card.Text>
                    Data: {event.date} <br />
                    Start: {event.startTime} <br />
                    Miejsce: {event.place}
                  </Card.Text>
                  <Card.Text>
                    Zapisanych: {event.signedUpUsers.length}
                  </Card.Text>
                  <Link to={`/event/${event.id}`}>
                    <Button variant="primary">Wyswietl</Button>
                  </Link>
                  <Button variant="danger" onClick={() => handleDeleteEvent(event.id)}>Usun</Button>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
        <Link to="/create-event">
          <Button variant="success">+</Button>
        </Link>
      </Container>
      {showNotifications && <NotificationPopup notifications={notifications} onClose={() => setShowNotifications(false)} />}
      {showSettings && <SettingsPopup onClose={() => setShowSettings(false)} />}
      {showEventForm && <EventFormPopup onClose={() => setShowEventForm(false)} onSubmit={handleAddEvent} />}
    </div>
  );
};

export default AdvertiserDashboard;
