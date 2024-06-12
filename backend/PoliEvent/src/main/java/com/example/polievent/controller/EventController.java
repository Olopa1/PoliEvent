package com.example.polievent.controller;

import com.example.polievent.DAO.Event;
import com.example.polievent.DAO.Post;
import com.example.polievent.service.EventService;
import jakarta.servlet.http.HttpServletRequest;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
public class EventController {
    private final EventService eventService;
    @Autowired
    public EventController(EventService eventService) {
        this.eventService = eventService;
    }

    @GetMapping("/getEvent")
    public List<Event> getEvents(final HttpServletRequest request){
        return eventService.listAll();
    }

    @GetMapping("/getEventById")
    public ResponseEntity<Event> getEventById(@RequestParam Long eventId) {
        Optional<Event> optionalEvent = eventService.getEventById(eventId);
        if (optionalEvent.isPresent()) {
            return ResponseEntity.ok(optionalEvent.get());
        } else {
            return ResponseEntity.notFound().build();
        }
    }

    @GetMapping("/getEventsByAdvertiser")
    public List<Event> getEventsByAdvertiser(@RequestParam Long advertiserId) {
        return eventService.getEventsByAdvertiser(advertiserId);
    }

    @GetMapping("/getPostsByEventId")
    public List<Post> getPostsByEventId(@RequestParam Long eventId) {
        return eventService.getPostsByEventId(eventId);
    }

    @GetMapping("/{eventId}/signedUpUsers")
    public List<Long> getSignedUpUsers(@PathVariable Long eventId) {
        return eventService.getSignedUpUsers(eventId);
    }

    @PostMapping("/{eventId}/signUp")
    public void signUpUser(@PathVariable Long eventId, @RequestParam Long userId) {
        eventService.addSignedUpUser(eventId, userId);
    }

    @PostMapping("/{eventId}/cancelSignUp")
    public void cancelSignUpUser(@PathVariable Long eventId, @RequestParam Long userId) {
        eventService.removeSignedUpUser(eventId, userId);
    }

    @PostMapping("/addEvent")
    public ResponseEntity<Event> addEvent(@RequestBody Event event) {
        Event newEvent = eventService.addEvent(event);
        return new ResponseEntity<>(newEvent, HttpStatus.CREATED);
    }

    @PutMapping("/editEvent/{eventId}")
    public ResponseEntity<Event> editEvent(@PathVariable Long eventId, @RequestBody Event event) {
        Event updatedEvent = eventService.editEvent(eventId, event);
        return new ResponseEntity<>(updatedEvent, HttpStatus.OK);
    }

    @DeleteMapping("/deleteEvent/{eventId}")
    public ResponseEntity<?> deleteEvent(@PathVariable Long eventId) {
        eventService.deleteEvent(eventId);
        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }

}
