import {
    HttpClient,
    HttpEvent,
    HttpHandler,
    HttpInterceptor,
    HttpRequest,
} from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, CanActivateFn, Router, RouterStateSnapshot } from '@angular/router';
import { jwtDecode } from 'jwt-decode';
import * as moment from 'moment';
import { Observable, shareReplay, tap } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable()
export class AuthService {
    private apiRoot = environment.API;

    constructor(private http: HttpClient, private router: Router) {}

    private setSession(authResult: any) {
        const token = authResult.token;
        const payload = jwtDecode<any>(token);
        const expiresAt = moment.unix(payload.exp);
        console.log(payload);
        localStorage.setItem('token', authResult.token);
        localStorage.setItem('user', JSON.stringify(authResult.user));
        localStorage.setItem('expires_at', JSON.stringify(expiresAt.valueOf()));
    }

    get token(): string {
        return localStorage.getItem('token');
    }

    login(email: string, password: string) {
        return this.http
            .post(this.apiRoot.concat('/auth/login'), { email, password })
            .pipe(
                tap((response) => this.setSession(response)),
                shareReplay()
            );
    }

    signup(userName: string, email: string, password: string) {
        return this.http
            .post(this.apiRoot.concat('/auth/register'), {
                userName,
                email,
                password,
            })
            .pipe(
                tap((response) => this.setSession(response)),
                shareReplay()
            );
    }

    logout() {
        localStorage.clear;
         this.router.navigate(['/landing']);
    }

    refreshToken() {
        if (
            moment().isBetween(
                this.getExpiration().subtract(1, 'days'),
                this.getExpiration()
            )
        )
            return this.http
                .post(this.apiRoot.concat('refresh-token/'), {
                    token: this.token,
                })
                .pipe(
                    tap((response) => this.setSession(response)),
                    shareReplay()
                )
                .subscribe();

        return null;
    }

    getExpiration() {
        const expiration = localStorage.getItem('expires_at');
        const expiresAt = JSON.parse(expiration);

        return moment(expiresAt);
    }

    isLoggedIn() {
        return moment().isBefore(this.getExpiration());
    }

    isLoggedOut() {
        return !this.isLoggedIn();
    }
}

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        const token = localStorage.getItem('token');

        console.log('passei aqui interceptor');

        if (token) {
            const cloned = req.clone({
                headers: req.headers.set(
                    'Authorization',
                    'Bearer '.concat(token)
                ),
            });

            return next.handle(cloned);
        } else {
            return next.handle(req);
        }
    }
}

@Injectable({
    providedIn: 'root'
  })
  class PermissionsService {

    constructor(private authService: AuthService, private router: Router) {}

    canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot,): boolean {

        if (this.authService.isLoggedIn()) {
            // this.authService.refreshToken();
            return true;
        } else {
            this.authService.logout();
            return false;
        }
    }
  }

  export const AuthGuard: CanActivateFn = (next: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean => {
    return inject(PermissionsService).canActivate(next, state);
  }

interface JWTPayload {
    user_id: number;
    username: string;
    email: string;
    iat: number;
    exp: number;
}
