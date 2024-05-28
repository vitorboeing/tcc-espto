package com.espto.espto.resource;

import com.espto.espto.common.GenericResource;
import com.espto.espto.domain.State;
import com.espto.espto.service.StateService;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping(path = "state")
public class StateResource extends GenericResource<State, Long, StateService> {

    public StateResource(StateService service) {
        super(service);
    }
}
