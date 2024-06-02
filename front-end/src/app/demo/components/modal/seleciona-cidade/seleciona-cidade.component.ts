import { Component, OnInit } from '@angular/core';
import { DynamicDialogRef } from 'primeng/dynamicdialog';
import { City, State } from 'src/app/demo/api/location';
import { StateService } from 'src/app/demo/service/state-service';

import { CityService } from './../../../service/city.service';

@Component({
    selector: 'app-seleciona-cidade',
    templateUrl: './seleciona-cidade.component.html',
})
export class SelecionaCidadeComponent implements OnInit {
    selectedState: State;
    selectedCity: City;
    states: State[];
    cities: City[];

    constructor(
        private cityService: CityService,
        private stateService: StateService,
        private ref: DynamicDialogRef
    ) {}

    ngOnInit() {
        this.findStates();
    }

    findStates() {
        this.stateService.findAll().subscribe({
            next: (response) => {
                this.states = response;
            },
        });
    }

    findCities() {
        this.cityService.findAllByState(this.selectedState.id).subscribe({
            next: (response) => {
                this.cities = response;
            },
        });
    }

    closeDialog() {
        localStorage.setItem('selectedCity' , JSON.stringify(this.selectedCity))
        this.ref.close( this.selectedCity );
    }
}
