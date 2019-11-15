import { Component, OnInit } from '@angular/core';

//se importa el servicio del usuario
import {UserService} from '../../../services/service.index';

@Component({
    selector: 'app-revisiones',
    templateUrl: './revisiones.component.html',
    styles: []
})
export class RevisionesComponent implements OnInit {

    revisiones: any = null;
    constructor(
        public _usuarioService: UserService
    ) { }

    ngOnInit() {
        this.cargarRevisiones();

    }

    cargarRevisiones(){
        let infoRevisiones = this._usuarioService.obtenerRevisiones()
        .subscribe( (resp: any) => {
            this.revisiones = resp.revisiones;
            console.log(this.revisiones);
        });
    }

}
