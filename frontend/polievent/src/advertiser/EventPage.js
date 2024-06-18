import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import HeaderSection from './HeaderSection';
import PostsSection from './PostsSection';
import EventInfoSection from './EventInfoSection';
import axios from 'axios';
import './EventPage.css';
import eventService from '../restFunctionalities/event.service';

const EventPage = () => {
  const {eventId} = useParams();
  const [event, setEvent] = useState(null);
  const [posts, setPosts] = useState([]);
  const navigate = useNavigate

  useEffect(() => {
    axios.get(`http://localhost:8080/getEventById?eventId=${eventId}`)
      .then(response => {
        setEvent(response.data);
      })
      .catch(error => {
        console.error('Error fetching event data:', error);
      });


    axios.get(`http://localhost:8080/getPostsByEventId?eventId=${eventId}`)
      .then(response => {
        setPosts(response.data);
      })
      .catch(error => {
        console.error('Error fetching posts data:', error);
      });
  }, [eventId]);

  const handleEditEvent = () => {};

  const handleAddPost = () => {};

  const handleDeleteEvent = async () => {
    const confirmDelete = window.confirm('Czy napewno chcesz usunąć to wydarzenie?');
    if (confirmDelete) {
      try {
        console.log(`Sending request to delete event eventId= ${eventId}`);
        await eventService.deleteEvent(eventId);
        window.location.href='/advertiserdashboard'
      } catch (error) {
        console.error('Error deleting event:', error);
      }
    }
  };

  const handleEditPost = (postId) => {};

  const handleDeletePost = (postId) => {
    const confirmDelete = window.confirm('Are you sure you want to delete this post?');
    if (confirmDelete) {
      axios.delete(`http://localhost:8080/deletePost?id=${postId}`)
        .then(response => {
          console.log('Post deleted successfully');
          setPosts(posts.filter(post => post.id !== postId));
        })
        .catch(error => {
          console.error('Error deleting post:', error);
        });
    }
  };

  return (
    <div className="event-page">
      {event && (
        <>
          <HeaderSection
            eventTitle={event.title}
            onEdit={handleEditEvent}
            onAddPost={handleAddPost}
            onDelete={() => handleDeleteEvent(eventId)}
          />
          <div className="event-content">
            <div className="left-section">
              <h3>Twoje posty</h3>
              <PostsSection
                posts={posts}
                onEditPost={handleEditPost}
                onDeletePost={handleDeletePost}
              />
            </div>
            <div className="right-section">
              <EventInfoSection event={event} />
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default EventPage;
