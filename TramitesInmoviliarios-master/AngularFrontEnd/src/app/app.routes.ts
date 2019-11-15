import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';

import { UserComponent } from './usersPages/user/user.component';

import { AdviserComponent } from './usersPages/adviser/adviser.component';

import { NopagefoundComponent } from './shared/nopagefound/nopagefound.component';

import { PdfViewerComponent } from './generalComponents/pdf-viewer/pdf-viewer.component';

import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './login/register.component';




const appRoutes: Routes = [

    { path: 'login', component: LoginComponent },
    { path: 'register', component: RegisterComponent },
    { path: 'pdf', component: PdfViewerComponent }, //se debe borrar
    { path: '**', component: NopagefoundComponent, pathMatch: 'full' }
];


export const APP_ROUTES = RouterModule.forRoot( appRoutes, { useHash: true } );
