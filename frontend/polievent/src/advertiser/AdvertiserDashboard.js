import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import SettingsPopup from './SettingsPopup';
import EventFormPopup from './EventFormPopup';
import './AdvertiserDashboard.css';
import { LogoutButton } from '../admin/LogoutButton';
import { Button, Card, Container, Row, Col } from 'react-bootstrap';
import eventService from '../restFunctionalities/event.service';
import EditEventForm from './EditEventForm';
import Cookies from 'js-cookie';
import userService from '../restFunctionalities/user.service';

const AdvertiserDashboard = () => {
  const [events, setEvents] = useState([]);
  const [showSettings, setShowSettings] = useState(false);
  const [showEventForm, setShowEventForm] = useState(false);
  const [showEditForm, setShowEditForm] = useState(false);
  const [editEventId, setEditEventId] = useState(null);
  const [currentFirstName, setCurrentFirstName] = useState(null);
  const [currentTime, setCurrentTime] = useState(new Date());
  const formattedTime = currentTime.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });

  useEffect(() => {
    const advertiserId = Number(Cookies.get('userID'));
    const userStatus = Cookies.get('userStatus').toUpperCase();
    if (advertiserId) {
      if (userStatus.match('USER')) window.location.href = '/';
      if (userStatus.match('ADMIN')) window.location.href = '/admin';
    } else {
      window.location.href = '/advertiserdashboard';
    }
    axios
      .get(`http://localhost:8080/getEventsByAdvertiser?advertiserId=${advertiserId}`)
      .then((response) => {
        console.log('Response from getEventsByAdvertiser():', response);
        setEvents(response.data);
      })
      .catch((error) => {
        console.error('Error fetching events:', error);
      });

    userService
      .getUserById(advertiserId)
      .then((res) => {
        console.log(res.data);
        setCurrentFirstName(res.data.firstName);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const handleDeleteEvent = async (eventId) => {
    const confirmDelete = window.confirm('Czy napewno chcesz usunąć to wydarzenie?');
    if (confirmDelete) {
      try {
        console.log(`Sending request to delete event eventId= ${eventId}`);
        await eventService.deleteEvent(eventId);
        setEvents((prevEvents) => prevEvents.filter((event) => event.id !== eventId));
      } catch (error) {
        console.error('Error deleting event:', error);
      }
    }
  };

  const handleAddEvent = (newEvent) => {
    setEvents([...events, newEvent]);
  };

  const toggleEventForm = () => {
    setShowEventForm(!showEventForm);
  };

  const handleEditEvent = (eventId) => {
    setEditEventId(eventId);
    setShowEditForm(true);
  };

  return (
    <div className="advertiser-dashboard">
      <nav className="advertiser-menu">
        <span>Witaj {currentFirstName}!</span>
        <span>{formattedTime}</span>
        <Button onClick={toggleEventForm}>Dodaj wydarzenie</Button>
        <Button onClick={() => setShowSettings(true)}>Ustawienia</Button>
        <LogoutButton className="logout-button" />
      </nav>
      <div className="advertiser-container">
        <h1>Twoje wydarzenia</h1>
        <Row>
          {events.map((event) => (
            <Col key={event.id} xs={12} sm={6} md={4} lg={3}>
              <Card style={{ marginBottom: '20px' }}>
                <Card.Body>
                  <Card.Title>{event.title}</Card.Title>
                  <Card.Text>
                    Data: {event.date} <br />
                    Start: {event.startTime.substr(0, 5)} {/* Displaying only "HH:mm" */}
                    <br />
                    Miejsce: {event.place}
                  </Card.Text>
                  <Link to={`/event/${event.id}`}>
                    <Button variant="primary">Wyświetl</Button>
                  </Link>
                  <Button variant="primary" onClick={() => handleEditEvent(event.id)}>
                    Edytuj
                  </Button>
                  <Button variant="danger" onClick={() => handleDeleteEvent(event.id)}>
                    Usuń
                  </Button>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
        {showEventForm && (
          <EventFormPopup
            onClose={() => setShowEventForm(false)}
            onSubmit={(newEvent) => handleAddEvent(newEvent)}
          />
        )}
      </div>
      {showSettings && <SettingsPopup onClose={() => setShowSettings(false)} />}
      {showEventForm && (
        <EventFormPopup
          onClose={toggleEventForm}
          onSubmit={(newEvent) => {
            handleAddEvent(newEvent);
            toggleEventForm();
          }}
        />
      )}
      {showEditForm && editEventId && (
        <EditEventForm
          eventData={events.find((event) => event.id === editEventId)}
          onClose={() => setShowEditForm(false)}
          onSave={(updatedEventData) => {
            eventService
              .editEvent(editEventId, updatedEventData)
              .then((response) => {
                setEvents((prevEvents) =>
                  prevEvents.map((event) => (event.id === editEventId ? response.data : event))
                );
                setShowEditForm(false);
              })
              .catch((error) => {
                console.error('Error updating event:', error);
              });
          }}
        />
      )}
    </div>
  );
};

export default AdvertiserDashboard;
