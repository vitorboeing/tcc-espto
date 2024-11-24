package com.espto.espto.domain;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;

@Getter
@AllArgsConstructor
@NoArgsConstructor
@Table(name = "usuario_seguidor")
@Entity
public class Follower {

    @Id
    @Column(name = "id_usuario_amigo")
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Setter
    @ManyToOne
    @JoinColumn(name = "usuario_id")
    private User user;

    @Setter
    @ManyToOne
    @JoinColumn(name = "usuario_seguidor_id")
    private User follower;

    public Follower(User user, User follower) {
        this.user = user;
        this.follower = follower;
    }
}
