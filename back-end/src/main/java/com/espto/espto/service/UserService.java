package com.espto.espto.service;

import com.espto.espto.common.GenericService;
import com.espto.espto.domain.User;
import com.espto.espto.repository.UserRepository;
import org.springframework.stereotype.Service;

@Service
public class UserService extends GenericService<User, Long, UserRepository> {

    public UserService(UserRepository userRepository) {
        super(userRepository);
    }
}
