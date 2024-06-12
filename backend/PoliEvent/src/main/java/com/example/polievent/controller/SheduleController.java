package com.example.polievent.controller;

import com.example.polievent.DAO.Shedule;
import com.example.polievent.DAO.User;
import com.example.polievent.service.SheduleService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
public class SheduleController {
    private final SheduleService sheduleService;
    @Autowired
    public SheduleController(SheduleService sheduleService){this.sheduleService = sheduleService;}
    @GetMapping("/readAllSheduels")
    public List<Shedule> list(){return sheduleService.listAll();}
    @GetMapping("/readSheduleWithId")
    @CrossOrigin(origins = "http://localhost:3000")
    public ResponseEntity<List<Shedule>> readShedulWithId(@RequestParam Long id){
        List<Shedule> sheduleFound = sheduleService.listAllWithId(id);
        if(!sheduleFound.isEmpty()){
            return ResponseEntity.ok(sheduleFound);
        }
        return ResponseEntity.status(404).body(sheduleFound);
    }
    @PostMapping("/saveShedule")
    public void addShedule(@RequestBody List<Shedule> shedule){
        for (Shedule value : shedule) {
            sheduleService.addShedule(value);
        }
        System.out.println("Dodano zajecie");
    }

    @DeleteMapping("/deleteShedule")
    @CrossOrigin(origins = "http://localhost:3000")
    public ResponseEntity<String> deleteShedule(@RequestParam Long id){
        sheduleService.deleteShedule(id);
        return ResponseEntity.ok("Shedule deleted successfully");
    }
}
