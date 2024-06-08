import { Component, OnInit } from '@angular/core';
import { User } from '../../api/user';
import { UserService } from '../../service/user-service';

@Component({
    templateUrl: './user.component.html',
    styleUrls: ['./user.component.scss'],
})
export class UserComponent implements OnInit {
    user: User;

    constructor(private userService : UserService) {}

    ngOnInit(): void {
        const userProfile = JSON.parse(localStorage.getItem('user'));

        this.userService.getById(userProfile.id).subscribe({
            next: (user) => (this.user = user)
        });
    }
}
