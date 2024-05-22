package com.example.polievent.service;
import com.example.polievent.DAO.PostRepository;
import com.example.polievent.DAO.Post;
import com.example.polievent.DAO.UserRepository;
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

    public List<Post> listAll(){return postRepository.findAll();}
    public void addPost(Post post){
        Optional<Post> postOptional =postRepository.findPostsByID(post.getId());
        if(postOptional.isPresent()){
            throw new IllegalStateException("ID TAKEN");
        }
        postRepository.save(post);
    }
}
