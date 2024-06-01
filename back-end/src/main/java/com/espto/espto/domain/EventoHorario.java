package com.espto.espto.domain;

import com.espto.espto.enums.EventoHorarioTipo;
import com.fasterxml.jackson.annotation.JsonBackReference;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;
import java.io.Serializable;
import java.time.LocalDateTime;

@Getter
@AllArgsConstructor
@NoArgsConstructor
@Entity
public class EventoHorario implements Serializable {

    @Id
    @Column(name = "id_evento_horario")
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Setter
    @OneToOne
    @JoinColumn(name = "id_evento")
    @JsonBackReference
    private Evento evento;

    @Setter
    @Enumerated
    private EventoHorarioTipo tipo;

    @Setter
    private LocalDateTime horarioComeco;

    @Setter
    private LocalDateTime horarioFim;

}
