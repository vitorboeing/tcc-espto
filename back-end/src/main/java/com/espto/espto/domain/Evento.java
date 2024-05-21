package com.espto.espto.domain;

import com.espto.espto.domain.enums.EsporteTipo;
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
public class Evento implements Serializable {

    @Id
    @Column(name = "id_evento")
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

//    @JsonIgnore
//    @Setter
//    @ManyToOne(fetch = FetchType.LAZY)
//    @JoinColumn(name = "id_provider" , updatable = false)
//    private Provider provider;

    @Setter
    private EsporteTipo esporteTipo;

    @Setter
    private String descricao;

    @Setter
    private String localizacao;

    @Setter
    private Integer quantidadeParticipantes;

    @Setter
    private Integer quantidadeParticipantesAtivos;


}

