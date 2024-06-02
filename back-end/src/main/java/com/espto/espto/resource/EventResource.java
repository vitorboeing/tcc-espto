package com.espto.espto.resource;

import com.espto.espto.common.GenericResource;
import com.espto.espto.domain.Event;
import com.espto.espto.service.EventService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.List;

@RestController
@RequestMapping(path = "evento")
public class EventResource extends GenericResource<Event, Long, EventService> {

    public EventResource(EventService service) {
        super(service);
    }

    @GetMapping(path = "find-all-by-city/{cityId}")
    public ResponseEntity<List<Event>> findAllByCity(@PathVariable Long cityId) {
        return ResponseEntity.ok(service.findAllByLocation_city_id(cityId));
    }

    @PostMapping(path = "save-event")
    public ResponseEntity<Event> save(@RequestBody @Valid Event body) {
        return ResponseEntity.ok(service.saveS(body));
    }


}
