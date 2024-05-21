import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class CityService {

    constructor(private http: HttpClient) { }

    getStatesCities() {
        return this.http.get<any>('assets/demo/data/cidades-brasil.json')
            .toPromise()
    }
}
