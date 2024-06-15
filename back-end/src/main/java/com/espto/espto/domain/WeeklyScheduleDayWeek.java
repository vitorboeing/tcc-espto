package com.espto.espto.domain;

import com.espto.espto.enums.DayWeek;
import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.*;

import javax.persistence.*;

@Getter
@Builder
@AllArgsConstructor
@NoArgsConstructor
@Entity
public class WeeklyScheduleDayWeek {

    @Id
    @Column(name = "id_weekly_schedule_day_week")
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Setter
    @ManyToOne
    @JsonIgnore
    @JoinColumn(name = "id_horario_semanal")
    private HorarioSemanal horarioSemanal;

    @Setter
    private DayWeek dayWeek;

}
