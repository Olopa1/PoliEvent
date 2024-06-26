package com.example.polievent.service;
import com.example.polievent.DAO.*;
import jakarta.transaction.Transactional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import java.util.List;
import java.util.Optional;

@Service
@Transactional
public class PostService {
    @Autowired
    private final PostRepository postRepository;

    public PostService(PostRepository postRepository){
        this.postRepository = postRepository;
    }

    public List<Post> listAllVerified(){
        return postRepository.findPostsByVerified(1);
    }
    public List<Post> listAllNotVerified()
    {
        return postRepository.findPostsByVerified(0);
    }

    public Post findLastPost(){
        List<Post> posts = postRepository.findLastAdded(1);
        if(posts.isEmpty()){
            return null;
        }
        return posts.get(posts.size() - 1);
    }

    public Post addPost(Post post){
        Optional<Post> postOptional =postRepository.findPostsByID(post.getId());
        if(postOptional.isPresent()){
            throw new IllegalStateException("ID TAKEN");
        }
        postRepository.save(post);
        return post;
    }
    public void addInterestedUserToPost(Long postId, int userId) {
        Post post = postRepository.findById(postId)
                .orElseThrow(() -> new IllegalStateException("UNKNOW POST ID"));
        if (!post.getInterestedUsers().contains(userId)) {
            post.addInterestedUser(userId);
            postRepository.save(post);
        } else {
            throw new IllegalStateException("ALREADY INTERESTED");
        }
    }
    public void addMaybeUserToPost(Long postId, int userId) {
        Post post = postRepository.findById(postId)
                .orElseThrow(() -> new IllegalStateException("UNKNOW POST ID"));
        if (!post.getMaybeInterestedUsers().contains(userId)) {
            post.addMaybeUser(userId);
            postRepository.save(post);
        } else {
            throw new IllegalStateException("ALREADY MAYBE INTERESTED");
        }
    }
    public void addNotIntrestedUserToPost(Long postId, int userId) {
        Post post = postRepository.findById(postId)
                .orElseThrow(() -> new IllegalStateException("UNKNOW POST ID"));
        if (!post.getNotInterestedUsers().contains(userId)) {
            post.addNotIntrestedUser(userId);
            postRepository.save(post);
        } else {
            throw new IllegalStateException("ALREADY NOT INTERESTED");
        }
    }
    public void deleteIntrestedUser(Long postId,int userId)
    {
        Post post = postRepository.findById(postId)
                .orElseThrow(() -> new IllegalStateException("UNKNOW POST ID"));
        if(post.getInterestedUsers().contains(userId))
        {
            post.deleteInterestedUser(userId);
            postRepository.save(post);
        }
    }
    public void deleteMaybeUser(Long postId,int userId)
    {
        Post post = postRepository.findById(postId)
                .orElseThrow(() -> new IllegalStateException("UNKNOW POST ID"));
        if(post.getMaybeInterestedUsers().contains(userId))
        {
            post.deleteMaybeUser(userId);
            postRepository.save(post);
        }
    }
    public void deleteNotIntrestedUser(Long postId,int userId)
    {
        Post post = postRepository.findById(postId)
                .orElseThrow(() -> new IllegalStateException("UNKNOW POST ID"));
        if(post.getNotInterestedUsers().contains(userId))
        {
            post.deleteNotIntrestedUser(userId);
            postRepository.save(post);
        }
    }
    public void verifyPost(Long postId)
    {
        Post post =postRepository.findById(postId)
                .orElseThrow(() -> new IllegalStateException("UNKNOWN POST ID"));
        if(post.getVerified()==0)
        {
            post.setVerified(1);
        }
    }

    public Post editPost(Long postId, Post updatedPost) {
        Optional<Post> optionalPost = postRepository.findById(postId);
        if (optionalPost.isPresent()) {
            Post existingPost = optionalPost.get();
            existingPost.setTitle(updatedPost.getTitle());
            existingPost.setDescription(updatedPost.getDescription());
            existingPost.setStreet(updatedPost.getStreet());
            existingPost.setCompany(updatedPost.getCompany());
            existingPost.setVerified(updatedPost.getVerified());
            existingPost.setIntrestedPeople(updatedPost.getIntrestedPeople());
            existingPost.setMaxPeople(updatedPost.getMaxPeople());
            existingPost.setDatePosted(updatedPost.getDatePosted());
            existingPost.setDateEvent(updatedPost.getDateEvent());
            existingPost.setTimeEvent(updatedPost.getTimeEvent());
            return postRepository.save(existingPost);
        } else {
            throw new RuntimeException("Post not found with ID: " + postId);
        }
    }

    public void deletePost(Long postId)
    {
        System.out.println(postId);
        Post post=postRepository.findById(postId)
                .orElseThrow(() -> new IllegalStateException("UNKNOWN POST ID"));
        postRepository.delete(post);
    }
}
