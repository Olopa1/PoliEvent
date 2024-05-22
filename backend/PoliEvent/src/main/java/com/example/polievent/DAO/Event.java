package com.example.polievent.DAO;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

//import org.springframework.cglib.core.Local;

import java.time.LocalDate;
import java.time.LocalTime;

@Entity
public class Event {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long eventID;
    private String tytul;
    private LocalDate data;
    private LocalTime godzinaRozpoczecia;
    private LocalTime godzinaZakonczenia;
    private String miejsce;
    private int zapisani;
    private int zainteresowani;
    private String zdjecie;
    private String opis;


    public Event() {
    }

    public Event(String title, LocalDate date, LocalTime startTime, LocalTime endTime, String location, int attendees, int interested, String image, String description) {
        this.tytul = title;
        this.miejsce = location;
        this.data = date;
        this.godzinaRozpoczecia = startTime;
        this.godzinaZakonczenia = endTime;
        this.zapisani = attendees;
        this.zainteresowani = interested;
        this.zdjecie = image;
        this.opis = description;
    }

    //TODO: stworzyc settery i gettery dla edycji
}
