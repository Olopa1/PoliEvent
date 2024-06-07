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
    @ElementCollection
    private List<Integer> interestedUsers;
    @ElementCollection
    private List<Integer> notInterestedUsers;
    @ElementCollection
    private List<Integer> maybeInterestedUsers;
    public void addInterestedUser(int userID)
    {
        intrestedPeople+=1;
        interestedUsers.add(userID);
    }
    public void deleteInterestedUser(int userID)
    {
        intrestedPeople-=1;
        interestedUsers.remove(Integer.valueOf(userID));
    }
    public void addMaybeUser(int userID)
    {
        maybeInterestedUsers.add(userID);
    }
    public void deleteMaybeUser(int userID)
    {
        maybeInterestedUsers.remove(Integer.valueOf(userID));;
    }
    public void addNotIntrestedUser(int userID)
    {
        notInterestedUsers.add(userID);
    }
    public void deleteNotIntrestedUser(int userID)
    {
        notInterestedUsers.remove(Integer.valueOf(userID));
    }
}
