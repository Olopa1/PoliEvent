package com.example.polievent.controller;

import java.util.*;
import com.example.polievent.DAO.User;
import com.example.polievent.service.UserService;
import jakarta.servlet.http.HttpServletRequest;
import org.springframework.beans.factory.annotation.Autowired;
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

    @GetMapping("/fetchUserLogin")
    public Optional<User> fetchLoginAndEmail(@RequestParam String email,@RequestParam String password){
        return userService.findOneByEmailAndPassword(email,password);
    }

    @GetMapping("/")
    @PostMapping("/saveUser")
    public void registerNewUser(@RequestBody User user){
        userService.addUser(user);
        System.out.println("Dodano");
    }
}
