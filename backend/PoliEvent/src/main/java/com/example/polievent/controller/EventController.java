import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;
import java.io.IOException;
import java.util.List;

@RestController
@RequestMapping("/api")
public class EventController {

    @Autowired
    private EventService eventService;
    //TODO: utworzyc dwa pola w frontendzie na startTime i endTime---------------------------------
    @PostMapping("/events")
    public ResponseEntity<Event> addEvent(@RequestParam("title") String title,
                                          @RequestParam("date") String date,
                                          @RequestParam("startTime") String startTime,
                                          @RequestParam("endTime") String endTime,
                                          @RequestParam("location") String location,
                                          @RequestParam("image") MultipartFile image,
                                          @RequestParam("description") String description) throws IOException {
        Event event = eventService.addEvent(title, date, startTime, endTime, location, image, description);
        return new ResponseEntity<>(event, HttpStatus.CREATED);
    }

    // TODO: edycja, usuwanie wydarzen
}
