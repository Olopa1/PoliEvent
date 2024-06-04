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
    public ResponseEntity<Optional<User>> fetchLoginAndEmail(@RequestBody User user) {
        Optional<User> foundUser = userService.findOneByEmailAndPassword(user.getEmail(), user.getPassword());
        if (foundUser.isPresent()) {
            return ResponseEntity.ok(foundUser);
        }
//        else if(user.getUserStatus().equals("admin")){
//            return ResponseEntity.status(111).body(foundUser);
//        }
        else {
            return ResponseEntity.status(401).body(Optional.empty());
        }
    }

    @PostMapping("/saveUser")
    public void registerNewUser(@RequestBody User user){
        userService.addUser(user);
        System.out.println("Dodano");
    }
}
