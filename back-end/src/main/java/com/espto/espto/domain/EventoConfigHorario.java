package com.espto.espto.domain;

import com.espto.espto.enums.EventoHorarioTipo;
import com.fasterxml.jackson.annotation.JsonBackReference;
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
public class EventoConfigHorario implements Serializable {

    @Id
    @Column(name = "id_evento_horario")
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Setter
    @OneToOne
    @JoinColumn(name = "id_evento")
    @JsonBackReference(value = "evento-configHorario")
    private Event event;

    @Setter
    @OneToOne
    @JoinColumn(name = "id_horario_semanal")
    private HorarioSemanal horarioSemanal;

    @Setter
    @Enumerated
    private EventoHorarioTipo tipo;

}
