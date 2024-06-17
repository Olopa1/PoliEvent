package com.example.polievent.service;


import com.example.polievent.DAO.Shedule;
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
    public Optional<User> findOneByEmailAndPassword(String email,String password){
        return userRepository.findUserByEmailAndPassword(email,password);
    }
    public Optional<User> findOneById(long id){return userRepository.findUserById(id);}
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

    public void deleteUser(Long id){
        Optional<User> user = userRepository.findUserById(id);
        System.out.println("id: " + id);
        if(user.isPresent()){
            userRepository.deleteById(id);
        }
        else {
            throw new IllegalStateException("ID not found");
        }
    }
    public User updateUser(Long id,User userToChange){
        Optional<User> userFound = userRepository.findUserById(id);
        if(userFound.isPresent()){
            User user = userFound.get();
            user.setUserStatus(userToChange.getUserStatus());
            user.setEmail(userToChange.getEmail());
            user.setLogin(userToChange.getLogin());
            user.setFirstName(userToChange.getFirstName());
            user.setPassword(userToChange.getPassword());
            user.setLastName(userToChange.getLastName());
            user.setDateOfBirth(userToChange.getDateOfBirth());
            return userRepository.save(user);
        }
        else{
            throw new IllegalStateException("ID not found");
        }
    }
}
