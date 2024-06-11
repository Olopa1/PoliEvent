package com.example.polievent.DAO;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface EventRepository extends JpaRepository <Event, Long> {
    @Query("SELECT u FROM Event u WHERE u.id = ?1")
    Optional<Event> findEventByID(Long id);
    //@Query("SELECT u FROM Event u WHERE u.advertiser = ?1")
    //List<Post> findEventByAdvertiser(User advertiser); //not sure if this will work
    @Query("SELECT u FROM Event u WHERE u.title = ?1")
    Optional<Event> findEventByTitle(String title);
    @Query("SELECT u FROM Event u WHERE u.advertiserId = ?1")
    List<Event> findByAdvertiserId(Long advertiserId);
}