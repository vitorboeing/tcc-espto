package com.espto.espto.domain;

import com.espto.espto.enums.Week;
import lombok.Builder;
import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;

@Getter
@Builder
@Entity
public class WeeklyScheduleWeek {

    @Id
    @Column(name = "id_weekly_schedule_week")
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Setter
    @ManyToOne
    @JoinColumn(name = "id_evento_config_horario")
    private EventoConfigHorario configHorario;

    @Setter
    private Week week;

}
