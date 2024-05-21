package com.espto.espto.domain;

import com.espto.espto.domain.enums.EsporteHorarioTipo;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.io.Serializable;
import java.time.LocalDateTime;

@Getter
@AllArgsConstructor
@NoArgsConstructor
@Entity
public class EventoHorario implements Serializable {

    @Id
    @Column(name = "id_evento_horario")
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Setter
    private EsporteHorarioTipo tipo;

    @Setter
    private LocalDateTime horario;

}
