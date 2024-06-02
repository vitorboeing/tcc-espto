import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserRoutingModule } from './user-routing.module';
import { UserComponent } from './user.component';
import { Avatar, AvatarModule } from 'primeng/avatar';
import { ImageModule } from 'primeng/image';
import { CardModule } from 'primeng/card';

@NgModule({
    imports: [
        CommonModule,
        UserRoutingModule,
        AvatarModule,
        ImageModule,
        CardModule
    ],
    declarations: [UserComponent]
})
export class UserModule { }
