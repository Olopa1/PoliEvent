package com.example.polievent.DAO;
import jakarta.persistence.*;
import lombok.*;

import java.time.LocalDate;
import java.time.LocalTime;
import java.util.ArrayList;
import java.util.List;

@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter

@Entity
@Table(
        name="events",
        schema = "polievent",
        uniqueConstraints = {
                @UniqueConstraint(
                        name = "event_title_uq",
                        columnNames = "title"
                )
        }
)
public class Event {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String title;
    private LocalDate date;
    private LocalTime startTime;
    private String place;
    private String picturePath;
    private String description;
    private String status;

    @JoinColumn(name = "advertiser_id", nullable = false)
    private Long advertiserId;

    @Getter
    @ElementCollection
    private List<Long> signedUpUsers = new ArrayList<>();

    @Getter
    @OneToMany(mappedBy = "eventId", cascade = CascadeType.ALL)
    private List<Post> posts = new ArrayList<>();

    public void addSignedUpUser(Long userId) {
        if (!signedUpUsers.contains(userId)) {
            signedUpUsers.add(userId);
        }
    }

    public void removeSignedUpUser(Long userId) {
        signedUpUsers.remove(userId);
    }

}
