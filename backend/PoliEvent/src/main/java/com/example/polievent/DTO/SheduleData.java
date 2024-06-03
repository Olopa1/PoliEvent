package com.example.polievent.DTO;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.Setter;

@Setter
@Getter
@AllArgsConstructor
public class SheduleData {
    private Long id;
    private String text;
    private String startDate;
    private String endDate;
    private Long userId;
}
