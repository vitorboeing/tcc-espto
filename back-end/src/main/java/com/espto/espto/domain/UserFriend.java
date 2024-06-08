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
@Table(name = "usuario_amigo")
@Entity
public class UserFriend {

    @Id
    @Column(name = "id_usuario_amigo")
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Setter
    @ManyToOne
    @JsonBackReference
    @JoinColumn(name = "usuario_id")
    private User user;

    @Setter
    @ManyToOne
    @JsonBackReference
    @JoinColumn(name = "usuario_amigo_id")
    private User friend;

}
