package com.espto.espto.common;

import jakarta.persistence.EntityNotFoundException;
import jakarta.validation.Valid;
import lombok.Getter;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.io.Serializable;
import java.util.List;

@Getter
public abstract class GenericResource<E, ID extends Serializable, S extends GenericService<E, ID, ?>> {

    public final S service;

    public GenericResource(S service) {
        this.service = service;
    }

    @GetMapping
    public ResponseEntity<List<E>> findAll() {
        return ResponseEntity.ok(service.findAll());
    }

    @GetMapping(path = "{id}")
    public ResponseEntity<E> findById(@PathVariable ID id) throws EntityNotFoundException {
        return ResponseEntity.ok(service.findById(id)
                .orElseThrow(EntityNotFoundException::new));
    }

    @PostMapping
    public ResponseEntity<E> save(@RequestBody @Valid E body) {
        return ResponseEntity.ok(service.save(body));
    }

    @PutMapping
    public ResponseEntity<E> update(@RequestBody E body, @PathVariable ID id) {
        return ResponseEntity.ok(service.save(body));
    }

    @DeleteMapping(path = "{id}")
    public void delete(@PathVariable ID id) {
        service.deleteById(id);
    }

}
