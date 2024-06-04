package com.example.polievent.controller;

import com.example.polievent.DAO.Advertiser;
import com.example.polievent.service.AdvertiserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
public class AdvertiserController {
    private final AdvertiserService advertiserService;

    @Autowired
    public AdvertiserController(AdvertiserService advertiserService) {
        this.advertiserService = advertiserService;
    }

    @PostMapping("/saveAdvertiser")
    public void addAdvertiser(@RequestBody Advertiser advertiser) {
        advertiserService.addAdvertiser(advertiser);
        System.out.println("Advertiser added");
    }
}
