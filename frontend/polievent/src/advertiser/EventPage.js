import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';
import EditEventPopup from './EditEventPopup';
import AddPostPopup from './AddPostPopup';

const EventPage = () => {
  const { eventId } = useParams();
  const navigate = useNavigate();
  const [event, setEvent] = useState(null);
  const [posts, setPosts] = useState([]);
  const [showEditEvent, setShowEditEvent] = useState(false);
  const [showAddPost, setShowAddPost] = useState(false);
  const [showAttendees, setShowAttendees] = useState(true);

  useEffect(() => {
    axios.get(`/api/events/${eventId}`)
      .then(response => {
        setEvent(response.data);
      })
      .catch(error => {
        console.error('There was an error fetching the event!', error);
      });

    axios.get(`/api/events/${eventId}/posts`)
      .then(response => {
        setPosts(response.data);
      })
      .catch(error => {
        console.error('There was an error fetching posts!', error);
      });
  }, [eventId]);

  const handleDeleteEvent = () => {
    axios.delete(`/api/events/${eventId}`)
      .then(() => {
        navigate('/dashboard');
      })
      .catch(error => {
        console.error('There was an error deleting the event!', error);
      });
  };

  return (
    <div className="event-page">
      {event && (
        <>
          <div className="event-header">
            <img src={event.image} alt={event.title} className="event-background" />
            <h1>{event.title}</h1>
            <div className="event-buttons">
              <button onClick={() => setShowEditEvent(true)}>Edit Event</button>
              <button onClick={() => setShowAddPost(true)}>Add Post</button>
              <button onClick={handleDeleteEvent}>Delete Event</button>
            </div>
          </div>
          <div className="event-details">
            <div className="posts-panel">
              {posts.map(post => (
                <div key={post.id} className="post">
                  <h3>{post.title}</h3>
                  <div className="post-buttons">
                    <button>Edit</button>
                    <button>Delete</button>
                  </div>
                  <img src={post.image} alt={post.title} />
                  <p>{post.content}</p>
                </div>
              ))}
            </div>
            <div className="event-info-panel">
              <p>Date: {event.date}</p>
              <p>Location: {event.location}</p>
              <p>{event.description}</p>
              <div className="event-attendance-buttons">
                <button onClick={() => setShowAttendees(true)}>Attendees</button>
                <button onClick={() => setShowAttendees(false)}>Interested</button>
              </div>
              <div className="attendance-list">
                {showAttendees ? (
                  event.attendees.map(user => (
                    <p key={user.id}>{user.name}</p>
                  ))
                ) : (
                  event.interested.map(user => (
                    <p key={user.id}>{user.name}</p>
                  ))
                )}
              </div>
            </div>
          </div>
        </>
      )}
      {showEditEvent && <EditEventPopup event={event} onClose={() => setShowEditEvent(false)} />}
      {showAddPost && <AddPostPopup eventId={eventId} onClose={() => setShowAddPost(false)} />}
    </div>
  );
};

export default EventPage;
