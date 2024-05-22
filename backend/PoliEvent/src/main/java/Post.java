import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class Post {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long postID;
    private String tytul;
    private String opis;
    private Long eventID;

    public Post() {
    }

    public Post(String title, String description, Long eventID) {
        this.tytul = title;
        this.opis = description;
        this.eventID = eventID;
    }

    //TODO: dodac settery i gettery do edycji postow
}
