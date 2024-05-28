package com.espto.espto.repository;

import com.espto.espto.common.GenericRepository;
import com.espto.espto.domain.City;
import org.springframework.stereotype.Repository;

@Repository
public interface CityRepository extends GenericRepository<City, Long> {
}
