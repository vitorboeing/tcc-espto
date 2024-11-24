package com.espto.espto.dto;

import com.espto.espto.domain.Following;
import com.espto.espto.domain.User;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.Setter;

@AllArgsConstructor
@Getter
@Setter
public class FollowingDto {

    private Long id;
    private UserDto user;
    private UserDto following;

    public static FollowingDto toDto(Following following) {
        return new FollowingDto(following.getId(), User.toDto(following.getUser()), User.toDto(following.getFollowing()));
    }

}
