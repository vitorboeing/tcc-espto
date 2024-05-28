import { Injectable } from "@angular/core";
import { CrudService } from "./crud-service";
import { HttpClient } from "@angular/common/http";
import { environment } from "src/environments/environment";

@Injectable({providedIn:'root'})
export class StateService extends CrudService<any> {

    constructor(protected override http: HttpClient) {
        super(http , environment.API + '/state');
     }
}
