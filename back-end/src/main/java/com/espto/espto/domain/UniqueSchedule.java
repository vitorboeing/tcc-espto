package com.espto.espto.domain;

import com.fasterxml.jackson.annotation.JsonBackReference;
import lombok.*;

import javax.persistence.*;
import java.time.LocalDateTime;

@Getter
@Builder
@AllArgsConstructor
@NoArgsConstructor
@Entity
@Table(name = "horario_unico")
public class UniqueSchedule {

    @Id
    @Column(name = "id_horario_unico")
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Setter
    @ManyToOne
    @JoinColumn(name = "id_evento_config_horario")
    @JsonBackReference(value = "unique_schedule")
    private EventConfigSchedule configHorario;

    @Setter
    private LocalDateTime startSchedule;

    @Setter
    private LocalDateTime endSchedule;

}
