package com.espto.espto.dto;

import com.espto.espto.domain.Follower;
import com.espto.espto.domain.User;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.Setter;

@AllArgsConstructor
@Getter
@Setter
public class FollowerDto {
    private Long id;
    private UserDto user;
    private UserDto follower;

    public static FollowerDto toDto(Follower follower) {
        return new FollowerDto(follower.getId(), User.toDto(follower.getUser()), User.toDto(follower.getFollower()));
    }
}
