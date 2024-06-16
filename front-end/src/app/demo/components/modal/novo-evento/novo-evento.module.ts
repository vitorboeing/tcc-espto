import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { AvatarModule } from 'primeng/avatar';
import { BadgeModule } from 'primeng/badge';
import { ButtonModule } from 'primeng/button';
import { DataViewModule } from 'primeng/dataview';
import { DividerModule } from 'primeng/divider';
import { InputSwitchModule } from 'primeng/inputswitch';
import { InputTextModule } from 'primeng/inputtext';
import { RadioButtonModule } from 'primeng/radiobutton';
import { RippleModule } from 'primeng/ripple';
import { SidebarModule } from 'primeng/sidebar';
import { TagModule } from 'primeng/tag';
import { AppConfigModule } from 'src/app/layout/config/config.module';

import { NovoEventoComponent } from './novo-evento.component';
import { DropdownModule } from 'primeng/dropdown';
import { FieldsetModule } from 'primeng/fieldset';
import { CalendarModule } from 'primeng/calendar';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { MultiSelect, MultiSelectModule } from 'primeng/multiselect';
import { GoogleMapsModule } from '@angular/google-maps';
import { AutoCompleteModule } from 'primeng/autocomplete';
import { SharedModule } from "../../../shared/shared.module";
import { AccordionModule } from 'primeng/accordion';
import { CheckboxModule } from 'primeng/checkbox';

@NgModule({
    declarations: [NovoEventoComponent],
    exports: [NovoEventoComponent],
    imports: [
        BrowserModule,
        FormsModule,
        ReactiveFormsModule,
        HttpClientModule,
        BrowserAnimationsModule,
        InputTextModule,
        SidebarModule,
        BadgeModule,
        RadioButtonModule,
        InputSwitchModule,
        RippleModule,
        RouterModule,
        AppConfigModule,
        ButtonModule,
        DataViewModule,
        AvatarModule,
        DividerModule,
        TagModule,
        DropdownModule,
        FieldsetModule,
        CalendarModule,
        InputTextareaModule,
        MultiSelectModule,
        GoogleMapsModule,
        AutoCompleteModule,
        SharedModule,
        AccordionModule,
        CheckboxModule
    ]
})
export class NovoEventoModule { }
