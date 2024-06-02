import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { AuthService } from 'src/app/demo/service/auth-service';
import { LayoutService } from 'src/app/layout/service/app.layout.service';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    providers: [MessageService],
    styles: [
        `
            :host ::ng-deep .pi-eye,
            :host ::ng-deep .pi-eye-slash {
                transform: scale(1.6);
                margin-right: 1rem;
                color: var(--primary-color) !important;
            }
        `,
    ],
})
export class LoginComponent {
    valCheck: string[] = ['remember'];

    email: string;
    password!: string;

    apiError: boolean;

    constructor(
        public layoutService: LayoutService,
        private authService: AuthService,
        private messageService: MessageService,
        private router: Router
    ) {}

    login(email: string, password: string) {
        this.authService.login(email, password).subscribe({
            error: (error) => {
                this.apiError = true;
                this.messageService.add({
                    severity: 'error',
                    summary: 'Error',
                    detail: error.error.message,
                });
            },
            complete: () => {
                // this.userService.getUser();
                this.router.navigate(['']);
            },
        });
    }

    logout() {
        this.authService.logout();
    }
}
