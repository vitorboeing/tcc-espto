import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { LayoutService } from './service/app.layout.service';
import { AuthService } from '../demo/service/auth-service';
import { User } from '../demo/api/user';

@Component({
    selector: 'app-topbar',
    templateUrl: './app.topbar.component.html',
})
export class AppTopBarComponent implements OnInit {
    items!: MenuItem[];

    user: User;

    @ViewChild('menubutton') menuButton!: ElementRef;

    @ViewChild('topbarmenubutton') topbarMenuButton!: ElementRef;

    @ViewChild('topbarmenu') menu!: ElementRef;

    constructor(
        public layoutService: LayoutService,
        private authService: AuthService
    ) {}

    ngOnInit(): void {
        this.getCurrentUser();
    }

    signOut() {
        this.authService.logout();
    }

    getCurrentUser() {
        this.user = JSON.parse(localStorage.getItem('user'));
    }
}
