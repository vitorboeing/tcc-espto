import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, retry, take, throwError } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class CrudService<T> {

    constructor(protected http: HttpClient, public API_URL: string) { }

    httpOptions = {
        headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    }

    findAll(): Observable<T[]> {
        return this.http.get<T[]>(this.API_URL).pipe(retry(10), catchError(this.handleError))
    }

    getById(id: number): Observable<T> {
        return this.http.get<T>(this.API_URL + '/' + id).pipe(retry(2), catchError(this.handleError))
    }

    save(record: T): Observable<T> {
        return this.http.post<T>(this.API_URL, JSON.stringify(record), this.httpOptions)
            .pipe(
                retry(2),
                catchError(this.handleError)
            )
    }

    update(record: any): Observable<T> {
        return this.http.put<T>(this.API_URL + '/' + record.id, JSON.stringify(record), this.httpOptions)
            .pipe(
                retry(1),
                catchError(this.handleError)
            )
    }

    delete(record: any) {
        return this.http.delete<T>(this.API_URL + '/' + record.id, this.httpOptions)
            .pipe(
                retry(1),
                catchError(this.handleError)
            )
    }

    handleError(error: HttpErrorResponse) {
        let errorMessage = '';
        if (error.error instanceof ErrorEvent) {
            // Erro ocorreu no lado do client
            errorMessage = error.error.message;
        } else {
            // Erro ocorreu no lado do servidor
            errorMessage = `Código do erro: ${error.status}, ` + `menssagem: ${error.message}`;
        }
        console.log(errorMessage);
        return throwError(errorMessage);
    };


}
