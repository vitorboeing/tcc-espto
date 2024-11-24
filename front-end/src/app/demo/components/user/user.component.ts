import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Gender, User } from '../../api/user';
import { UserService } from '../../service/user-service';
import DateUtil from '../../util/DateUtil';
import { EnumUtil } from '../../util/EnumUtil';

@Component({
    templateUrl: './user.component.html',
    styleUrls: ['./user.component.scss'],
})
export class UserComponent implements OnInit {
    user: User;

    amountFollowers: number;
    amountfollowing: number;
    isUserLogged: boolean;
    isAlreadyFollow: boolean;
    userLogged: User;

    constructor(
        private userService: UserService,
        private route: ActivatedRoute
    ) {}

    ngOnInit(): void {
        this.loadUser();
    }

    loadUser() {
        this.userLogged = JSON.parse(localStorage.getItem('user')) as User;
        this.route.queryParams.subscribe((params) => {
            const id = params['id'];
            this.userService.getById(id).subscribe({
                next: (user) => {
                    this.user = user;
                    this.isUserLogged = this.user.id === this.userLogged.id;

                    if (!this.isUserLogged)
                        this.isAlreadyFollow = this.user.followers.some((follower) => follower.follower.id === this.userLogged.id);

                    this.amountFollowers = this.user.followers.length;
                    this.amountfollowing = this.user.following.length;
                },
            });
        });
    }

    converterDateBirthday(): string {
        return `05`
        return DateUtil.format(this.user.birthday, DateUtil.DATE_PATTERN);
    }

    converterEnumGender(): string {
        return EnumUtil.getKey(Gender, this.user.gender);
    }

    getTypesDisability(): string {
        return `Deficiência Física, Deficiência Visual`
        // if (!this.user.typesDisability) return '';

        // return this.user.typesDisability.join(', ');
    }

    followUser(): void {
        this.userService.followUser(this.userLogged.id, this.user.id).subscribe(() => this.loadUser())
    }

    unFollowUser(): void {
        this.userService.unfollowUser(this.userLogged.id, this.user.id).subscribe(() => this.loadUser())
    }
}
