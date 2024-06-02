package com.espto.espto.service;

import com.espto.espto.common.GenericService;
import com.espto.espto.domain.*;
import com.espto.espto.repository.EventRepository;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Service;

import java.time.LocalDate;
import java.time.temporal.ChronoUnit;
import java.util.ArrayList;
import java.util.List;
import java.util.Set;

@Service
public class EventService extends GenericService<Event, Long, EventRepository> {

    private static final Logger log = LoggerFactory.getLogger(EventService.class);

    private static final LocalDate LAST_DAY_OF_YEAR = LocalDate.of(LocalDate.now().getYear(), 12, 31);

    public EventService(EventRepository repository) {
        super(repository);
    }

    public List<Event> findAllByLocation_city_id(Long cityId) {
        return repository.findAllByLocation_city_id(cityId);
    }

    public Event saveS(Event event) {

        event.setQuantidadeParticipantesAtivos(1);

        event.setParticipants(
                Set.of(
                        EventoParticipante.builder()
                                .user(event.getUserCreator())
                                .frequenciaProximoEvento(true)
                                .build()
                )
        );

        return save(event);

    }

    public List<EventoHorario> createEventSchedules(EventoConfigHorario configHorario) {
        switch (configHorario.getTipo()) {
            case UMA_VEZ -> {

            }
            case SEMANAL -> {
                var schedules = new ArrayList<EventoHorario>();

                long diasRestantes = ChronoUnit.DAYS.between(configHorario.getHorarioSemanal().getStartHour(), LAST_DAY_OF_YEAR);

                long semanasRestantes = diasRestantes / 7;

                for (WeeklyScheduleDayWeek week : configHorario.getHorarioSemanal().getWeeks()) {
                    for (WeeklyScheduleDayWeek dayWeek : configHorario.getHorarioSemanal().getDaysWeek()) {

                    }
                }
            }
            case MENSAL -> {

            }
        }
        return null;
    }

}
