import { NgModule } from '@angular/core';

import { EventoModule } from './evento/evento.module';
import { SelecionaCidadeModule } from './seleciona-cidade/seleciona-cidade.module';
import { NovoEventoModule } from './novo-evento/novo-evento.module';

@NgModule({
	imports: [
        EventoModule,
        NovoEventoModule,
        SelecionaCidadeModule
	],
})
export class ModalModule { }
