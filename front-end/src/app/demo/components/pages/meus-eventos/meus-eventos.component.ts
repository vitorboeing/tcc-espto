import { AfterViewInit, ChangeDetectorRef, Component, ElementRef, OnInit, ViewChild, signal } from '@angular/core';
import { Calendar, CalendarOptions, DateSelectArg, EventApi, EventClickArg, EventInput } from '@fullcalendar/core';
import { MenuItem } from 'primeng/api';
import interactionPlugin from '@fullcalendar/interaction';
import timeGridPlugin from '@fullcalendar/timegrid';
import dayGridPlugin from '@fullcalendar/daygrid';



@Component({
    styleUrl: './meus-eventos.component.scss',
    templateUrl: './meus-eventos.component.html',
})
export class MeusEventosComponent  {
    calendarOptions: CalendarOptions = {
        plugins: [dayGridPlugin, timeGridPlugin],
        locales: [ { code: 'pt-br' }],
        locale: "pt-br",
        height: '53rem',
        themeSystem: 'bootstrap5',
        initialView: 'timeGridWeek',
        headerToolbar: {
            left: 'prev,next',
            center: 'title',
            right: 'timeGridWeek,dayGridMonth'
          },
        weekends: true,
        events: 'https://fullcalendar.io/api/demo-feeds/events.json?overload-day'
      };

        currentEvents = signal<EventApi[]>([]);

        constructor(private changeDetector: ChangeDetectorRef) {
        }

        handleCalendarToggle() {
        //   this.calendarVisible.update((bool) => !bool);
        }

        handleWeekendsToggle() {
        //   this.calendarOptions.mutate((options) => {
        //     options.weekends = !options.weekends;
        //   });
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
          if (confirm(`Are you sure you want to delete the event '${clickInfo.event.title}'`)) {
            clickInfo.event.remove();
          }
        }

        handleEvents(events: EventApi[]) {
          this.currentEvents.set(events);
          this.changeDetector.detectChanges(); // workaround for pressionChangedAfterItHasBeenCheckedError
        }
      }
