package com.espto.espto.domain;

import com.espto.espto.enums.EventoHorarioTipo;
import lombok.*;

import javax.persistence.*;
import java.io.Serializable;
import java.time.LocalDateTime;

@Getter
@AllArgsConstructor
@NoArgsConstructor
@Builder
@Entity
public class EventoHorario implements Serializable {

    @Id
    @Column(name = "id_evento_horario")
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Setter
    @ManyToOne
    @JoinColumn(name = "id_evento")
    private Event event;

    @Setter
    @Enumerated
    private EventoHorarioTipo tipo;

    @Setter
    private LocalDateTime horarioComeco;

    @Setter
    private LocalDateTime horarioFim;

}
