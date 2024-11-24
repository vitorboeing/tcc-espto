package com.espto.espto.service;

import com.espto.espto.common.GenericService;
import com.espto.espto.domain.Follower;
import com.espto.espto.domain.User;
import com.espto.espto.dto.FollowerDto;
import com.espto.espto.repository.FollowerRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class FollowerService extends GenericService<Follower, Long, FollowerRepository> {


    public FollowerService(FollowerRepository followerRepository) {
        super(followerRepository);
    }

    public void removeFollower(User user, User userUnfollow) {
        repository.findByUserAndFollower(userUnfollow, user)
                .ifPresent(repository::delete);
    }

    public void followerUser(User user, User follower) {
        repository.save(new Follower(user, follower));
    }

    List<FollowerDto> findAllByUser(User user) {
        return repository.findAllByUser(user)
                .stream()
                .map(FollowerDto::toDto)
                .toList();
    }


}
