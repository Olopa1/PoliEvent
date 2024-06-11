package com.example.polievent.DAO;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface EventRepository extends JpaRepository <Event, Long> {
    @Query("SELECT u FROM Event u WHERE u.id = ?1")
    Optional<Post> findEventByID(Long id);
    //@Query("SELECT u FROM Event u WHERE u.advertiser = ?1")
    //List<Post> findEventByAdvertiser(User advertiser); //not sure if this will work
    @Query("SELECT u FROM Event u WHERE u.title = ?1")
    Optional<Post> findEventByTitle(String title);
}