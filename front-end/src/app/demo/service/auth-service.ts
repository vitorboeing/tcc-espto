import {
    HttpEvent,
    HttpHandler,
    HttpInterceptor,
    HttpRequest,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

    intercept(
        req: HttpRequest<any>,
        next: HttpHandler
    ): Observable<HttpEvent<any>> {
        console.log('passei aqui')
        const cloned = req.clone({
            headers: req.headers.set('Authorization', 'fefdbb27-d903-47f9-a8ed-da7f4f3494ad'),
        });
        return next.handle(cloned);
    }
}
