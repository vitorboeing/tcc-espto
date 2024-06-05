package com.espto.espto.domain;

import com.espto.espto.enums.EsporteTipo;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;
import javax.validation.constraints.NotNull;
import java.io.Serializable;
import java.util.List;
import java.util.Set;

@Getter
@AllArgsConstructor
@NoArgsConstructor
@Entity
@Table(name = "evento")
public class Event implements Serializable {

    @Id
    @Column(name = "id_evento")
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Setter
    @ManyToOne
    @JoinColumn(name = "id_user_creator")
    private User userCreator;

    @Setter
    @OneToOne(cascade = CascadeType.ALL)
    @JoinColumn(name = "endereco_id", referencedColumnName = "id_event_location")
    private EventLocation location;

    @Setter
    @OneToOne(cascade = CascadeType.ALL)
    @JoinColumn(name = "config_horario_id", referencedColumnName = "id_evento_config_horario")
    private EventConfigSchedule configHorario;

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

    @Setter
    @OneToMany(cascade = CascadeType.ALL, mappedBy = "event", fetch = FetchType.LAZY, orphanRemoval = true)
    private List<EventoHorario> horarios;

    @Setter
    @OneToMany(cascade = CascadeType.ALL, mappedBy = "event", fetch = FetchType.LAZY, orphanRemoval = true)
    private Set<EventoParticipante> participants;


}

