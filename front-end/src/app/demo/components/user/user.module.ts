import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserRoutingModule } from './user-routing.module';
import { UserComponent } from './user.component';
import { Avatar, AvatarModule } from 'primeng/avatar';
import { ImageModule } from 'primeng/image';
import { CardModule } from 'primeng/card';
import { DataViewModule } from 'primeng/dataview';
import { TabMenuModule } from 'primeng/tabmenu';
import { TabViewModule } from 'primeng/tabview';
import { ButtonModule } from 'primeng/button';
import { PanelModule } from 'primeng/panel';

@NgModule({
    imports: [
        CommonModule,
        UserRoutingModule,
        AvatarModule,
        ImageModule,
        CardModule,
        DataViewModule,
        TabViewModule,
        ButtonModule,
        DataViewModule,
        PanelModule
    ],
    declarations: [UserComponent]
})
export class UserModule { }
