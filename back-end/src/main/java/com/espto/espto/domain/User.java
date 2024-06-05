package com.espto.espto.domain;

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
    private String email;

    @Setter
    private String name;

    @Setter
    private String lastName;

    @Setter
    @JsonProperty(access = JsonProperty.Access.WRITE_ONLY)
    private String password;

    @Setter
    private Boolean themeDark = false;

    @Transient
    private List<User> friends;

//    @Setter
//    @JsonManagedReference
//    @OneToMany(cascade = CascadeType.ALL, mappedBy = "userCreator", fetch = FetchType.LAZY, orphanRemoval = true)
//    private List<Evento> eventos;


}
