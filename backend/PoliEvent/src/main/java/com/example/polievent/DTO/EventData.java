package com.example.polievent.DTO;

import com.example.polievent.DAO.User;
import jakarta.persistence.*;

import java.time.LocalDate;
import java.time.LocalTime;

public class EventData {
    private Long id;
    private String title;
    private LocalDate date;
    private LocalTime startTime;
    private String place;
    private String picturePath;
    private String description;
    private String status;
    //private User advertiser;
}
