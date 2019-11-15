import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ConsolasService } from '../../../servicios/consolas.service';

@Component({
    selector: 'app-resjuegos',
    templateUrl: './resjuegos.component.html',
    styleUrls: ['./resjuegos.component.css']
})
export class ResjuegosComponent implements OnInit {
    juegos:any[] = [];
    palabrasBusqueda:string;
    juegosJson:JSON;
    constructor(private activatedRoute:ActivatedRoute, private consolasService:ConsolasService) { }

    ngOnInit() {
        this.activatedRoute.params.subscribe(params => {

            this.palabrasBusqueda = params['palabrasBusqueda'];
            if(this.palabrasBusqueda != ""){
                this.consolasService.buscarJuego(this.palabrasBusqueda)
                .subscribe(
                    juegos =>{
                        this.juegosJson = <JSON>(juegos);
                        this.juegos = this.juegosJson["juegos"]
                    }
                );
            }


        })



    }

}
