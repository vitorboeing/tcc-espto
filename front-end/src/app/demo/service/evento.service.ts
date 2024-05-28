import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { CrudService } from "./crud-service";
import { Evento } from "../api/evento";
import { environment } from "src/environments/environment";
import { Observable, catchError, retry } from "rxjs";

@Injectable({providedIn:'root'})
export class EventoService extends CrudService<Evento> {

    constructor(protected override http: HttpClient) {
        super(http , environment.API + '/evento');
     }

     findAllByCity(cityId: number): Observable<Evento[]> {
        return this.http.get<Evento[]>(this.API_URL + '/find-all-by-city/' + cityId).pipe(retry(10), catchError(this.handleError))
    }
}
