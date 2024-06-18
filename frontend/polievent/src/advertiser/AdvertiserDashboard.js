import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import NotificationPopup from './NotificationPopup';
import SettingsPopup from './SettingsPopup';
import EventFormPopup from './EventFormPopup';
import './AdvertiserDashboard.css';
import { LogoutButton } from '../admin/LogoutButton';
import { Button, Card, Container, Row, Col } from 'react-bootstrap';
import eventService from '../restFunctionalities/event.service';
import EditEventForm from './EditEventForm';
import Cookies from 'js-cookie';
const AdvertiserDashboard = () => {
  const [events, setEvents] = useState([]);
  const [notifications, setNotifications] = useState([]);
  const [showNotifications, setShowNotifications] = useState(false);
  const [showSettings, setShowSettings] = useState(false);
  const [showEventForm, setShowEventForm] = useState(false);
  const [showEditForm, setShowEditForm] = useState(false);
  const [editEventId, setEditEventId] = useState(null);

  function getEventsByAdvertiser() {
    eventService.getEventsByAdvertiser().then((response) => {
      console.log('Response from eventService.getEventsByAdvertiser():', response);
      if (Array.isArray(response)) {
        setEvents([]);
      } else {
        setEvents(response.data || []);
      }
      console.log('Events:', response);
    }).catch((error) => {
      console.log(error);
    });
  }

  useEffect(() => {
    const advertiserId = Cookies.get('userID');
    //const userStatus=Cookies.get('userStatus').toUpperCase();]
    //getEventsByAdvertiser(advertiserId);
    axios.get(`http://localhost:8080/getEventsByAdvertiser?advertiserId=${advertiserId}`)
      .then(response => {
        console.log('Response from getEventsByAdvertiser():', response);
        setEvents(response.data);
      })
      .catch(error => {
        console.error('Error fetching events:', error);
      });
  }, []);

  const handleDeleteEvent = async (eventId) => {
    const confirmDelete = window.confirm('Czy napewno chcesz usunąć to wydarzenie?');
    if (confirmDelete) {
      try {
        console.log(`Sending request to delete event eventId= ${eventId}`);
        await eventService.deleteEvent(eventId);
        setEvents((prevEvents) => prevEvents.filter(event => event.id !== eventId));
      } catch (error) {
        console.error('Error deleting event:', error);
      }
    }
  };

  const handleAddEvent = (newEvent) => {
    setEvents([...events, newEvent]);
    setShowEventForm(false);
  };

  const handleEditEvent = (eventId) => {
    setEditEventId(eventId);
    setShowEditForm(true);
  };

  return (
    <div className="dashboard">
      <nav className="menu">
        <button onClick={() => setShowNotifications(true)}>Powiadomienia</button>
        <br></br>
        <button onClick={() => setShowSettings(true)}>Ustawienia</button>
        <br></br>
        <LogoutButton></LogoutButton>
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
                  <Button variant="info" onClick={() => handleEditEvent(event.id)}>Edytuj wydarzenie</Button>
                  <Button variant="danger" onClick={() => handleDeleteEvent(event.id)}>Usun</Button>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
        <div className="add-event-card" onClick={() => setShowEventForm(true)}>
          <img src='/addEntity.png' alt='Dodaj wydarzenie'></img>
        </div>
      </Container>
      {showNotifications && <NotificationPopup notifications={notifications} onClose={() => setShowNotifications(false)} />}
      {showSettings && <SettingsPopup onClose={() => setShowSettings(false)} />}
      {showEventForm && <EventFormPopup onClose={() => setShowEventForm(false)} onSubmit={handleAddEvent} />}
      {showEditForm && editEventId && (
        <EditEventForm
          eventData={events.find(event => event.id === editEventId)}
          onClose={() => setShowEditForm(false)}
          onSave={(updatedEventData) => {
            eventService.editEvent(editEventId, updatedEventData)
              .then(response => {
                setEvents(prevEvents => prevEvents.map(event =>
                  event.id === editEventId ? response.data : event
                ));
                setShowEditForm(false);
              })
              .catch(error => {
                console.error('Error updating event:', error);
              });
          }}
        />
      )}
    </div>
  );
};

export default AdvertiserDashboard;
