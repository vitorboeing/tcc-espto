import { CityService } from './../../../service/city.service';
import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { Evento } from 'src/app/demo/api/evento';

export class SelectedState {
    nome: String;
    sigla: String;
}

@Component({
    selector: 'app-seleciona-cidade',
    templateUrl: './seleciona-cidade.component.html',
})
export class SelecionaCidadeComponent implements OnInit {
    evento: Evento;
    states: Array<SelectedState>;
    selectedState: SelectedState;
    cities: Map<String, String[]>;
    selectedCity: String;

    constructor(private cityService: CityService) {}

    ngOnInit() {
        this.states = new Array<SelectedState>();
        this.cities = new Map<String, String[]>();

        this.cityService.getStatesCities().then((statesCities) => {
            statesCities.estados.forEach((state) => {
                this.states.push({ nome: state.nome, sigla: state.sigla });
                this.cities.set(state.sigla, state.cidades);
            });
        });
    }

    getCities() {
        return this.selectedState
            ? this.cities.get(this.selectedState.sigla)
            : null;
    }
}
