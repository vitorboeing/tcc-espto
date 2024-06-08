import { ChangeDetectorRef, Component, OnInit, signal } from '@angular/core';
import { CalendarOptions, DateSelectArg, EventApi, EventClickArg } from '@fullcalendar/core';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';

import { EventoService } from './../../../service/evento.service';
import { City } from 'src/app/demo/api/location';

@Component({
    styleUrl: './meus-eventos.component.scss',
    templateUrl: './meus-eventos.component.html',
})
export class MeusEventosComponent implements OnInit {
    eventos: any[];
    calendarOptions: CalendarOptions;
    currentEvents = signal<EventApi[]>([]);

    city: City;

    constructor(
        private changeDetector: ChangeDetectorRef,
        private eventoService: EventoService
    ) {}

    ngOnInit(): void {
        this.city = JSON.parse(localStorage.getItem("selectedCity"));

        this.eventoService.findAllForCalendar(this.city.id).subscribe({
            next: (response) => {
                this.eventos = response.map(res =>  {
                    return { title: res.sportType, start: res.startSchedule, end: res.endSchedule };
                } )
            },
        });

        this.loadCalendarConfig();
    }

    handleCalendarToggle() {
        //   this.calendarVisible.update((bool) => !bool);
    }

    handleWeekendsToggle() {
        //   this.calendarOptions.mutate((options) => {
        //     options.weekends = !options.weekends;
        //   });
    }

    loadCalendarConfig() : void {
        this.calendarOptions = {
            plugins: [dayGridPlugin, timeGridPlugin],
            locales: [{ code: 'pt-br' }],
            locale: 'pt-br',
            height: '53rem',
            themeSystem: 'bootstrap5',
            initialView: 'timeGridWeek',
            headerToolbar: {
                left: 'prev,next',
                center: 'title',
                right: 'timeGridWeek,dayGridMonth',
            },
            weekends: true,
        } as CalendarOptions;
    }

    handleDateSelect(selectInfo: DateSelectArg) {
        const title = prompt('Please enter a new title for your event');
        const calendarApi = selectInfo.view.calendar;

        calendarApi.unselect(); // clear date selection

        //   if (title) {
        //     calendarApi.addEvent({
        //       id:  {} as EventInput,
        //       title,
        //       start: selectInfo.startStr,
        //       end: selectInfo.endStr,
        //       allDay: selectInfo.allDay
        //     });
        //   }
    }

    handleEventClick(clickInfo: EventClickArg) {
        if (
            confirm(
                `Are you sure you want to delete the event '${clickInfo.event.title}'`
            )
        ) {
            clickInfo.event.remove();
        }
    }

    handleEvents(events: EventApi[]) {
        this.currentEvents.set(events);
        this.changeDetector.detectChanges(); // workaround for pressionChangedAfterItHasBeenCheckedError
    }
}
