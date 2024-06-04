package com.example.polievent.DAO;

import jakarta.persistence.*;
import lombok.*;

import java.time.LocalDate;
import java.time.LocalTime;

@Entity
@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
public class Event {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String title;
    private String place;
    private LocalDate date;
    private LocalTime startTime;
    private LocalTime endTime;
    private String picture;
    private String description;
    private String status;
    @ManyToOne
    @JoinColumn(name = "user_id", nullable = false)
    private Advertiser advertiser;
}
