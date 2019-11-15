
import { NgModule } from '@angular/core';
import { USER_ROUTES } from './user.routes';

//modulos
import { SharedModule } from '../../shared/shared.module';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

//componentes
import { UserComponent } from './user.component';
import {RevisionesComponent} from './revisiones/revisiones.component';
import { CrearRevisionComponent } from './crear-revision/crear-revision.component';


@NgModule({
    declarations: [
        UserComponent,
        RevisionesComponent,
        CrearRevisionComponent
    ],
    exports: [
        UserComponent,
        RevisionesComponent,
        CrearRevisionComponent
    ],
    imports: [
        CommonModule,
        SharedModule,
        USER_ROUTES,
        FormsModule
    ]
})
export class UserModule { }
