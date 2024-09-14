import { UserService } from './../demo/service/user-service';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { LayoutService } from './service/app.layout.service';
import { AuthService } from '../demo/service/auth-service';
import { User } from '../demo/api/user';
import { AutoCompleteCompleteEvent, AutoCompleteSelectEvent } from 'primeng/autocomplete';
import { Router } from '@angular/router';

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

    users: User[];
    suggestionsUsers: User[]
    selectedUser: User;

    constructor(
        public layoutService: LayoutService,
        private authService: AuthService,
        private userService: UserService,
        private router: Router
    ) {}

    ngOnInit(): void {
        this.getCurrentUser();
        this.userService.findAll().subscribe((users) => {
            this.users = users;
        });
    }

    signOut() {
        this.authService.logout();
    }

    getCurrentUser() {
        this.user = JSON.parse(localStorage.getItem('user'));
    }

    search(event: AutoCompleteCompleteEvent) {
        console.log('passei aqui');
        this.suggestionsUsers = this.users.filter(item => {
            const fullName =  item.name + ' ' + item.lastName;
            return item.name.toLowerCase().includes(event.query.toLowerCase());
        });
    }

    onSelectUser(event: AutoCompleteSelectEvent) {
        console.log(event.value.id)
        const url = this.router.serializeUrl(
            this.router.createUrlTree(['/user'] , { queryParams: { id: event.value.id } })
          );
          window.open(url, '_blank');
    }

    openUserProfile() {
        const url = this.router.serializeUrl(
            this.router.createUrlTree(['/user'] , { queryParams: { id: this.user.id } })
          );
          window.open(url, '_blank');
    }
}
