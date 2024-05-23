import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MeusEventosComponent } from './meus-eventos.component';

@NgModule({
	imports: [RouterModule.forChild([
		{ path: '', component: MeusEventosComponent }
	])],
	exports: [RouterModule]
})
export class MeusEventosRoutingModule { }
