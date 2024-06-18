package com.example.polievent.controller;
import java.util.*;
import com.example.polievent.DAO.Post;
import com.example.polievent.DTO.UserPostRequest;
import com.example.polievent.service.PostService;
import jakarta.servlet.http.HttpServletRequest;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import org.springframework.http.ResponseEntity;

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
    public ResponseEntity<Post> savePost(@RequestBody Post post){
        Post savedPost = postService.addPost(post);
        System.out.println("Dodano post");
        return ResponseEntity.ok(savedPost);
    }
    @PutMapping("/addInterestedUsers")
    public void addIntrestedUser(@RequestBody UserPostRequest userPostRequest){
        Long postId = userPostRequest.getPostId();
        Integer userId = userPostRequest.getUserId();
        postService.addInterestedUserToPost(postId, userId);
    }
    @PutMapping("/addMaybeUsers")
    public void addMaybeIntrestedUser(@RequestBody UserPostRequest userPostRequest){
        Long postId = userPostRequest.getPostId();
        Integer userId = userPostRequest.getUserId();
        postService.addMaybeUserToPost(postId, userId);
    }
    @PutMapping("/addNotIntrestedUsers")
    public void addNotIntrestedUser(@RequestBody UserPostRequest userPostRequest){
        Long postId = userPostRequest.getPostId();
        Integer userId = userPostRequest.getUserId();
        postService.addNotIntrestedUserToPost(postId, userId);
    }
    @DeleteMapping("/deleteInterestedUsers")
    public void deleteIntrestedUser(@RequestBody UserPostRequest userPostRequest){
        Long postId = userPostRequest.getPostId();
        Integer userId = userPostRequest.getUserId();
        postService.deleteIntrestedUser(postId, userId);
    }
    @DeleteMapping("/deleteMaybeUsers")
    public void deleteMaybeIntrestedUser(@RequestBody UserPostRequest userPostRequest){
        Long postId = userPostRequest.getPostId();
        Integer userId = userPostRequest.getUserId();
        postService.deleteMaybeUser(postId, userId);
    }
    @DeleteMapping("/deleteNotIntrestedUsers")
    public void deleteNotIntrestedUser(@RequestBody UserPostRequest userPostRequest){
        Long postId = userPostRequest.getPostId();
        Integer userId = userPostRequest.getUserId();
        postService.deleteNotIntrestedUser(postId, userId);
    }
    @PutMapping("/verifyPost")
    public void verifyPost(@RequestBody Post post)
    {
        Long postId=post.getId();
        postService.verifyPost(postId);
        System.out.println("Pomyslnie zweryfikowano post");
    }
    @DeleteMapping("/deletePost")
    public void deletePost(@RequestBody Post post) {
        Long postId = post.getId();
        postService.deletePost(postId);
        System.out.println("Pomyślnie usunięto post");
    }

}
