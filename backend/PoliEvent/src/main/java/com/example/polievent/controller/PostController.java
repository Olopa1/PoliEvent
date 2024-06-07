package com.example.polievent.controller;
import java.util.*;
import com.example.polievent.DAO.Post;
import com.example.polievent.DAO.User;
import com.example.polievent.DTO.UserPostRequest;
import com.example.polievent.service.PostService;
import com.example.polievent.service.UserService;
import jakarta.servlet.http.HttpServletRequest;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import org.springframework.http.ResponseEntity;
import org.springframework.web.service.annotation.PutExchange;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
public class PostController {
    private final PostService postService;
    @Autowired
    public PostController(PostService postService){this.postService = postService;}

    @GetMapping("/getVerifiedPost")
    public List<Post> getVerifiedPosts(final HttpServletRequest request){
        return postService.listAllVerified();
    }
    @GetMapping("/getNoVerifiedPost")
    public List<Post> getNoVerifiedPosts(final HttpServletRequest request)
    {
        return postService.listAllNotVerified();
    }
    @PostMapping("/savePost")
    public void registerNewUser(@RequestBody Post post){
        postService.addPost(post);
        System.out.println("Dodano post");
    }
    @PutMapping("/addInterestedUsers")
    public void addIntrestedUser(@RequestBody UserPostRequest userPostRequest){
        Long postId = userPostRequest.getPostId();
        Integer userId = userPostRequest.getUserId();
        postService.addInterestedUserToPost(postId, userId);
        System.out.println("Dodano");
    }
    @PutMapping("/addMaybeUsers")
    public void addMaybeIntrestedUser(@RequestBody UserPostRequest userPostRequest){
        Long postId = userPostRequest.getPostId();
        Integer userId = userPostRequest.getUserId();
        postService.addMaybeUserToPost(postId, userId);
        System.out.println("Dodano");
    }
    @PutMapping("/addNotIntrestedUsers")
    public void addNotIntrestedUser(@RequestBody UserPostRequest userPostRequest){
        Long postId = userPostRequest.getPostId();
        Integer userId = userPostRequest.getUserId();
        postService.addNotIntrestedUserToPost(postId, userId);
        System.out.println("Dodano");
    }
    @DeleteMapping("/deleteInterestedUsers")
    public void deleteIntrestedUser(@RequestBody UserPostRequest userPostRequest){
        Long postId = userPostRequest.getPostId();
        Integer userId = userPostRequest.getUserId();
        postService.deleteIntrestedUser(postId, userId);
        System.out.println("usunieto");
    }
    @DeleteMapping("/deleteMaybeUsers")
    public void deleteMaybeIntrestedUser(@RequestBody UserPostRequest userPostRequest){
        Long postId = userPostRequest.getPostId();
        Integer userId = userPostRequest.getUserId();
        postService.deleteMaybeUser(postId, userId);
        System.out.println("ununieto");
    }
    @DeleteMapping("/deleteNotIntrestedUsers")
    public void deleteNotIntrestedUser(@RequestBody UserPostRequest userPostRequest){
        Long postId = userPostRequest.getPostId();
        Integer userId = userPostRequest.getUserId();
        postService.deleteNotIntrestedUser(postId, userId);
        System.out.println("usunieto");
    }
}
