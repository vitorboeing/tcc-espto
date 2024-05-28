package com.espto.espto.domain;

import com.espto.espto.enums.EsporteTipo;
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
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Setter
    @OneToOne(cascade = CascadeType.ALL, mappedBy = "evento", fetch = FetchType.LAZY, orphanRemoval = true)
    @JsonManagedReference
    private EventoHorario horario;

    @Setter
    @OneToOne(cascade = CascadeType.ALL, mappedBy = "evento", fetch = FetchType.LAZY, orphanRemoval = true)
    @JsonManagedReference
    private EventLocation location;

    @Setter
    @NotNull
    @Enumerated
    private EsporteTipo esporteTipo;

    @Setter
    private String descricao;

    @Setter
    @NotNull
    private Integer quantidadeParticipantes;

    @Setter
    private Integer quantidadeParticipantesAtivos;

//    @OneToMany(mappedBy = "usuario")
//    private Set<EventoParticipante> participantes;

//    private List<EventoHorario> horarios;

}

