package com.espto.espto.domain;

import com.espto.espto.dto.FollowerDto;
import com.espto.espto.dto.FollowingDto;
import com.espto.espto.dto.UserDto;
import com.espto.espto.enums.Gender;
import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;
import java.io.Serializable;
import java.time.LocalDate;
import java.util.ArrayList;
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
    private LocalDate birthday;

    @Setter
    @Enumerated(EnumType.STRING)
    private Gender gender;

//    @Setter
//    private byte[] profilePicture;

    @Setter
    @JsonProperty(access = JsonProperty.Access.WRITE_ONLY)
    private String password;

//    @Setter
//    @Convert(converter = TypeDisabilityConverter.class)
//    private List<TypeDisability> typesDisability;

    @Setter
    private Boolean themeDark = false;

    @Transient
    @Setter
    private List<FollowerDto> followers = new ArrayList<>();

    @Transient
    @Setter
    private List<FollowingDto> following = new ArrayList<>();

    public byte[] getProfilePicture() {
        return null;
    }

    public static UserDto toDto(User user) {
        return new UserDto(user.getId(), user.getName(), user.getLastName());
    }
}
