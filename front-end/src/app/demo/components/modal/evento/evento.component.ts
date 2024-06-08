import { EventoService } from './../../../service/evento.service';
import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { DiaSemana, EsporteTipo, Event, EventoHorarioTipo, Week } from 'src/app/demo/api/evento';
import { User } from 'src/app/demo/api/user';
import { Usuario } from 'src/app/demo/api/usuario';
import { EnumUtil } from 'src/app/demo/util/EnumUtil';

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

    selectedCities: any[];

    isNotUserCreator: boolean;

    user: User;

    NAO_SE_REPETE = 'NAO_SE_REPETE';
    SEMANAL = 'SEMANAL';

    constructor(private eventoService: EventoService) {}


    ngOnInit() {
        this.isNotUserCreator = true;
        this.getCurrentUser();

        this.eventoService
            .getById(16)
            .subscribe({ next: (event) => (this.event = event) });

        this.items = [
            { label: 'Update', icon: 'pi pi-refresh' },
            { label: 'Delete', icon: 'pi pi-times' },
            {
                label: 'Angular.io',
                icon: 'pi pi-info',
                url: 'http://angular.io',
            },
            { separator: true },
            { label: 'Setup', icon: 'pi pi-cog' },
        ];


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

    load(index: number) {
        this.loading[index] = true;
        setTimeout(() => (this.loading[index] = false), 1000);
    }

    getCurrentUser() {
        this.user = JSON.parse(localStorage.getItem('user'));
    }

    participateEvent() {
        console.log()
        this.eventoService.participateEvent(this.user.id, this.event.id).subscribe();
    }

    openWhatsapp() {
        window.open('https://api.whatsapp.com/send?phone=5548998286699');
    }

    getDescriptionSport(esporteTipo: EsporteTipo): any {
        return EnumUtil.getKey(EsporteTipo, esporteTipo).toUpperCase();
    }
}
