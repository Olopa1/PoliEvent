package com.example.polievent.DTO;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.Setter;

import java.time.LocalDate;
import java.time.LocalTime;

@Setter
@Getter
@AllArgsConstructor
public class EventData {
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
}
