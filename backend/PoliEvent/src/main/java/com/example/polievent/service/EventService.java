package com.example.polievent.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.cglib.core.Local;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;
import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.time.LocalDate;
import java.time.LocalDateTime;
import java.time.LocalTime;

import com.example.polievent.DAO.Event;
import com.example.polievent.DAO.EventRepository;


@Service
public class EventService {

    @Autowired
    private EventRepository eventRepository;

    public Event addEvent(String title, String date, String startTime, String endTime, String location, MultipartFile image, String description) throws IOException {
        // Zapisz plik na serwerze
        String uploadDir = "./uploads/";
        Path uploadPath = Paths.get(uploadDir);
        if (!Files.exists(uploadPath)) {
            Files.createDirectories(uploadPath);
        }
        String fileName = title.replaceAll("\\s+", "") + "_" + LocalDateTime.now() + "_" + image.getOriginalFilename();
        Path filePath = uploadPath.resolve(fileName);
        Files.copy(image.getInputStream(), filePath);

        // Zapisz ścieżkę do pliku w bazie danych
        Event event = new Event(title, LocalDate.parse(date), LocalTime.parse(startTime), LocalTime.parse(endTime), location, 0, 0, fileName, description);
        return eventRepository.save(event);
    }

    // Inne metody serwisu do obsługi innych operacji na wydarzeniach
}
