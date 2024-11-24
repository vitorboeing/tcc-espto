package com.espto.espto.domain;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;

@Getter
@AllArgsConstructor
@NoArgsConstructor
@Table(name = "usuario_seguindo")
@Entity
public class Following {

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
    @JoinColumn(name = "usuario_seguindo_id")
    private User following;

    public Following(User user, User following) {
        this.user = user;
        this.following = following;
    }
}
