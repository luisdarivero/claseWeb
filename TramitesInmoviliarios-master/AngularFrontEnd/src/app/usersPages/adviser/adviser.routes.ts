import { RouterModule, Routes } from '@angular/router';

import { AdviserComponent } from './adviser.component';

import {RevisionesPendientesComponent} from './revisiones-pendientes/revisiones-pendientes.component';
import { DetallesRevisionComponent } from './detalles-revision/detalles-revision.component';


const adviserRoutes: Routes = [
    {
        path: '',
        component: AdviserComponent,
        children: [
            { path: 'adviser/revisionesPendientes', component: RevisionesPendientesComponent, data: { titulo: 'Revisiones pendientes' } },
            { path: 'adviser/detallesRevision', component: DetallesRevisionComponent, data: { titulo: 'Detalles Revision' } },
            { path: '', redirectTo: '/dashboard', pathMatch: 'full' }
        ]
    }
];


export const ADVISER_ROUTES = RouterModule.forChild( adviserRoutes );
