package com.espto.espto.domain;

import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.*;

import javax.persistence.*;
import java.io.Serializable;

@Getter
@AllArgsConstructor
@NoArgsConstructor
@Builder
@Entity
@Table(name = "evento_participante")
public class EventParticipant implements Serializable {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id_evento_participante")
    private Long id;

    @Setter
    @ManyToOne
    @JsonIgnore
    @JoinColumn(name = "id_evento")
    private Event event;

    @Setter
    @ManyToOne
    @JoinColumn(name = "id_user")
    private User user;

}
