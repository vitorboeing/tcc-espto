import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { DashboardComponent } from './dashboard.component';
import { ChartModule } from 'primeng/chart';
import { MenuModule } from 'primeng/menu';
import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';
import { StyleClassModule } from 'primeng/styleclass';
import { PanelMenuModule } from 'primeng/panelmenu';
import { DashboardsRoutingModule } from './dashboard-routing.module';
import { CardModule } from 'primeng/card';
import { DataViewModule } from 'primeng/dataview';
import { PickListModule } from 'primeng/picklist';
import { OrderListModule } from 'primeng/orderlist';
import { InputTextModule } from 'primeng/inputtext';
import { DropdownModule } from 'primeng/dropdown';
import { RatingModule } from 'primeng/rating';
import { DividerModule } from 'primeng/divider';
import { AvatarGroupModule } from 'primeng/avatargroup';
import { AvatarModule } from 'primeng/avatar';
import { DialogModule } from 'primeng/dialog';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ChipModule } from 'primeng/chip';
import { TagModule } from 'primeng/tag';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        ChartModule,
        MenuModule,
        TableModule,
        StyleClassModule,
        PanelMenuModule,
        ButtonModule,
        DashboardsRoutingModule,
        CardModule,
        DataViewModule,
        DataViewModule,
		PickListModule,
		OrderListModule,
		InputTextModule,
		DropdownModule,
		RatingModule,
        DividerModule,
        AvatarGroupModule,
        AvatarModule,
        DialogModule,
        FontAwesomeModule,
        ChipModule,
        TagModule
    ],
    declarations: [DashboardComponent],
})
export class DashboardModule { }
