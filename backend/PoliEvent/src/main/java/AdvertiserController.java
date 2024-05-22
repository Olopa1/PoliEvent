import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import java.util.List;

@RestController
@RequestMapping("/api")
public class AdvertiserController {

    @Autowired
    private AdvertiserService advertiserService;

    @PostMapping("/advertisers")
    public ResponseEntity<Advertiser> addAdvertiser(@RequestBody Advertiser advertiser) {
        Advertiser newAdvertiser = advertiserService.addAdvertiser(advertiser);
        return new ResponseEntity<>(newAdvertiser, HttpStatus.CREATED);
    }

    @GetMapping("/advertisers")
    public ResponseEntity<List<Advertiser>> getAllAdvertisers() {
        List<Advertiser> advertisers = advertiserService.getAllAdvertisers();
        return new ResponseEntity<>(advertisers, HttpStatus.OK);
    }

    // TODO: metoda do edycji
}
