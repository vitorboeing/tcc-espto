package com.espto.espto.service;

import com.espto.espto.common.GenericService;
import com.espto.espto.domain.EventSchedule;
import com.espto.espto.domain.EventScheduleUserFrequency;
import com.espto.espto.repository.EventScheduleRepository;
import org.springframework.stereotype.Service;

@Service
public class EventScheduleService extends GenericService<EventSchedule, Long, EventScheduleRepository> {

    public EventScheduleService(EventScheduleRepository repository) {
        super(repository);
    }

    public void setUserFrequency(Long idEventSchedule, Long idEventScheduleUserFrequency, Boolean frequency) {
        findById(idEventSchedule).ifPresent(eventSchedule -> {
            eventSchedule.getUserFrequencies()
                    .stream()
                    .filter(eventScheduleUserFrequency -> eventScheduleUserFrequency.getId().equals(idEventScheduleUserFrequency))
                    .forEach(eventScheduleUserFrequency -> eventScheduleUserFrequency.setFrequency(frequency));

            eventSchedule.setConfirmedParticipants(
                    (int) eventSchedule.getUserFrequencies()
                            .stream()
                            .filter(EventScheduleUserFrequency::getFrequency)
                            .count()
            );

            save(eventSchedule);
        });
    }

}
