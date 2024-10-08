package com.espto.espto.domain;

import com.fasterxml.jackson.annotation.JsonManagedReference;
import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;
import java.io.Serializable;
import java.util.List;

@Getter
@AllArgsConstructor
@NoArgsConstructor
@Table(name = "usuario")
@Entity
public class User implements Serializable {

    @Id
    @Column(name = "id_usuario")
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Setter
    private String username;

    @Setter
    private String lastName;

    @Setter
    private String email;

    @Setter
    private String name;

    @Setter
    private String bio;

    @Setter
    @ManyToOne
    private City city;

    @Setter
    @JsonProperty(access = JsonProperty.Access.WRITE_ONLY)
    private String password;

    @Setter
    private Boolean themeDark = false;

    @Setter
    @OneToMany(cascade = CascadeType.ALL, mappedBy = "user", fetch = FetchType.LAZY, orphanRemoval = true)
    @JsonManagedReference("user-followers")
    private List<Follower> followers;

    @Setter
    @OneToMany(cascade = CascadeType.ALL, mappedBy = "user", fetch = FetchType.LAZY, orphanRemoval = true)
    @JsonManagedReference("user-following")
    private List<Following> following;
}
