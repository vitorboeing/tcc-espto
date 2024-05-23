import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { CrudService } from "./crud-service";
import { Evento } from "../api/evento";
import { environment } from "src/environments/environment";

@Injectable({providedIn:'root'})
export class EventoService extends CrudService<Evento> {

    constructor(protected override http: HttpClient) {
        super(http , environment.API + '/evento');
     }
}
