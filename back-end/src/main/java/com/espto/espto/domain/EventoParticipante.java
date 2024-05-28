package com.espto.espto.domain;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

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

//    @Setter
//    @ManyToOne
//    @JoinColumn(name = "id_user")
//    private User user;

    @Setter
    private boolean frequenciaProximoEvento;

}
