import { EventSchedule } from './../../../api/evento';
import { Component, OnInit } from '@angular/core';
import { ConfirmationService, MenuItem, MessageService } from 'primeng/api';
import { DynamicDialogConfig, DynamicDialogRef } from 'primeng/dynamicdialog';
import {
    DiaSemana,
    EsporteTipo,
    EventEntity,
    EventoHorarioTipo,
    EventScheduleSituation,
    Week,
} from 'src/app/demo/api/evento';
import { User } from 'src/app/demo/api/user';
import DateUtil from 'src/app/demo/util/DateUtil';
import { EnumUtil } from 'src/app/demo/util/EnumUtil';

import { EventoService } from './../../../service/evento.service';
import { EventScheduleService } from 'src/app/demo/service/event-schedule.service';
import { Router } from '@angular/router';

@Component({
    selector: 'app-evento',
    templateUrl: './evento.component.html',
    providers: [ConfirmationService, MessageService],
})
export class EventoComponent implements OnInit {
    items: MenuItem[] = [];
    loadingEvent: boolean;
    event: EventEntity;
    esporteTipos: any[];
    eventoHorarioTipos: any[];
    date: Date[];
    diasSemanas: any[];
    diasSemanasSelected: any[];
    weeksOfMonth: any[];
    scheduleSituations: any[];
    selectedCities: any[];
    isNotUserCreator: boolean;
    isUserAlreadyParticipant: boolean;
    user: User;
    NAO_SE_REPETE = 'NAO_SE_REPETE';
    SEMANAL = 'SEMANAL';
    stateOptions: any[];

    constructor(
        private eventoService: EventoService,
        private eventScheduleService: EventScheduleService,
        public config: DynamicDialogConfig,
        private ref: DynamicDialogRef,
        private confirmationService: ConfirmationService,
        private messageService: MessageService,
        private router: Router
    ) {}

    ngOnInit() {
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
            value: {dayWeek: key},
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
        this.loadingEvent = true;

        this.eventoService.getById(this.config.data.idEvent).subscribe({
            next: (event) => {

                this.event = event;

                if (this.event.configHorario.uniqueSchedule) {
                    this.event.configHorario.uniqueSchedule.startSchedule =
                        new Date(
                            this.event.configHorario.uniqueSchedule.startSchedule
                        );
                }
                if (this.event.configHorario.uniqueSchedule) {
                    this.event.configHorario.uniqueSchedule.endSchedule =
                        new Date(
                            this.event.configHorario.uniqueSchedule.endSchedule
                        );
                }


                this.getCurrentUser();

                this.isUserAlreadyParticipant = this.event.participants.find(participant => participant.user.id === this.user.id) != null

                this.event.schedules.forEach((schedule) => {
                    schedule.currentUserFrequency =
                        schedule.userFrequencies.find(
                            (userFrequency) =>
                                userFrequency.user.id === this.user.id
                        );
                });

                this.isNotUserCreator =this.event?.userCreator.id !== this.user.id;

                this.loadingEvent = false;
            },
        });
    }

    getCurrentUser() {
        this.user = JSON.parse(localStorage.getItem('user'));
    }

    participateEvent() {
        this.eventoService
            .participateEvent(this.user.id, this.event.id)
            .subscribe({ next: () =>  {}} );
    }

    updateEvent() {
        this.eventoService
            .update(this.user)
            .subscribe();
    }


    deleteEvent() {
        this.eventoService.delete(this.event).subscribe(() => this.ref.close(true));
    }

    confirmDeleteEvent(event: Event) {
        this.confirmationService.confirm({
            target: event.target as EventTarget,
            message: 'Você realmente deseja excluir esse evento?',
            header: 'Confirmação',
            icon: 'pi pi-exclamation-triangle',
            acceptIcon: 'none',
            rejectIcon: 'none',
            rejectButtonStyleClass: 'p-button-text',
            accept: () => {
                this.deleteEvent();
                this.messageService.add({
                    severity: 'info',
                    summary: 'Confirmed',
                    detail: 'You have accepted',
                });
            },
            reject: () => {
                this.messageService.add({
                    severity: 'error',
                    summary: 'Rejected',
                    detail: 'You have rejected',
                    life: 3000,
                });
            },
        });
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

    openUser(id : number) {
        const url = this.router.serializeUrl(
            this.router.createUrlTree(['/user'] , { queryParams: { id } })
          );
          window.open(url, '_blank');
    }
}
