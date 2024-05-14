package com.example.polievent.service;


import com.example.polievent.DAO.User;
import com.example.polievent.DAO.UserRepository;
import jakarta.transaction.Transactional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
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
    public void addUser(User user){
        Optional<User> userOptional =userRepository.findUserByEmail(user.getEmail());
        if(userOptional.isPresent()){
            throw new IllegalStateException("Email taken");
        }
        userRepository.save(user);
    }
}
