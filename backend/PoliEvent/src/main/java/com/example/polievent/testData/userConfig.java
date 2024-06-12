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
            User admin = new User(
                1L,"admin","Admin","Admin","","admin@admin.com","Admin","ZAQ!2wsx", LocalDate.of(2002, Month.DECEMBER,2));
            User test = new User(
                    3L,"test","Vlad","test","","example@email.com","user","Qwertyui1", LocalDate.of(1999, Month.JULY,12));
        repository.saveAll(List.of(admin, test));

                    3L,"test","Vl","test","","example@email.com","user","Qwertyui1", LocalDate.of(1999, Month.JULY,12));
            User admin = new User(
                    4L,"test","Vlad","test","","root@email.com","admin","Admroot1", LocalDate.of(1999, Month.JULY,12));
        repository.saveAll(List.of(dominik,jan, test, admin));
        };
    }
}
