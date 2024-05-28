import { Component, OnDestroy, OnInit } from '@angular/core';
import { faRankingStar } from '@fortawesome/free-solid-svg-icons';
import { MenuItem, MessageService } from 'primeng/api';
import { DialogService } from 'primeng/dynamicdialog';
import { debounceTime, Subscription } from 'rxjs';
import { LayoutService } from 'src/app/layout/service/app.layout.service';

import { EsporteTipo, Evento } from '../../api/evento';
import { Product } from '../../api/product';
import { EventoService } from '../../service/evento.service';
import { ProductService } from '../../service/product.service';
import DateUtil from '../../util/DateUtil';
import { EventoComponent } from '../modal/evento/evento.component';
import { NovoEventoComponent } from '../modal/novo-evento/novo-evento.component';
import { SelecionaCidadeComponent } from '../modal/seleciona-cidade/seleciona-cidade.component';
import { EventoHorario } from './../../api/evento';
import { City } from '../../api/location';

export class CardTotais {
    meusEventos?: number;
    eventosCidade?: number;
    tiposEventos?: number;
}

@Component({
    templateUrl: './dashboard.component.html',
    providers: [DialogService, MessageService],
})
export class DashboardComponent implements OnInit, OnDestroy {
    items!: MenuItem[];

    products!: Product[];

    chartData: any;

    chartOptions: any;

    subscription!: Subscription;

    cardEventos: Evento[];

    cardTotais: CardTotais;

    sortField: string = '';

    sortOrder: number = 0;

    visible: boolean;

    selectedCity: City;

    faRankingStar = faRankingStar;

    constructor(
        private productService: ProductService,
        public layoutService: LayoutService,
        public dialogService: DialogService,
        private eventoService: EventoService,
        private messageService: MessageService
    ) {
        this.subscription = this.layoutService.configUpdate$
            .pipe(debounceTime(25))
            .subscribe((config) => {
                this.initChart();
            });
    }

    ngOnInit() {
        this.cardTotais = {};
        this.initChart();
        this.productService
            .getProductsSmall()
            .then((data) => (this.products = data));

        // this.findEvents();

        this.selectedCity = {
            id: 4356,
            name: 'Braço do Norte',
        } as City;

        this.findEvents(this.selectedCity.id);

        this.items = [
            { label: 'Add New', icon: 'pi pi-fw pi-plus' },
            { label: 'Remove', icon: 'pi pi-fw pi-minus' },
        ];
    }

    findEvents(cityId?: number) {
        this.eventoService.findAllByCity(cityId).subscribe({
            next: (response) => {
                this.cardEventos = response;
                this.cardTotais.eventosCidade = this.cardEventos.length;
            },
        });
    }

    initChart() {
        const documentStyle = getComputedStyle(document.documentElement);
        const textColor = documentStyle.getPropertyValue('--text-color');
        const textColorSecondary = documentStyle.getPropertyValue(
            '--text-color-secondary'
        );
        const surfaceBorder =
            documentStyle.getPropertyValue('--surface-border');

        this.chartData = {
            labels: [
                'January',
                'February',
                'March',
                'April',
                'May',
                'June',
                'July',
            ],
            datasets: [
                {
                    label: 'First Dataset',
                    data: [65, 59, 80, 81, 56, 55, 40],
                    fill: false,
                    backgroundColor:
                        documentStyle.getPropertyValue('--bluegray-700'),
                    borderColor:
                        documentStyle.getPropertyValue('--bluegray-700'),
                    tension: 0.4,
                },
                {
                    label: 'Second Dataset',
                    data: [28, 48, 40, 19, 86, 27, 90],
                    fill: false,
                    backgroundColor:
                        documentStyle.getPropertyValue('--green-600'),
                    borderColor: documentStyle.getPropertyValue('--green-600'),
                    tension: 0.4,
                },
            ],
        };

        this.chartOptions = {
            plugins: {
                legend: {
                    labels: {
                        color: textColor,
                    },
                },
            },
            scales: {
                x: {
                    ticks: {
                        color: textColorSecondary,
                    },
                    grid: {
                        color: surfaceBorder,
                        drawBorder: false,
                    },
                },
                y: {
                    ticks: {
                        color: textColorSecondary,
                    },
                    grid: {
                        color: surfaceBorder,
                        drawBorder: false,
                    },
                },
            },
        };
    }

    ngOnDestroy() {
        if (this.subscription) {
            this.subscription.unsubscribe();
        }
    }

    onSortChange(event: any) {
        const value = event.value;

        if (value.indexOf('!') === 0) {
            this.sortOrder = -1;
            this.sortField = value.substring(1, value.length);
        } else {
            this.sortOrder = 1;
            this.sortField = value;
        }
    }

    getImageSport(esporteTipo: EsporteTipo): string {
        switch (esporteTipo) {
            case EsporteTipo.VOLEI_CADEIRA_RODAS:
                return 'assets/layout/esportes/volei.png';
            case EsporteTipo.BASQUETE_CADEIRA_RODAS:
                return 'assets/layout/esportes/basquete.png';
        }
    }

    getHorario(eventoHorario: EventoHorario): string {
        return (
            DateUtil.format(
                eventoHorario.horarioComeco,
                DateUtil.DATE_TIME_PATTERN_WITHOUT_SECONDS
            ) +
            ' à ' +
            DateUtil.format(
                eventoHorario.horarioFim,
                DateUtil.DATE_TIME_PATTERN_WITHOUT_SECONDS
            )
        );
    }

    showDialogEventoEsporte(): void {
        const ref = this.dialogService.open(EventoComponent, {
            header: 'Evento',
            width: '60%',
            height: 'auto',
            contentStyle: { height: 'auto', overflow: 'visible' },
        });
    }

    showDialogNovoEvento(): void {
        const ref = this.dialogService.open(NovoEventoComponent, {
            header: 'Novo Evento',
            width: '60%',
            height: 'auto',
            contentStyle: { height: 'auto', overflow: 'visible' },
        });

        ref.onClose.subscribe((isSuccess: boolean) => {
            if (isSuccess) {
                this.findEvents();
                this.messageService.add({
                    severity: 'info',
                    summary: 'Product Selected',
                    detail: 'product.name',
                });
            }
        });
    }

    showDialogSelecionaCidade(): void {
        const ref = this.dialogService.open(SelecionaCidadeComponent, {
            header: 'Selecionar Cidade',
            width: '35vw',
            contentStyle: { overflow: 'visible', 'max-height': '300px' },
        });

        ref.onClose.subscribe((selectedCity: City) => {
            if (selectedCity) {
                this.selectedCity = selectedCity;
                this.findEvents(selectedCity.id);
                this.messageService.add({
                    severity: 'info',
                    summary: 'Product Selected',
                    detail: 'product.name',
                });
            }
        });
    }

    eventsIsNotEmpty() {
        return this.cardEventos && this.cardEventos.length > 0;
    }
}
