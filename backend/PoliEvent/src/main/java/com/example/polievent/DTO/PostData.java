package com.example.polievent.DTO;
import jakarta.persistence.ElementCollection;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.Setter;

import java.time.LocalDate;
import java.util.Date;
import java.util.List;

@Setter
@Getter
@AllArgsConstructor
public class PostData {
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
    private List<Integer> interestedUsers;
    private List<Integer> notInterestedUsers;
    private List<Integer> maybeInterestedUsers;
}
