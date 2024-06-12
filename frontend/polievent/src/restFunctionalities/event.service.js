import axios from 'axios';

const API_URL = 'http://localhost:8080';

class EventService {
  addEvent(eventData) {
    return axios.post(`${API_URL}/addEvent`, eventData);
  }

  editEvent(eventId, updatedEventData) {
    return axios.put(`${API_URL}/editEvent/${eventId}`, updatedEventData);
  }

  deleteEvent(eventId) {
    return axios.delete(`${API_URL}/deleteEvent/${eventId}`);
  }

  addPostToEvent(eventId, postData) {
    return axios.post(`${API_URL}/addPostToEvent/${eventId}`, postData);
  }

  editPost(postId, updatedPostData) {
    return axios.put(`${API_URL}/editPost/${postId}`, updatedPostData);
  }

  deletePost(postId) {
    return axios.delete(`${API_URL}/deletePost/${postId}`);
  }

}

export default new EventService();
