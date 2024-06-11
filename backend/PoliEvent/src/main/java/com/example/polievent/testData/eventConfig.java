package com.example.polievent.testData;

import com.example.polievent.DAO.Event;
import com.example.polievent.DAO.EventRepository;
import org.springframework.boot.CommandLineRunner;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

import java.time.LocalDate;
import java.time.LocalTime;
import java.time.Month;
import java.util.List;

@Configuration
public class eventConfig {
    @Bean
    CommandLineRunner eventCommandLineRunner(EventRepository repository){
        return args -> {
            Event koncert = new Event(
                    1L,
                    "Koncert Charytatywny",
                    LocalDate.of(2024, Month.APRIL,15),
                    LocalTime.of(16, 0),
                    "Manufaktura",
                    "null",
                    "Zapraszamy na koncert!",
                    "active",
                    4L);
            Event spotkanie = new Event(
                    2L,
                    "Spotkanie w terenie",
                    LocalDate.of(2024, Month.APRIL,24),
                    LocalTime.of(12, 0),
                    "Park",
                    "null",
                    "Przyjdz na spacer!",
                    "active",
                    4L);
            repository.saveAll(List.of(koncert, spotkanie));
        };
    }
}
