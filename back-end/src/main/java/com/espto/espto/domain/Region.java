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
public class Region implements Serializable {

    @Id
    @Column(name = "id_region")
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Setter
    private String name;

}


//CREATE TABLE regions (
//        id SERIAL PRIMARY KEY,
//  "name" VARCHAR(50) NOT NULL
//) WITH (OIDS=FALSE);