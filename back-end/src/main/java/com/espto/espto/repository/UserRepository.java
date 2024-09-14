package com.espto.espto.repository;

import com.espto.espto.common.GenericRepository;
import com.espto.espto.domain.User;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface UserRepository extends GenericRepository<User, Long> {

    Optional<User> findByEmail(final String email);

    List<User> findUser(final String user);

}
