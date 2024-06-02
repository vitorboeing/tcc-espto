import { EventoService } from './../../../service/evento.service';
import {
    Component,
    ElementRef,
    EventEmitter,
    Input,
    NgZone,
    OnInit,
    Output,
    ViewChild,
} from '@angular/core';
import { MenuItem } from 'primeng/api';
import {
    EventoHorarioTipo,
    EsporteTipo,
    Evento,
    DiaSemana,
} from 'src/app/demo/api/evento';
import { DynamicDialogRef } from 'primeng/dynamicdialog';

export class SelectedState {
    nome: String;
    sigla: String;
}

export interface PlaceSearchResult {
    address: string;
    location?: google.maps.LatLng;
    imageUrl?: string;
    iconUrl?: string;
    name?: string;
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

    diasSemanas: any[];

    selectedCities: any[];

    address: Object;
    establishmentAddress: Object;

    formattedAddress: string;
    formattedEstablishmentAddress: string;

    phone: string;

    constructor(
        private eventoService: EventoService,
        private ref: DynamicDialogRef,
        private ngZone: NgZone
    ) {}

    ngOnInit() {
        this.evento = {
            horario: { horarioComeco: new Date(), horarioFim: new Date() },
            location: { city: JSON.parse(localStorage.getItem('selectedCity'))},
        } as Evento;
        this.eventoHorarioTipos = Object.keys(EventoHorarioTipo).map((key) => ({
            label: EventoHorarioTipo[key],
            value: key,
        }));
        this.esporteTipos = Object.keys(EsporteTipo).map((key) => ({
            label: EsporteTipo[key],
            value: key,
        }));

        this.diasSemanas = Object.keys(DiaSemana).map((key) => ({
            label: DiaSemana[key],
            value: key,
        }));
    }

    handleAddress(event: any) {
        console.log('Endereço selecionado:', event);
      }

    load(index: number) {
        this.loading[index] = true;
        setTimeout(() => (this.loading[index] = false), 1000);
    }

    salvarEvento(): void {
        this.eventoService.save(this.evento).subscribe({
            next: (evento) => {
                this.ref.close({ isSuccess: true });
            },
        });
    }

    closeDialog() {
        this.ref.close({ isSuccess: true });
    }
}
