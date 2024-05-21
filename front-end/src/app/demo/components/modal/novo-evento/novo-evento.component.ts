import { EventoService } from './../../../service/evento.service';
import { CityService } from '../../../service/city.service';
import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { EsporteHorarioTipo, EsporteTipo, Evento } from 'src/app/demo/api/evento';


export class SelectedState {
    nome: String;
    sigla: String;
}

@Component({
    selector: 'app-novo-evento',
    templateUrl: './novo-evento.component.html',
})
export class NovoEventoComponent implements OnInit {

    items: MenuItem[] = [];

    loading = [false, false, false, false];

    evento: Evento;

    esporteTipos: any[];

    esporteHorarioTipo: any[]

    date: Date[];

    constructor  (private eventoService : EventoService){
    }

    ngOnInit() {
        this.evento = {} as Evento;
        this.esporteHorarioTipo = Object.keys(EsporteHorarioTipo).map(key => ({ label: EsporteHorarioTipo[key], value: key }));
        this.esporteTipos = Object.keys(EsporteTipo).map(key => ({ label: EsporteTipo[key], value: key }));
    }

    load(index: number) {
        this.loading[index] = true;
        setTimeout(() => this.loading[index] = false, 1000);
    }

}

