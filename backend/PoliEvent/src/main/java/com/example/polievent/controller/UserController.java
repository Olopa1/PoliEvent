package com.example.polievent.controller;

import java.util.*;
import com.example.polievent.DAO.User;
import com.example.polievent.service.UserService;
import jakarta.servlet.http.HttpServletRequest;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
public class UserController {
    private final UserService userService;
    @Autowired
    public UserController(UserService userService){this.userService = userService;}

    @GetMapping("/getUser")
    public List<User> list(final HttpServletRequest request){
        return userService.listAll();
    }

    @PostMapping("/loginUser")
    @CrossOrigin(origins = "http://localhost:3000")
    public ResponseEntity<User> fetchLoginAndEmail(@RequestBody User user) {
        Optional<User> foundUser = userService.findOneByEmailAndPassword(user.getEmail(), user.getPassword());
        if (foundUser.isPresent()) {
            User userEntity = foundUser.get();
            if ("admin".equals(userEntity.getUserStatus())) {
                return ResponseEntity.status(201).body(userEntity);
            }
            else if ("advertiser".equals(userEntity.getUserStatus())) {
                return ResponseEntity.status(202).body(userEntity);
            } else {

                return ResponseEntity.status(200).body(userEntity);
            }
        } else {
            return ResponseEntity.status(401).body(null);
        }
    }

    @PostMapping("/saveUser")
    @CrossOrigin(origins = "http://localhost:3000")
    public void registerNewUser(@RequestBody User user){
        userService.addUser(user);
        System.out.println("Dodano");
    }

    @GetMapping("/getUserById")
    public ResponseEntity<User> getUserById(@RequestParam Long id){
        Optional<User> foundUser = userService.findOneById(id);
        if (foundUser.isPresent()) {
            User userEntity = foundUser.get();
            return ResponseEntity.status(200).body(userEntity);
        }
        return ResponseEntity.status(401).body(null);
    }
}
