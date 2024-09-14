import { Component, OnInit } from '@angular/core';
import { User } from '../../api/user';
import { UserService } from '../../service/user-service';
import { ActivatedRoute } from '@angular/router';

@Component({
    templateUrl: './user.component.html',
    styleUrls: ['./user.component.scss'],
})
export class UserComponent implements OnInit {
    user: User;

    amountFollowers: number;
    amountfollowing: number;

    constructor(private userService : UserService, private route: ActivatedRoute) {}

    ngOnInit(): void {
        this.route.queryParams.subscribe(params => {
            const id = params['id'];
            this.userService.getById(id).subscribe({
                next: (user) => {
                    this.user = user;
                    this.amountFollowers = this.user.followers.length;
                    this.amountfollowing = this.user.following.length;
                }
            });
          });
    }
}
