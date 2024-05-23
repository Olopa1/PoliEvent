package com.example.polievent.testData;
import com.example.polievent.DAO.Post;
import com.example.polievent.DAO.PostRepository;
import org.springframework.boot.CommandLineRunner;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import java.util.Date;
import java.time.LocalDate;
import java.time.Month;
import java.util.List;
@Configuration
public class postConfig {
    @Bean
    CommandLineRunner clr(PostRepository repository){
        return args -> {
            Post first = new Post(1L,"politechnika na foodtruck","jest fajnie","Politechniczna 8","WPRE",0,0,50,LocalDate.of(2024, Month.MAY,31),LocalDate.of(2024, Month.MAY,10));
            Post sec = new Post(2L,"statki","ogieeeen","Marunska 8","qpres",0,0,100,LocalDate.of(2024, Month.MAY,31),LocalDate.of(2024, Month.MAY,12));
            repository.saveAll(List.of(first,sec));
        };
    }
}
