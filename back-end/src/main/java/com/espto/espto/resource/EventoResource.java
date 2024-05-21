package com.espto.espto.resource;

import com.espto.espto.common.GenericResource;
import com.espto.espto.domain.Evento;
import com.espto.espto.service.EventoService;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping(path = "evento")
public class EventoResource  extends GenericResource<Evento ,Long , EventoService> {

    public EventoResource(EventoService service) {
        super(service);
    }

}
