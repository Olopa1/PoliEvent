package com.example.polievent.service;

import com.example.polievent.DAO.Advertiser;
import com.example.polievent.DAO.UserRepository;
import jakarta.transaction.Transactional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;
import org.springframework.web.server.ResponseStatusException;

import java.util.Optional;

@Service
@Transactional
public class AdvertiserService {
    private final UserRepository userRepository;

    @Autowired
    public AdvertiserService(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    public void addAdvertiser(Advertiser advertiser) {
        Optional<Advertiser> advertiserOptional = userRepository.findUserByLogin(advertiser.getLogin()).map(user -> (Advertiser) user);
        Optional<Advertiser> advertiserOptional1 = userRepository.findUserByEmail(advertiser.getEmail()).map(user -> (Advertiser) user);
        if (advertiserOptional.isPresent()) {
            throw new ResponseStatusException(HttpStatus.CONFLICT, "Login taken");
        }
        if (advertiserOptional1.isPresent()) {
            throw new ResponseStatusException(HttpStatus.CONFLICT, "Email taken");
        }
        userRepository.save(advertiser);
    }
}
