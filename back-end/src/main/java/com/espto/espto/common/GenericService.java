package com.espto.espto.common;

import lombok.Getter;

import java.io.Serializable;
import java.util.List;
import java.util.Optional;

@Getter
public  abstract class GenericService <E, ID extends Serializable, R extends GenericRepository<E, ID>> {

    protected final R repository;

    public GenericService(R repository) {
        this.repository = repository;
    }

    public List<E> findAll() {
        return repository.findAll();
    }

    public Optional<E> findById(ID id) {
        return repository.findById(id);
    }

    public void delete(E entity) {
        repository.delete(entity);
    }

    public void deleteById(ID id) {
        repository.deleteById(id);
    }

    public E save(E entity) {
        return repository.save(entity);
    }
}
