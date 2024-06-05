package com.espto.espto.service;

import com.espto.espto.common.GenericService;
import com.espto.espto.domain.Event;
import com.espto.espto.domain.EventoHorario;
import com.espto.espto.domain.EventoParticipante;
import com.espto.espto.domain.WeeklyScheduleDayWeek;
import com.espto.espto.dto.EventDashboard;
import com.espto.espto.repository.EventRepository;
import com.espto.espto.util.DateUtil;
import org.springframework.stereotype.Service;

import java.time.DayOfWeek;
import java.time.LocalDate;
import java.time.LocalDateTime;
import java.time.temporal.TemporalAdjusters;
import java.util.ArrayList;
import java.util.Comparator;
import java.util.List;
import java.util.Set;

@Service
public class EventService extends GenericService<Event, Long, EventRepository> {

    private final UserService userService;

    public EventService(EventRepository repository, UserService userService) {
        super(repository);
        this.userService = userService;
    }

    public List<EventDashboard> findAllByLocation_city_id(Long cityId) {
        return repository.findAllByLocation_city_id(cityId)
                .stream()
                .map(event ->
                        EventDashboard.builder()
                                .id(event.getId())
                                .idUser(event.getUserCreator().getId())
                                .sportType(event.getEsporteTipo())
                                .amountParticipants(event.getQuantidadeParticipantes())
                                .amountActiveParticipants(event.getParticipants().size())
                                .local(event.getLocation().getLocal())
                                .nextSchedule(
                                        event.getHorarios()
                                                .stream()
                                                .max(Comparator.comparing(EventoHorario::getHorarioComeco))
                                                .map(eventoHorario -> formatNextSchedule(eventoHorario.getHorarioComeco(), eventoHorario.getHorarioFim()))
                                                .orElse("")
                                ).build()
                )
                .toList();
    }

    private String formatNextSchedule(LocalDateTime startDate, LocalDateTime endDate) {
        return DateUtil.format(startDate) + " à " + DateUtil.format(endDate);
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

        event.setHorarios(this.createEventSchedules(event));

        return save(event);

    }

    public List<EventoHorario> createEventSchedules(Event event) {
        switch (event.getConfigHorario().getTipo()) {
            case NAO_SE_REPETE -> {
                return List.of(
                        EventoHorario.builder()
                                .horarioComeco(event.getConfigHorario().getUniqueSchedule().getStartSchedule())
                                .horarioFim(event.getConfigHorario().getUniqueSchedule().getEndSchedule())
                                .build()
                );
            }
            case SEMANAL -> {
                var schedules = new ArrayList<EventoHorario>();

                LocalDate today = LocalDate.now();
                LocalDate endOfYear = today.with(TemporalAdjusters.lastDayOfYear());

                while (!today.isAfter(endOfYear)) {
                    for (WeeklyScheduleDayWeek dayOfWeek : event.getConfigHorario().getHorarioSemanal().getDaysWeek()) {
                        LocalDate eventDate = today.with(TemporalAdjusters.nextOrSame(DayOfWeek.of(dayOfWeek.getDayWeek().getCodeDay())));

                        if (!eventDate.isBefore(today)) {
                            schedules.add(
                                    EventoHorario.builder()
                                            .horarioComeco(eventDate.atTime(event.getConfigHorario().getHorarioSemanal().getStartHour().toLocalTime()))
                                            .horarioFim(eventDate.atTime(event.getConfigHorario().getHorarioSemanal().getEndHour().toLocalTime()))
                                            .build()
                            );
                        }
                    }
                    today = today.plusWeeks(1);
                }
                return schedules;
            }
        }
        return null;
    }

    public void participateEvent(Long idUser, Long idEvent) {
        findById(idEvent).ifPresent(event -> {
            event.getParticipants().add(
                    EventoParticipante.builder()
                            .event(event)
                            .user(userService.findById(idUser))
                            .frequenciaProximoEvento(true)
                            .build()
            );
            save(event);
        });
    }

}
