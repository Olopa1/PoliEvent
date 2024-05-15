package com.example.polievent.testData;

import com.example.polievent.DAO.User;
import com.example.polievent.DAO.UserRepository;
import org.springframework.boot.CommandLineRunner;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

import java.time.LocalDate;
import java.time.Month;
import java.util.List;

@Configuration
public class userConfig {

    @Bean
    CommandLineRunner commandLineRunner(UserRepository repository){
        return args -> {
            User dominik = new User(
                1L,"Dominik","Klimczak","","jakis@email.com","Status","123", LocalDate.of(2002, Month.DECEMBER,2));
            User jan = new User(
                    2L,"Jan","Nowak","","jakis2@email.com","Status1","123", LocalDate.of(1999, Month.JULY,12));
        repository.saveAll(List.of(dominik,jan));
        };
    }
}
