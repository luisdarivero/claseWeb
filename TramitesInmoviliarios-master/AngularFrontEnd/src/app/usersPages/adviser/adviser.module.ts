
import { NgModule } from '@angular/core';
import { ADVISER_ROUTES } from './adviser.routes';

//modulos
import { SharedModule } from '../../shared/shared.module';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

//componentes
import { AdviserComponent } from './adviser.component';
import {RevisionesPendientesComponent} from './revisiones-pendientes/revisiones-pendientes.component';
import { DetallesRevisionComponent } from './detalles-revision/detalles-revision.component';


@NgModule({
    declarations: [
        AdviserComponent,
        RevisionesPendientesComponent,
        DetallesRevisionComponent
    ],
    exports: [
        AdviserComponent,
        RevisionesPendientesComponent,
        DetallesRevisionComponent
    ],
    imports: [
        CommonModule,
        SharedModule,
        ADVISER_ROUTES,
        FormsModule
    ]
})
export class AdviserModule { }
