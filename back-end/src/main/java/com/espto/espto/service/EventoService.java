package com.espto.espto.service;

import com.espto.espto.common.GenericService;
import com.espto.espto.domain.Evento;
import com.espto.espto.repository.EventoRepostory;
import org.springframework.stereotype.Service;

@Service
public class EventoService extends GenericService<Evento, Long, EventoRepostory> {

    public EventoService(EventoRepostory repository) {
        super(repository);
    }


    public Evento saveS(Evento evento) {
        return null;
//        switch (evento.getEventoHorario().getTipo()) {
//            case UMA_VEZ ->
//        }
//        ;
//
//
//        return super.save(entity);
    }
}
