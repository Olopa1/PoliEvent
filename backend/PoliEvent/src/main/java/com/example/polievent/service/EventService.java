package com.example.polievent.service;

import com.example.polievent.DAO.Event;
import com.example.polievent.DAO.EventRepository;
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

    public List<Event> getEventsByAdvertiser(Long advertiserId) {
        return eventRepository.findByAdvertiserId(advertiserId);
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
}
