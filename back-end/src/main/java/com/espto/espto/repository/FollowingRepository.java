package com.espto.espto.repository;

import com.espto.espto.common.GenericRepository;
import com.espto.espto.domain.Following;
import com.espto.espto.domain.User;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface FollowingRepository extends GenericRepository<Following, Long> {

    Optional<Following> findByUserAndFollowing(User user, User following);

    List<Following> findAllByUser(User user);


}
