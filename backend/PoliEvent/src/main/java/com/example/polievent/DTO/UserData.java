package com.example.polievent.DTO;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.Setter;

import java.time.LocalDate;
@Setter
@Getter
@AllArgsConstructor
public class UserData {
    private Long id;
    private String firstName;
    private String lastName;
    private String companyName;
    private String email;
    private String userStatus;
    private String password;
    private LocalDate dateOfBirth;
}
