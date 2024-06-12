package com.espto.espto.repository;

import com.espto.espto.common.GenericRepository;
import com.espto.espto.domain.EventSchedule;
import org.springframework.stereotype.Repository;

@Repository
public interface EventScheduleRepository extends GenericRepository<EventSchedule, Long> {
}
