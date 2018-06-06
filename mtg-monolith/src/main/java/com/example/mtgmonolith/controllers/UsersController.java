package com.example.mtgmonolith.controllers;


import com.example.mtgmonolith.models.User;
import com.example.mtgmonolith.repositories.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class UsersController {

    @Autowired
    private UserRepository userRepository;

    //this route creates a new user and returns them
    @PostMapping("/users")
    public User createNewUser(@RequestBody User newUser){
        return  userRepository.save(newUser);
    }
    //this route finds a user by username and returns them
    @GetMapping("/login")
    public User findByusername(@RequestBody String loginQuery){
        return userRepository.findByuserName(loginQuery);
    }
}