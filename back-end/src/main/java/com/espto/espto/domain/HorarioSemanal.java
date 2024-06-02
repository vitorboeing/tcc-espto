package com.espto.espto.domain;

import com.fasterxml.jackson.annotation.JsonBackReference;
import lombok.Builder;
import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;
import java.io.Serializable;
import java.time.LocalDateTime;
import java.util.List;

@Getter
@Builder
@Entity
public class HorarioSemanal implements Serializable {

    @Id
    @Column(name = "id_horario_semanal")
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Setter
    @OneToOne
    @JoinColumn(name = "id_evento_horario")
    @JsonBackReference
    private EventoConfigHorario configHorario;

    @Setter
    private LocalDateTime startHour;

    @Setter
    private LocalDateTime endHour;

    @Setter
    @OneToMany(cascade = CascadeType.ALL, mappedBy = "configHorario", fetch = FetchType.LAZY, orphanRemoval = true)
    private List<WeeklyScheduleDayWeek> daysWeek;

    @Setter
    @OneToMany(cascade = CascadeType.ALL, mappedBy = "configHorario", fetch = FetchType.LAZY, orphanRemoval = true)
    private List<WeeklyScheduleDayWeek> weeks;


}
