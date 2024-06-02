package com.espto.espto.repository;

import com.espto.espto.common.GenericRepository;
import com.espto.espto.domain.Event;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface EventRepository extends GenericRepository<Event, Long> {

    List<Event> findAllByLocation_city_id(Long cityId);

}
