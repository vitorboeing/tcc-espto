package com.espto.espto.repository;

import com.espto.espto.common.GenericRepository;
import com.espto.espto.domain.State;
import org.springframework.stereotype.Repository;

@Repository
public interface StateRepository extends GenericRepository<State, Long> {
}
