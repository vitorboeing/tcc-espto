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
@Table(name = "usuario_seguindo")
@Entity
public class Following {

    @Id
    @Column(name = "id_usuario_amigo")
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Setter
    @ManyToOne
    @JsonBackReference("user-following")
    @JoinColumn(name = "usuario_id")
    private User user;

    @Setter
    @ManyToOne
    @JoinColumn(name = "usuario_seguindo_id")
    private User following;

    public User getFollowing() {
        if (following != null) {
            following.setFollowers(null);
            following.setFollowing(null);
        }
        return following;
    }

}
