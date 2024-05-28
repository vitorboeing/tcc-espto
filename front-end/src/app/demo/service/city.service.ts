import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { City } from '../api/location';
import { CrudService } from './crud-service';
import { environment } from 'src/environments/environment';
import { Observable, catchError, retry } from 'rxjs';

@Injectable()
export class CityService  extends CrudService<City> {

    constructor(protected override http: HttpClient) {
        super(http , environment.API + '/city');
     }

     findAllByState(stateId: number): Observable<City[]> {
        return this.http.get<City[]>(this.API_URL + "/find-all-by-state/" + stateId).pipe(retry(10), catchError(this.handleError))
    }

}



