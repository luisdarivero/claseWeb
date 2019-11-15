import { RouterModule, Routes } from '@angular/router';

import { UserComponent } from './user.component';

import {RevisionesComponent} from './revisiones/revisiones.component';
import { CrearRevisionComponent } from './crear-revision/crear-revision.component';


const userRoutes: Routes = [
    {
        path: '',
        component: UserComponent,
        children: [
            { path: 'user/revisiones', component: RevisionesComponent, data: { titulo: 'Revisiones' } },
            { path: 'user/crearRevision', component: CrearRevisionComponent, data: { titulo: 'Crear Revisiones' } },
            { path: '', redirectTo: '/dashboard', pathMatch: 'full' }
        ]
    }
];


export const USER_ROUTES = RouterModule.forChild( userRoutes );
