import { Component, NgZone, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, NgForm } from '@angular/forms';
import { MenuItem } from 'primeng/api';
import { DynamicDialogRef } from 'primeng/dynamicdialog';
import {
    DiaSemana,
    EsporteTipo,
    EventEntity,
    EventoHorarioTipo,
    Week,
    WeeklyScheduleDayWeek,
} from 'src/app/demo/api/evento';
import { User } from 'src/app/demo/api/user';

import { EventoService } from './../../../service/evento.service';
import { EnumUtil } from './../../../util/EnumUtil';

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
    formGroup: FormGroup | undefined;

    items: MenuItem[] = [];
    loading = [false, false, false, false];
    event: EventEntity;
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
        this.createForm();

        const user = JSON.parse(localStorage.getItem('user')) as User;
        const city = JSON.parse(localStorage.getItem('selectedCity'));

        this.event = {
            configHorario: {
                tipo: EnumUtil.getKey(
                    EventoHorarioTipo,
                    EventoHorarioTipo.NAO_SE_REPETE
                ),
                uniqueSchedule: {},
                horarioSemanal: {},
            },
            location: { city },
            creatorIsParticipant: false,
            userCreator: user,
        } as EventEntity;

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
            value: { dayWeek: key },
        }));

        this.weeksOfMonth = Object.keys(Week).map((key) => ({
            label: Week[key],
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
        this.eventoService.saveEvent(this.event).subscribe({
            next: (evento) => {
                this.ref.close({ isSuccess: true });
            },
        });
    }

    createForm() {
        this.formGroup = new FormGroup({
            sportType: new FormControl<EsporteTipo>(null)
        });
    }

    isFormInvalid(): boolean {
        return this.formGroup.invalid;
    }

    closeDialog() {
        this.ref.close({ isSuccess: true });
    }
}
