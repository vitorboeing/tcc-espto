import { Component, OnInit } from '@angular/core';
import { User } from '../../api/user';

@Component({
    templateUrl: './user.component.html',
    styleUrls: ['./user.component.scss'],
})
export class UserComponent implements OnInit {
    user: User;

    // constructor(private userService : UserService) {}

    ngOnInit(): void {
        this.user = JSON.parse(localStorage.getItem('user'));
        console.log(this.user);
    }
}
