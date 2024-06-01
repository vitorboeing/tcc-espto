package com.espto.espto.domain;

import com.espto.espto.enums.EventoHorarioTipo;
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
    @ManyToOne
    @JoinColumn(name = "id_evento")
    private Evento evento;

    @Setter
    @Enumerated
    private EventoHorarioTipo tipo;

    @Setter
    private LocalDateTime horarioComeco;

    @Setter
    private LocalDateTime horarioFim;

}
