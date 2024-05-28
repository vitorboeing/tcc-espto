package com.espto.espto.repository;

import com.espto.espto.common.GenericRepository;
import com.espto.espto.domain.Evento;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface EventoRepostory extends GenericRepository<Evento, Long> {

    List<Evento> findAllByLocation_city_id(Long cityId);

}
