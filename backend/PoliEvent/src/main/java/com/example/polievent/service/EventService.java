package com.example.polievent.service;

import com.example.polievent.DAO.Event;
import com.example.polievent.DAO.EventRepository;
import jakarta.transaction.Transactional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@Transactional
public class EventService {
    private final EventRepository eventRepository;

    @Autowired
    public EventService(EventRepository eventRepository) {
        this.eventRepository = eventRepository;
    }

    public List<Event> listAll() {
        return eventRepository.findAll();
    }

    public List<Event> listByAdvertiser(Long advertiserId) {
        return eventRepository.findByAdvertiserId(advertiserId);
    }

    public void addEvent(Event event) {
        eventRepository.save(event);
    }

    public void updateEvent(Long id, Event updatedEvent) {
        Event existingEvent = eventRepository.findById(id).orElseThrow(() -> new IllegalStateException("Event not found"));
        existingEvent.setTitle(updatedEvent.getTitle());
        existingEvent.setPlace(updatedEvent.getPlace());
        existingEvent.setDate(updatedEvent.getDate());
        existingEvent.setStartTime(updatedEvent.getStartTime());
        existingEvent.setEndTime(updatedEvent.getEndTime());
        existingEvent.setPicture(updatedEvent.getPicture());
        existingEvent.setDescription(updatedEvent.getDescription());
        existingEvent.setStatus(updatedEvent.getStatus());
        eventRepository.save(existingEvent);
    }

    public void deleteEvent(Long id) {
        eventRepository.deleteById(id);
    }
}
