package com.espto.espto.resource;

import com.espto.espto.common.GenericResource;
import com.espto.espto.domain.City;
import com.espto.espto.service.CityService;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping(name = "city")
public class CityResource extends GenericResource<City, Long, CityService> {

    public CityResource(CityService service) {
        super(service);
    }
}
