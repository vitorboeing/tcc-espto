package com.espto.espto.service;

import com.espto.espto.common.GenericService;
import com.espto.espto.domain.*;
import com.espto.espto.dto.EventCalendar;
import com.espto.espto.dto.EventDashboard;
import com.espto.espto.enums.EventScheduleSituation;
import com.espto.espto.repository.EventRepository;
import com.espto.espto.util.DateUtil;
import org.springframework.stereotype.Service;

import java.time.DayOfWeek;
import java.time.LocalDate;
import java.time.LocalDateTime;
import java.time.temporal.TemporalAdjusters;
import java.util.*;

import static com.espto.espto.util.DateUtil.DEFAULT_PATTERN_DATE_TIME_WITHOUT_SECONDS_FORMATTER;

@Service
public class EventService extends GenericService<Event, Long, EventRepository> {

    private final UserService userService;

    public EventService(EventRepository repository, UserService userService) {
        super(repository);
        this.userService = userService;
    }

    public List<EventDashboard> findAllForDashboard(Long cityId) {
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
                                        event.getSchedules()
                                                .stream()
                                                .min(Comparator.comparing(EventSchedule::getHorarioComeco))
                                                .map(eventSchedule -> formatNextSchedule(eventSchedule.getHorarioComeco(), eventSchedule.getHorarioFim()))
                                                .orElse("")
                                ).build()
                )
                .toList();
    }

    public List<EventCalendar> findAllForCalendar(Long cityId) {
        return repository.findAllByLocation_city_id(cityId)
                .stream()
                .map(event ->
                        event.getSchedules()
                                .stream()
                                .map(eventSchedule ->
                                        EventCalendar.builder()
                                                .id(event.getId())
                                                .sportType(event.getEsporteTipo())
                                                .situation(eventSchedule.getSituation())
                                                .startSchedule(eventSchedule.getHorarioComeco())
                                                .endSchedule(eventSchedule.getHorarioFim())
                                                .build()
                                )
                                .toList()
                )
                .flatMap(Collection::stream)
                .toList();
    }

    private String formatNextSchedule(LocalDateTime startDate, LocalDateTime endDate) {
        return DateUtil.format(startDate, DEFAULT_PATTERN_DATE_TIME_WITHOUT_SECONDS_FORMATTER) + " à " + DateUtil.format(endDate, DEFAULT_PATTERN_DATE_TIME_WITHOUT_SECONDS_FORMATTER);
    }

    public Event saveS(Event event) {

        event.setQuantidadeParticipantesAtivos(1);

        event.setParticipants(
                Set.of(
                        EventParticipant.builder()
                                .user(event.getUserCreator())
                                .frequenciaProximoEvento(true)
                                .build()
                )
        );

        event.setSchedules(this.createEventSchedules(event));

        return save(event);

    }

    public List<EventSchedule> createEventSchedules(Event event) {
        switch (event.getConfigHorario().getTipo()) {
            case NAO_SE_REPETE -> {
                return List.of(
                        EventSchedule.builder()
                                .situation(EventScheduleSituation.CONFIRMED)
                                .horarioComeco(event.getConfigHorario().getUniqueSchedule().getStartSchedule())
                                .horarioFim(event.getConfigHorario().getUniqueSchedule().getEndSchedule())
                                .build()
                );
            }
            case SEMANAL -> {
                var schedules = new ArrayList<EventSchedule>();

                LocalDate today = LocalDate.now();
                LocalDate endOfYear = today.with(TemporalAdjusters.lastDayOfYear());

                while (!today.isAfter(endOfYear)) {
                    for (WeeklyScheduleDayWeek dayOfWeek : event.getConfigHorario().getHorarioSemanal().getDaysWeek()) {
                        LocalDate eventDate = today.with(TemporalAdjusters.nextOrSame(DayOfWeek.of(dayOfWeek.getDayWeek().getCodeDay())));

                        if (!eventDate.isBefore(today)) {
                            schedules.add(
                                    EventSchedule.builder()
                                            .situation(EventScheduleSituation.CONFIRMED)
                                            .horarioComeco(eventDate.atTime(event.getConfigHorario().getHorarioSemanal().getStartHour().toLocalTime()))
                                            .horarioFim(eventDate.atTime(event.getConfigHorario().getHorarioSemanal().getEndHour().toLocalTime()))
                                            .userFrequencies(
                                                    event.getParticipants()
                                                            .stream()
                                                            .map(participant ->
                                                                    EventScheduleUserFrequency.builder()
                                                                            .user(participant.getUser())
                                                                            .frequency(true)
                                                                            .build()
                                                            )
                                                            .toList()
                                            )
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
                    EventParticipant.builder()
                            .event(event)
                            .user(userService.findById(idUser).orElse(null))
                            .frequenciaProximoEvento(true)
                            .build()
            );
            save(event);
        });
    }

//    public void setUserFrequency(Long idUser, Long idEventSchedule) {
//        findById(idEvent).ifPresent(event -> {
//            event.getParticipants().add(
//                    EventParticipant.builder()
//                            .event(event)
//                            .user(userService.findById(idUser))
//                            .frequenciaProximoEvento(true)
//                            .build()
//            );
//            save(event);
//        });
//    }

}
