package com.espto.espto.resource;

import com.espto.espto.common.GenericResource;
import com.espto.espto.domain.Event;
import com.espto.espto.dto.EventCalendar;
import com.espto.espto.dto.EventDashboard;
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
    public ResponseEntity<List<EventDashboard>> findAllForDashboard(@PathVariable Long cityId) {
        return ResponseEntity.ok(service.findAllForDashboard(cityId));
    }

    @GetMapping(path = "find-all-calendar/{cityId}")
    public ResponseEntity<List<EventCalendar>> findAllForCalendar(@PathVariable Long cityId) {
        return ResponseEntity.ok(service.findAllForCalendar(cityId));
    }

    @PostMapping(path = "save-event")
    public ResponseEntity<Event> save(@RequestBody @Valid Event body) {
        return ResponseEntity.ok(service.saveS(body));
    }

    @PostMapping(path = "participate-event/{idUser}/{idEvent}")
    public void participateEvent(@PathVariable Long idUser, @PathVariable Long idEvent) {
        service.participateEvent(idUser, idEvent);
    }


}
