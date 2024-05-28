package com.espto.espto.resource;

import com.espto.espto.common.GenericResource;
import com.espto.espto.domain.Evento;
import com.espto.espto.service.EventoService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping(path = "evento")
public class EventoResource extends GenericResource<Evento, Long, EventoService> {

    public EventoResource(EventoService service) {
        super(service);
    }

    @GetMapping(path = "find-all-by-city/{cityId}")
    public ResponseEntity<List<Evento>> findAllByCity(@PathVariable Long cityId) {
        return ResponseEntity.ok(service.findAllByLocation_city_id(cityId));
    }


}
