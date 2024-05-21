package com.espto.espto.service;

import com.espto.espto.common.GenericService;
import com.espto.espto.domain.Evento;
import com.espto.espto.repository.EventoRepostory;
import org.springframework.stereotype.Service;

@Service
public class EventoService extends GenericService<Evento, Long , EventoRepostory> {

    public EventoService(EventoRepostory repository) {
        super(repository);
    }
}
