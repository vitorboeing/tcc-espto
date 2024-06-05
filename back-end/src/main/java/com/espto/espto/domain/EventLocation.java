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
public class EventLocation implements Serializable {

    @Id
    @Column(name = "id_event_location")
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Setter
    @ManyToOne
    @JoinColumn(name = "id_city")
    private City city;

    @Setter
    private String address;

    @Setter
    private String local;

}