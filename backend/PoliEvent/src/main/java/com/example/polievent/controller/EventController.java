package com.example.polievent.controller;

import com.example.polievent.DAO.Event;
import com.example.polievent.service.EventService;
import jakarta.servlet.http.HttpServletRequest;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

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

}
