package com.espto.espto.dto;

import com.espto.espto.enums.EsporteTipo;
import lombok.Builder;
import lombok.Getter;
import lombok.Setter;

@Builder
@Getter
@Setter
public class EventDashboard {

    private Long id;

    private Long idUser;

    private EsporteTipo sportType;

    private Integer amountParticipants;

    private Integer amountActiveParticipants;

    private String local;

    private String nextSchedule;

}
