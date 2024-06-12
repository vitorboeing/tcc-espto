package com.espto.espto.resource;

import com.espto.espto.common.GenericResource;
import com.espto.espto.domain.EventSchedule;
import com.espto.espto.service.EventScheduleService;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping(path = "event-schedule")
public class EventScheduleResource extends GenericResource<EventSchedule, Long, EventScheduleService> {

    public EventScheduleResource(EventScheduleService service) {
        super(service);
    }

    @PostMapping(path = "set-user-frequency/{idEventSchedule}/{idEventScheduleUserFrequency}/{frequency}")
    public void setUserFrequency(@PathVariable Long idEventSchedule, @PathVariable Long idEventScheduleUserFrequency, @PathVariable Boolean frequency) {
        service.setUserFrequency(idEventSchedule, idEventScheduleUserFrequency, frequency);
    }

}
