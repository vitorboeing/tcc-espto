import { EventSchedule } from './../../../api/evento';
import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { DynamicDialogConfig } from 'primeng/dynamicdialog';
import {
    DiaSemana,
    EsporteTipo,
    Event,
    EventoHorarioTipo,
    EventScheduleSituation,
    Week,
} from 'src/app/demo/api/evento';
import { User } from 'src/app/demo/api/user';
import DateUtil from 'src/app/demo/util/DateUtil';
import { EnumUtil } from 'src/app/demo/util/EnumUtil';

import { EventoService } from './../../../service/evento.service';
import { EventScheduleService } from 'src/app/demo/service/event-schedule.service';

@Component({
    selector: 'app-evento',
    templateUrl: './evento.component.html',
})
export class EventoComponent implements OnInit {
    items: MenuItem[] = [];

    loading = [false, false, false, false];

    event: Event;

    esporteTipos: any[];

    eventoHorarioTipos: any[];

    date: Date[];

    diasSemanas: any[];

    diasSemanasSelected: any[];

    weeksOfMonth: any[];

    scheduleSituations: any[];

    selectedCities: any[];

    isNotUserCreator: boolean;

    user: User;

    NAO_SE_REPETE = 'NAO_SE_REPETE';
    SEMANAL = 'SEMANAL';

    stateOptions: any[];

    constructor(
        private eventoService: EventoService,
        private eventScheduleService: EventScheduleService,
        public config: DynamicDialogConfig
    ) {}

    ngOnInit() {
        this.isNotUserCreator = true;
        this.getCurrentUser();
        this.stateOptions = [
            { label: 'Confirmar', value: true },
            { label: 'Ausente', value: false },
        ];
        this.findEvent();

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

        this.scheduleSituations = Object.keys(EventScheduleSituation).map(
            (key) => ({
                label: EventScheduleSituation[key],
                value: key,
            })
        );
    }

    findEvent() {
        this.eventoService.getById(this.config.data.idEvent).subscribe({
            next: (event) => {
                this.event = event;
                this.event.schedules.forEach((schedule) => {
                    schedule.currentUserFrequency =
                        schedule.userFrequencies.find(
                            (userFrequency) =>
                                userFrequency.user.id === this.user.id
                        );
                });
                console.log(this.event);
            },
        });
    }

    load(index: number) {
        this.loading[index] = true;
        setTimeout(() => (this.loading[index] = false), 1000);
    }

    getCurrentUser() {
        this.user = JSON.parse(localStorage.getItem('user'));
    }

    participateEvent() {
        this.eventoService
            .participateEvent(this.user.id, this.event.id)
            .subscribe();
    }

    openWhatsapp() {
        window.open('https://api.whatsapp.com/send?phone=5548998286699');
    }

    getDescriptionSport(esporteTipo: EsporteTipo): any {
        return EnumUtil.getKey(EsporteTipo, esporteTipo).toUpperCase();
    }

    getDescriptionSituationSchedule(situation: EventScheduleSituation): any {
        return EnumUtil.getKey(EventScheduleSituation, situation).toUpperCase();
    }

    getScheduleFormated(schedule: Date): string {
        return DateUtil.format(
            schedule,
            DateUtil.DATE_TIME_PATTERN_WITHOUT_SECONDS
        );
    }

    setUserFrequency(eventSchedule: EventSchedule) {
        console.log(eventSchedule);

        this.eventScheduleService
            .setUserFrequency(
                eventSchedule.id,
                eventSchedule.currentUserFrequency.id,
                eventSchedule.currentUserFrequency.frequency
            )
            .subscribe(() => {
                this.findEvent();
            });
    }

    getColorSituation(situation: string): string {
        switch (situation) {
            case 'CONFIRMED':
                return '#22c55e';
            case 'CANCELED':
                return '#ef4444';
            default:
                return '';
        }
    }
}
