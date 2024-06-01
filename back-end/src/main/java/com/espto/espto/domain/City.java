package com.espto.espto.domain;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;

@Getter
@AllArgsConstructor
@NoArgsConstructor
@Entity
public class City {

    @Id
    @Column(name = "id_city")
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Setter
    private Integer code;

    @Setter
    private String name;

    @ManyToOne
    @JoinColumn(name = "state_id")
    private State state;

}


//id SERIAL PRIMARY KEY,
//code INTEGER NOT NULL,
//  "name" VARCHAR(255) NOT NULL,
//state_id INTEGER NOT NULL,