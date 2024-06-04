package com.example.polievent.DAO;
import jakarta.persistence.*;
import lombok.*;

import java.time.LocalDate;
import java.util.*;
import java.time.LocalTime;


@Entity
@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
public class Post {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String title;
    private String description;
    private String street;
    private String company;
    private int verified;
    private int intrestedPeople;
    private int maxPeople;
    private LocalDate datePosted;
    private LocalDate dateEvent;
    private LocalTime timeEvent;
}
