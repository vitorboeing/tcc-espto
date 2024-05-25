import { EventoService } from './../../../service/evento.service';
import { CityService } from '../../../service/city.service';
import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';
import {
    EventoHorarioTipo,
    EsporteTipo,
    Evento,
} from 'src/app/demo/api/evento';
import { DynamicDialogRef } from 'primeng/dynamicdialog';

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

    eventoHorarioTipos: any[];

    date: Date[];

    constructor(
        private eventoService: EventoService,
        private ref: DynamicDialogRef
    ) {}

    ngOnInit() {
        this.evento = {
            horario: { horarioComeco: new Date(), horarioFim: new Date() },
        } as Evento;
        this.eventoHorarioTipos = Object.keys(EventoHorarioTipo).map((key) => ({
            label: EventoHorarioTipo[key],
            value: key,
        }));
        this.esporteTipos = Object.keys(EsporteTipo).map((key) => ({
            label: EsporteTipo[key],
            value: key,
        }));
    }

    load(index: number) {
        this.loading[index] = true;
        setTimeout(() => (this.loading[index] = false), 1000);
    }

    salvarEvento(): void {
        this.eventoService
            .save(this.evento)
            .subscribe({ next: (evento) => {
                this.ref.close({ isSuccess: true });
            } });
    }

    closeDialog() {
        this.ref.close({ isSuccess: true });
    }
}
