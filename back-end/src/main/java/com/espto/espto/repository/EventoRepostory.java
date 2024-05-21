package com.espto.espto.repository;

import com.espto.espto.common.GenericRepository;
import com.espto.espto.domain.Evento;
import org.springframework.stereotype.Repository;

@Repository
public interface EventoRepostory extends GenericRepository<Evento , Long> {
}
