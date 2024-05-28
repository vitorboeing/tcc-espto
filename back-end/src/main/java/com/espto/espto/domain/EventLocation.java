package com.espto.espto.domain;

import com.fasterxml.jackson.annotation.JsonBackReference;
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
public class EventLocation implements Serializable {

    @Id
    @Column(name = "id_event_location")
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Setter
    @OneToOne
    @JoinColumn(name = "id_evento")
    @JsonBackReference
    private Evento evento;

    @Setter
    @ManyToOne
    @JoinColumn(name = "id_city")
    private City city;

    @Setter
    private String location;

}