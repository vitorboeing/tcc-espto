import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MeusEventosComponent } from './meus-eventos.component';
import { ButtonModule } from 'primeng/button';
import { RippleModule } from 'primeng/ripple';
import { SplitButtonModule } from 'primeng/splitbutton';
import { ToggleButtonModule } from 'primeng/togglebutton';
import { FullCalendarModule } from '@fullcalendar/angular';
import { MeusEventosRoutingModule } from './meus-eventos-routing.module';

@NgModule({
	imports: [
		CommonModule,
        MeusEventosRoutingModule,
		ButtonModule,
		RippleModule,
		SplitButtonModule,
		ToggleButtonModule,
        FullCalendarModule
	],
	declarations: [MeusEventosComponent],
})
export class MeusEventosModule { }
