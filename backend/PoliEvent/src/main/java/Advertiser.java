import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class Advertiser {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String firstName;
    private String lastName;
    private String companyName;
    private int userStatus;
    private String email;
    private String password;

    public Advertiser() {
    }

    public Advertiser(String firstName, String lastName, String companyName, int userStatus, String email, String password) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.companyName = companyName;
        this.userStatus = userStatus;
        this.email = email;
        this.password = password;
    }

    // TODO: dodac settery i gettery do edycji profilu
}
