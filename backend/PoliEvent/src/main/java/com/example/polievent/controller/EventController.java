package com.example.polievent.controller;

import com.example.polievent.DAO.Event;
import com.example.polievent.service.EventService;
import jakarta.servlet.http.HttpServletRequest;
import org.springframework.beans.factory.annotation.Autowired;
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

    @GetMapping("/getEventsByAdvertiser")
    public List<Event> getEventsByAdvertiser(@RequestParam Long advertiserId) {
        return eventService.getEventsByAdvertiser(advertiserId);
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

}
