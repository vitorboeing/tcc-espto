package com.espto.espto.domain;

import com.fasterxml.jackson.annotation.JsonBackReference;
import lombok.*;

import javax.persistence.*;
import java.io.Serializable;
import java.time.LocalDateTime;
import java.util.List;

@Getter
@Builder
@AllArgsConstructor
@NoArgsConstructor
@Entity
public class HorarioSemanal implements Serializable {

    @Id
    @Column(name = "id_horario_semanal")
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Setter
    @OneToOne
    @JoinColumn(name = "id_evento_config_horario")
    @JsonBackReference(value = "horario_semanal")
    private EventConfigSchedule configHorario;

    @Setter
    private LocalDateTime startHour;

    @Setter
    private LocalDateTime endHour;

    @Setter
    @OneToMany(cascade = CascadeType.ALL, mappedBy = "horarioSemanal", fetch = FetchType.LAZY, orphanRemoval = true)
    private List<WeeklyScheduleDayWeek> daysWeek;

}
