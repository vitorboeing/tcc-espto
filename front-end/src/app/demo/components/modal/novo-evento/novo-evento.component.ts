import { EnumUtil } from './../../../util/EnumUtil';
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
    Event,
    DiaSemana,
    Week,
    WeeklyScheduleDayWeek,
} from 'src/app/demo/api/evento';
import { DynamicDialogRef } from 'primeng/dynamicdialog';
import { User } from 'src/app/demo/api/user';

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

    event: Event;

    esporteTipos: any[];

    eventoHorarioTipos: any[];

    date: Date[];

    diasSemanas: any[];

    diasSemanasSelected: any[];

    weeksOfMonth: any[];

    selectedCities: any[];

    address: Object;
    establishmentAddress: Object;

    formattedAddress: string;
    formattedEstablishmentAddress: string;

    NAO_SE_REPETE = 'NAO_SE_REPETE';
    SEMANAL = 'SEMANAL';

    constructor(
        private eventoService: EventoService,
        private ref: DynamicDialogRef,
        private ngZone: NgZone
    ) {}

    ngOnInit() {
        const user = JSON.parse(localStorage.getItem('user')) as User;
        const city = JSON.parse(localStorage.getItem('selectedCity'));

        this.event = {
            configHorario: {
                tipo: EnumUtil.getKey(EventoHorarioTipo ,EventoHorarioTipo.NAO_SE_REPETE),
                uniqueSchedule: {},
                horarioSemanal: {},
            },
            location: { city },
            userCreator: user,
        } as Event;

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

        this.weeksOfMonth = Object.keys(Week).map((key) => ({
            label: Week[key],
            value: key,
        }));
    }

    onDaySelect() {
        this.event.configHorario.horarioSemanal.daysWeek =
            this.diasSemanasSelected.map((diaSemana) => ({
                dayWeek: diaSemana,
            })) as WeeklyScheduleDayWeek[];
    }

    handleAddress(event: any) {
        console.log('Endereço selecionado:', event);
    }

    load(index: number) {
        this.loading[index] = true;
        setTimeout(() => (this.loading[index] = false), 1000);
    }

    salvarEvento(): void {
        this.eventoService.saveEvent(this.event).subscribe({
            next: (evento) => {
                this.ref.close({ isSuccess: true });
            },
        });
    }

    closeDialog() {
        this.ref.close({ isSuccess: true });
    }
}
