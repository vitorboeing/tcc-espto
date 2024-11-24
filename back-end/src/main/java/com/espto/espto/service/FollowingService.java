package com.espto.espto.service;

import com.espto.espto.common.GenericService;
import com.espto.espto.domain.Following;
import com.espto.espto.domain.User;
import com.espto.espto.dto.FollowingDto;
import com.espto.espto.repository.FollowingRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class FollowingService extends GenericService<Following, Long, FollowingRepository> {

    public FollowingService(FollowingRepository followingRepository) {
        super(followingRepository);
    }

    public void removeFollowing(User user, User userUnfollow) {
        repository.findByUserAndFollowing(user, userUnfollow)
                .ifPresent(repository::delete);
    }

    public void followingUser(User user, User following) {
        repository.save(new Following(user, following));
    }

    List<FollowingDto> findAllByUser(User user) {
        return repository.findAllByUser(user)
                .stream()
                .map(FollowingDto::toDto)
                .toList();
    }
}
