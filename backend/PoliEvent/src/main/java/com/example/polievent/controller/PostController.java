import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;
import java.io.IOException;
import java.util.List;

@RestController
@RequestMapping("/api")
public class PostController {

    @Autowired
    private PostService postService;

    @PostMapping("/events/{eventId}/posts")
    public ResponseEntity<Post> addPost(@PathVariable Long eventId,
                                        @RequestParam("title") String title,
                                        @RequestParam("content") String content,
                                        @RequestParam("image") MultipartFile image) throws IOException {
        Post post = postService.addPost(eventId, title, content, image);
        return new ResponseEntity<>(post, HttpStatus.CREATED);
    }

    // Inne metody kontrolera do obsługi innych żądań HTTP, takie jak edycja, usuwanie itp.
}
