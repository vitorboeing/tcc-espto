package com.espto.espto.service;

import com.espto.espto.common.GenericService;
import com.espto.espto.domain.State;
import com.espto.espto.repository.StateRepository;
import org.springframework.stereotype.Service;

@Service
public class StateService extends GenericService<State, Long, StateRepository> {

    public StateService(StateRepository repository) {
        super(repository);
    }
}
