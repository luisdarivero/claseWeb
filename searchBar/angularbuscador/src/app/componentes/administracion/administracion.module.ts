import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import{FormsModule,ReactiveFormsModule} from '@angular/forms';
import { AdministracionComponent } from './administracion.component';
import { ADMINISTRACION_ROUTES } from './administracion.routes';
import{CrearConsolaComponent} from './crear-consola/crear-consola.component';
import{CrearVideojuegoComponent} from './crear-videojuego/crear-videojuego.component';

@NgModule({
    declarations: [
        AdministracionComponent,CrearConsolaComponent,CrearVideojuegoComponent
    ],
    imports: [
        BrowserModule,
        ADMINISTRACION_ROUTES,
        FormsModule,ReactiveFormsModule,HttpClientModule
    ],
    exports: [
        CrearConsolaComponent,AdministracionComponent
    ]
})
export class AdministracionModule { }
