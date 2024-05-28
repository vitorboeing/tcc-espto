package com.espto.espto.service;

import com.espto.espto.common.GenericService;
import com.espto.espto.domain.City;
import com.espto.espto.repository.CityRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class CityService extends GenericService<City, Long, CityRepository> {

    public CityService(CityRepository repository) {
        super(repository);
    }

    public List<City> findAllByState_id(Long stateId) {
        return repository.findAllByState_id(stateId);
    }

}
