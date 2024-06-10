package com.espto.espto.domain;

import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.*;

import javax.persistence.*;

@Getter
@AllArgsConstructor
@NoArgsConstructor
@Builder
@Entity
@Table(name = "evento_horario_usuario_frequencia")
public class EventScheduleUserFrequency {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id_evento_horario_usuario__frequencia")
    private Long id;

    @Setter
    @ManyToOne
    @JsonIgnore
    @JoinColumn(name = "evento_horario_id")
    private EventSchedule schedule;

    @Setter
    @ManyToOne
    @JoinColumn(name = "usuario_id")
    private User user;

    @Setter
    @Column(name = "frequencia")
    private Boolean frequency;

}
