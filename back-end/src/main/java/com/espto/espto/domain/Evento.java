package com.espto.espto.domain;

import com.espto.espto.domain.enums.EsporteTipo;
import com.fasterxml.jackson.annotation.JsonManagedReference;
import jakarta.persistence.*;
import jakarta.validation.constraints.NotNull;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.io.Serializable;

@Getter
@AllArgsConstructor
@NoArgsConstructor
@Entity
public class Evento implements Serializable {

    @Id
    @Column(name = "id_evento")
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;

    @Setter
    @OneToOne(cascade = CascadeType.ALL, mappedBy = "evento", fetch = FetchType.LAZY, orphanRemoval = true)
    @JsonManagedReference
    private EventoHorario horario;

    @Setter
    @NotNull
    @Enumerated
    private EsporteTipo esporteTipo;

    @Setter
    private String descricao;

    @Setter
    private String localizacao;

    @Setter
    @NotNull
    private Integer quantidadeParticipantes;

    @Setter
    private Integer quantidadeParticipantesAtivos;

//    private List<EventoHorario> horarios;

}

