package com.example.polievent.service;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.polievent.DAO.Advertiser;
import com.example.polievent.DAO.AdvertiserRepository;

import java.util.List;

@Service
public class AdvertiserService {

    @Autowired
    private AdvertiserRepository advertiserRepository;

    public Advertiser addAdvertiser(Advertiser advertiser) {
        //TODO: walidacja
        return advertiserRepository.save(advertiser);
    }

    public List<Advertiser> getAllAdvertisers() {
        return advertiserRepository.findAll();
    }

}
