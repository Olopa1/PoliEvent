import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;
import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.time.LocalDateTime;

@Service
public class PostService {

    @Autowired
    private PostRepository postRepository;

    public Post addPost(Long eventId, String title, String content, MultipartFile image) throws IOException {
        // Zapisz plik na serwerze
        String uploadDir = "./uploads/";
        Path uploadPath = Paths.get(uploadDir);
        if (!Files.exists(uploadPath)) {
            Files.createDirectories(uploadPath);
        }
        String fileName = title.replaceAll("\\s+", "") + "_" + LocalDateTime.now() + "_" + image.getOriginalFilename();
        Path filePath = uploadPath.resolve(fileName);
        Files.copy(image.getInputStream(), filePath);

        // Zapisz ścieżkę do pliku w bazie danych
        Post post = new Post(title, fileName, content, eventId);
        return postRepository.save(post);
    }

    // Inne metody serwisu do obsługi innych operacji na postach
}
