package com.example.polievent.service;


import com.example.polievent.DAO.User;
import com.example.polievent.DAO.UserRepository;
import jakarta.transaction.Transactional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.HttpStatusCode;
import org.springframework.stereotype.Service;
import org.springframework.web.server.ResponseStatusException;

import java.util.List;
import java.util.Optional;

@Service
@Transactional
public class UserService {
    @Autowired
    private final UserRepository userRepository;

    public UserService(UserRepository userRepository){
        this.userRepository = userRepository;
    }

    public List<User> listAll(){return userRepository.findAll();}
    public Optional<User> listAllByFirstName(String name){return userRepository.findUserByFirstName(name);}
    public Optional<User> findOneByLoginAndPassword(String login,String password){
        return  userRepository.findUserByLoginAndPassword(login,password);
    }
    public void addUser(User user){
        Optional<User> userOptional = userRepository.findUserByLogin(user.getLogin());
        Optional<User> userOptional1 = userRepository.findUserByEmail(user.getEmail());
        if(userOptional.isPresent()){
            throw new ResponseStatusException(HttpStatus.CONFLICT,"Login taken");
        }
        if(userOptional1.isPresent()){
            throw new ResponseStatusException(HttpStatus.CONFLICT,"Email taken");
        }
        userRepository.save(user);
    }
}
