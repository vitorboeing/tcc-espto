package com.espto.espto.resource;

import com.espto.espto.common.GenericResource;
import com.espto.espto.domain.City;
import com.espto.espto.service.CityService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping(path = "city")
public class CityResource extends GenericResource<City, Long, CityService> {

    public CityResource(CityService service) {
        super(service);
    }

    @GetMapping(path = "find-all-by-state/{stateId}")
    public ResponseEntity<List<City>> findAllByState(@PathVariable Long stateId) {
        return ResponseEntity.ok(service.findAllByState_id(stateId));
    }

}
