import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CrudService } from './crud-service';
import { EventEntity } from '../api/evento';
import { environment } from 'src/environments/environment';
import { Observable, catchError, retry } from 'rxjs';
import { EventDashboard } from '../api/event-dashboard';
import { EventCalendar } from '../api/event-calendar';

@Injectable({ providedIn: 'root' })
export class EventoService extends CrudService<EventEntity> {
    constructor(protected override http: HttpClient) {
        super(http, environment.API + '/evento');
    }

    findAllByCity(cityId: number): Observable<EventDashboard[]> {
        return this.http
            .get<EventDashboard[]>(this.API_URL + '/find-all-by-city/' + cityId)
            .pipe(retry(10), catchError(this.handleError));
    }

    findAllForCalendar(cityId: number): Observable<EventCalendar[]> {
        return this.http
            .get<EventCalendar[]>(this.API_URL + '/find-all-calendar/' + cityId)
            .pipe(retry(10), catchError(this.handleError));
    }

    saveEvent(record: EventEntity): Observable<EventEntity> {
        return this.http
            .post<EventEntity>(
                this.API_URL + '/save-event',
                JSON.stringify(record),
                this.httpOptions
            )
            .pipe(retry(2), catchError(this.handleError));
    }

    participateEvent(idUser: number, idEvent: number): Observable<Event> {
        return this.http
            .post<Event>(
                this.API_URL + '/participate-event/' + idUser + '/' + idEvent,
                this.httpOptions
            )
            .pipe(retry(2), catchError(this.handleError));
    }
}
