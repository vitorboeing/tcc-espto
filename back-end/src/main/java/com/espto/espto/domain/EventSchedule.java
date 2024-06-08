package com.espto.espto.domain;

import com.espto.espto.enums.EventScheduleSituation;
import com.fasterxml.jackson.annotation.JsonBackReference;
import lombok.*;

import javax.persistence.*;
import java.io.Serializable;
import java.time.LocalDateTime;
import java.util.List;

import static org.hibernate.internal.util.collections.CollectionHelper.isNotEmpty;

@Getter
@AllArgsConstructor
@NoArgsConstructor
@Builder
@Entity
@Table(name = "evento_horario")
public class EventSchedule implements Serializable {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id_evento_horario")
    private Long id;

    @Setter
    @ManyToOne
    @JsonBackReference
    @JoinColumn(name = "id_evento")
    private Event event;

    @Setter
    @Enumerated(EnumType.STRING)
    @Column(name = "situacao")
    private EventScheduleSituation situation;

    @Setter
    private LocalDateTime horarioComeco;

    @Setter
    private LocalDateTime horarioFim;

    @OneToMany(cascade = CascadeType.ALL, mappedBy = "schedule", fetch = FetchType.LAZY, orphanRemoval = true)
    private List<EventScheduleUserFrequency> userFrequencies;

    public void setUserFrequencies(List<EventScheduleUserFrequency> userFrequencies) {
        if (isNotEmpty(userFrequencies))
            userFrequencies.forEach(userFrequency -> userFrequency.setSchedule(this));

        this.userFrequencies = userFrequencies;
    }
}
