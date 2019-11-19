import { RouterModule, Routes } from '@angular/router';

//Se tienen que importar todas las rutas que vamos a utilizar
import { CrearConsolaComponent } from './crear-consola/crear-consola.component';
import { AdministracionComponent } from './administracion.component';
import{CrearVideojuegoComponent} from './crear-videojuego/crear-videojuego.component';



const ADMIN_ROUTES: Routes = [
    {
        path: '',
        component: AdministracionComponent,
        children: [
            { path: 'administracion/crearConsola', component: CrearConsolaComponent },
            { path: 'administracion/crearJuego', component: CrearVideojuegoComponent },
            { path: '**', pathMatch: 'full', redirectTo: 'principal' }
        ]
    }
    //Se inicializan todas las rutas que vamos a utilizar.


];

//Se tiene que importar APP_ROUTING en el archivo app.module.ts como un import,
//y dentro del arreglo de imports[]
export const ADMINISTRACION_ROUTES = RouterModule.forRoot(ADMIN_ROUTES);
