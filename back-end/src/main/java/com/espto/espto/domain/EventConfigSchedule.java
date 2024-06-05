package com.espto.espto.domain;

import com.espto.espto.enums.EventoHorarioTipo;
import com.fasterxml.jackson.annotation.JsonManagedReference;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;
import java.io.Serializable;

@Getter
@AllArgsConstructor
@NoArgsConstructor
@Entity
@Table(name = "evento_config_horario")
public class EventConfigSchedule implements Serializable {

    @Id
    @Column(name = "id_evento_config_horario")
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Setter
    @Enumerated
    private EventoHorarioTipo tipo;

    @Setter
    @OneToOne(cascade = CascadeType.ALL)
    @JsonManagedReference(value = "horario_semanal")
    @JoinColumn(name = "id_horario_semanal")
    private HorarioSemanal horarioSemanal;

    @Setter
    @OneToOne(cascade = CascadeType.ALL)
    @JoinColumn(name = "id_horario_unico")
    @JsonManagedReference(value = "unique_schedule")
    private UniqueSchedule uniqueSchedule;


}
