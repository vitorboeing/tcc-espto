package com.espto.espto.dto;

import com.espto.espto.enums.EsporteTipo;
import com.espto.espto.enums.EventScheduleSituation;
import lombok.Builder;
import lombok.Getter;
import lombok.Setter;

import java.time.LocalDateTime;

@Builder
@Getter
@Setter
public class EventCalendar {

    private Long id;

    private EsporteTipo sportType;

    private EventScheduleSituation situation;

    private LocalDateTime startSchedule;

    private LocalDateTime endSchedule;


}
