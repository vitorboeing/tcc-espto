package com.espto.espto.domain;

import com.fasterxml.jackson.annotation.JsonBackReference;
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
public class EventLocation implements Serializable {

    @Id
    @Column(name = "id_event_location")
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Setter
    @OneToOne
    @JoinColumn(name = "id_evento")
    @JsonBackReference(value = "evento-location")
    private Event event;

    @Setter
    @ManyToOne
    @JoinColumn(name = "id_city")
    private City city;

    @Setter
    private String address;

    @Setter
    private String local;

}