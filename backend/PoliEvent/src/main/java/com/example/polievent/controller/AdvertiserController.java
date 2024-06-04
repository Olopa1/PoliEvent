package com.example.polievent.controller;

import com.example.polievent.DAO.Advertiser;
import com.example.polievent.DAO.User;
import com.example.polievent.service.AdvertiserService;
import jakarta.servlet.http.HttpServletRequest;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

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
    @GetMapping("/getAdvertiser")
    public List<User> list(final HttpServletRequest request){
        return advertiserService.listAll();
    }
}
