package com.espto.espto.domain;

import com.fasterxml.jackson.annotation.JsonBackReference;
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
    @JsonBackReference("user-followers")
    @JoinColumn(name = "usuario_id")
    private User user;

    @Setter
    @ManyToOne
    @JoinColumn(name = "usuario_seguidor_id")
    private User follower;

    public User getFollower() {
        if (follower != null) {
            follower.setFollowers(null);
            follower.setFollowing(null);
        }

        return follower;
    }
}