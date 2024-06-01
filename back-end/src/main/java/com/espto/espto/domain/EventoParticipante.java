package com.espto.espto.domain;

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
public class EventoParticipante implements Serializable {

    @Id
    @Column(name = "id_evento_participante")
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Setter
    @ManyToOne
    @JoinColumn(name = "id_evento")
    private Evento evento;

    @Setter
    @ManyToOne
    @JoinColumn(name = "id_user")
    private User user;

    @Setter
    private boolean frequenciaProximoEvento;

}
