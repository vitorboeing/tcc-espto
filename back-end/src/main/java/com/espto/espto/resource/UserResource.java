package com.espto.espto.resource;

import com.espto.espto.common.GenericResource;
import com.espto.espto.domain.User;
import com.espto.espto.service.UserService;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping(path = "user")
public class UserResource extends GenericResource<User, Long, UserService> {

    public UserResource(UserService service) {
        super(service);
    }
}
