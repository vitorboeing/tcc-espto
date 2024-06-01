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
public class State {

    @Id
    @Column(name = "id_state")
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Setter
    private Integer ufCode;

    @Setter
    private String name;

    @Setter
    private String uf;

    @Setter
    @ManyToOne
    @JoinColumn(name = "region_id")
    private Region region;

}


//uf_code INTEGER NOT NULL,
//    "name" VARCHAR(50) NOT NULL,
//uf CHAR(2)  NOT NULL,
//region_id INTEGER NOT NULL,