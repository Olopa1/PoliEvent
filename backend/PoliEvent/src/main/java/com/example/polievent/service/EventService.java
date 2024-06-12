package com.example.polievent.service;

import com.example.polievent.DAO.Event;
import com.example.polievent.DAO.EventRepository;
import com.example.polievent.DAO.Post;
import jakarta.transaction.Transactional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
@Transactional
public class EventService {
    @Autowired
    private final EventRepository eventRepository;

    public EventService(EventRepository eventRepository) {
        this.eventRepository = eventRepository;
    }
    public List<Event> listAll(){return eventRepository.findAll();}

    public Optional<Event> getEventById(Long eventId) {
        return eventRepository.findById(eventId);
    }

    public List<Event> getEventsByAdvertiser(Long advertiserId) {
        return eventRepository.findByAdvertiserId(advertiserId);
    }

    public List<Post> getPostsByEventId(Long eventId) {
        Optional<Event> optionalEvent = eventRepository.findById(eventId);
        if (optionalEvent.isPresent()) {
            Event event = optionalEvent.get();
            return event.getPosts();
        } else {
            throw new RuntimeException("Event not found with ID: " + eventId);
        }
    }

    public void addSignedUpUser(Long eventId, Long userId) {
        Optional<Event> optionalEvent = eventRepository.findById(eventId);
        if (optionalEvent.isPresent()) {
            Event event = optionalEvent.get();
            event.addSignedUpUser(userId);
            eventRepository.save(event);
        }
    }

    public void removeSignedUpUser(Long eventId, Long userId) {
        Optional<Event> optionalEvent = eventRepository.findById(eventId);
        if (optionalEvent.isPresent()) {
            Event event = optionalEvent.get();
            event.removeSignedUpUser(userId);
            eventRepository.save(event);
        }
    }

    public List<Long> getSignedUpUsers(Long eventId) {
        Optional<Event> optionalEvent = eventRepository.findById(eventId);
        return optionalEvent.map(Event::getSignedUpUsers).orElse(null);
    }

    public Event addEvent(Event event) {
        Optional<Event> eventOptional =eventRepository.findEventByID(event.getId());
        if(eventOptional.isPresent()){
            throw new IllegalStateException("ID TAKEN");
        }
        return eventRepository.save(event);
    }

    public Event editEvent(Long eventId, Event updatedEvent) {
        Optional<Event> optionalEvent = eventRepository.findById(eventId);
        if (optionalEvent.isPresent()) {
            Event existingEvent = optionalEvent.get();
            existingEvent.setTitle(updatedEvent.getTitle());
            existingEvent.setDate(updatedEvent.getDate());
            existingEvent.setStartTime(updatedEvent.getStartTime());
            existingEvent.setPlace(updatedEvent.getPlace());
            existingEvent.setPicturePath(updatedEvent.getPicturePath());
            existingEvent.setDescription(updatedEvent.getDescription());
            existingEvent.setStatus(updatedEvent.getStatus());
            return eventRepository.save(existingEvent);
        } else {
            throw new RuntimeException("Event not found with ID: " + eventId);
        }
    }

    public void deleteEvent(Long eventId) {
        eventRepository.deleteById(eventId);
    }

    public Post addPost(Long eventId, Post post) {
        Optional<Event> optionalEvent = eventRepository.findById(eventId);
        if (optionalEvent.isPresent()) {
            Event event = optionalEvent.get();
            event.getPosts().add(post);
            eventRepository.save(event);
            return post;
        } else {
            throw new RuntimeException("Event not found with ID: " + eventId);
        }
    }


}
