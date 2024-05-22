package com.example.polievent.DAO;
import jakarta.persistence.*;
import lombok.*;
import java.util.*;
import java.io.Serializable;


@Entity
@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
public class Post implements Serializable {
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
    private Date datePosted;
    private Date dateEvent;
}
