package com.example.polievent.controller;

import com.example.polievent.DAO.Event;
import com.example.polievent.service.EventService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
public class EventController {
    private final EventService eventService;

    @Autowired
    public EventController(EventService eventService) {
        this.eventService = eventService;
    }

    @GetMapping("/getEvents")
    public List<Event> list() {
        return eventService.listAll();
    }

    @GetMapping("/getEventsByAdvertiser/{advertiserId}")
    public List<Event> listByAdvertiser(@PathVariable Long advertiserId) {
        return eventService.listByAdvertiser(advertiserId);
    }

    @PostMapping("/saveEvent")
    public void addEvent(@RequestBody Event event) {
        eventService.addEvent(event);
        System.out.println("Event added");
    }

    @PutMapping("/updateEvent/{id}")
    public void updateEvent(@PathVariable Long id, @RequestBody Event event) {
        eventService.updateEvent(id, event);
        System.out.println("Event updated");
    }

    @DeleteMapping("/deleteEvent/{id}")
    public void deleteEvent(@PathVariable Long id) {
        eventService.deleteEvent(id);
        System.out.println("Event deleted");
    }
}
