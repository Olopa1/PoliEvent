package com.example.polievent.controller;
import java.util.*;
import com.example.polievent.DAO.Post;
import com.example.polievent.service.PostService;
import com.example.polievent.service.UserService;
import jakarta.servlet.http.HttpServletRequest;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
@RestController
@CrossOrigin(origins = "http://localhost:3000")
public class PostController {
    private final PostService postService;
    @Autowired
    public PostController(PostService postService){this.postService = postService;}

    @GetMapping("/getPost")
    public List<Post> list(final HttpServletRequest request){
        return postService.listAll();
    }

    @PostMapping("/savePost")
    public void registerNewUser(@RequestBody Post post){
        postService.addPost(post);
        System.out.println("Dodano post");
    }
}
