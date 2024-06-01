package com.espto.espto.domain;

import com.espto.espto.enums.DiaSemana;
import com.fasterxml.jackson.annotation.JsonBackReference;
import lombok.Setter;

import javax.persistence.*;
import java.io.Serializable;
import java.util.List;

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


    @Transient
    private List<DiaSemana> diaSemanaList;


}
