package com.espto.espto.repository;

import com.espto.espto.common.GenericRepository;
import com.espto.espto.domain.City;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface CityRepository extends GenericRepository<City, Long> {

    List<City> findAllByState_id(Long stateId);

}
