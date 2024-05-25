import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { EsporteTipo, Evento } from 'src/app/demo/api/evento';
import { Usuario } from 'src/app/demo/api/usuario';

@Component({
    selector: 'app-evento',
    templateUrl: './evento.component.html',
})
export class EventoComponent implements OnInit {

    items: MenuItem[] = [];

    loading = [false, false, false, false];

    evento: Evento;

    ngOnInit() {

        this.evento = {
            nome: 'Basquete',
            quantidade: 12,
            quantidadeParticipantes: 10,
            urlImagem: "assets/layout/esportes/basquete.png",
            esporteTipo: EsporteTipo.BASQUETE_CADEIRA_RODAS,
            participantes: [
                { usuario: { nome: 'Vitor Boeing Heidemann'}},
                { usuario: { nome: 'Carlos da Silva'}},
                { usuario: { nome: 'Claudia Silveira Rodrigues'}},
                { usuario: { nome: 'Rogerio Rossini'}},
                { usuario: { nome: 'Rogerio Rossini'}},
                { usuario: { nome: 'Rogerio Rossini'}},
                { usuario: { nome: 'Rogerio Rossini'}},
                { usuario: { nome: 'Rogerio Rossini'}},
                { usuario: { nome: 'Rogerio Rossini'}},
                { usuario: { nome: 'Rogerio Rossini'}},
                { usuario: { nome: 'Rogerio Rossini'}},
                { usuario: { nome: 'Rogerio Rossini'}}
            ]
        }
        this.items = [
            { label: 'Update', icon: 'pi pi-refresh' },
            { label: 'Delete', icon: 'pi pi-times' },
            { label: 'Angular.io', icon: 'pi pi-info', url: 'http://angular.io' },
            { separator: true },
            { label: 'Setup', icon: 'pi pi-cog' }
        ];
    }

    load(index: number) {
        this.loading[index] = true;
        setTimeout(() => this.loading[index] = false, 1000);
    }

    openWhatsapp() {
      window.open('https://api.whatsapp.com/send?phone=5548998286699');
    }

}
