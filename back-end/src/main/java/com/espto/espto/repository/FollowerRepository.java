package com.espto.espto.repository;

import com.espto.espto.common.GenericRepository;
import com.espto.espto.domain.Follower;
import com.espto.espto.domain.User;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface FollowerRepository extends GenericRepository<Follower, Long> {


    List<Follower> findAllByUser(User user);

    Optional<Follower> findByUserAndFollower(User user, User follower);

}
