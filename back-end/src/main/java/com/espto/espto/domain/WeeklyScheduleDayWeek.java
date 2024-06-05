package com.espto.espto.domain;

import com.espto.espto.enums.DayWeek;
import lombok.Builder;
import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;

@Getter
@Builder
@Entity
public class WeeklyScheduleDayWeek {

    @Id
    @Column(name = "id_weekly_schedule_day_week")
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Setter
    @ManyToOne
    @JoinColumn(name = "id_horario_semanal")
    private HorarioSemanal horarioSemanal;

    @Setter
    private DayWeek dayWeek;

}
