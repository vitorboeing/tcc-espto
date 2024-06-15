import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, retry } from 'rxjs';
import { environment } from 'src/environments/environment';

import { EventSchedule } from '../api/evento';
import { CrudService } from './crud-service';

@Injectable({ providedIn: 'root' })
export class EventScheduleService extends CrudService<EventSchedule> {
    constructor(protected override http: HttpClient) {
        super(http, environment.API + '/event-schedule');
    }

    setUserFrequency(
        idEventSchedule: number,
        idEventScheduleUserFrequency: number,
        frequency: boolean
    ): Observable<void> {
        return this.http
            .post<void>(
                this.API_URL +
                    '/set-user-frequency/' +
                    idEventSchedule +
                    '/' +
                    idEventScheduleUserFrequency +
                    '/' +
                    frequency,
                null
            )
            .pipe(retry(10), catchError(this.handleError));
    }
}
