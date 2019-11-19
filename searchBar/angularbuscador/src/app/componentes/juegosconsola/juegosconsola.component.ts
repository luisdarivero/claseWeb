import { Component, OnInit } from '@angular/core';
import { ConsolasService} from '../../servicios/consolas.service';
import { ActivatedRoute } from '@angular/router';

@Component({
    selector: 'app-juegosconsola',
    templateUrl: './juegosconsola.component.html',
    styleUrls: ['./juegosconsola.component.css']
})
export class JuegosconsolaComponent implements OnInit {

    juegos:any = [];
    idConsola:string;
    juegosJson:JSON;
    constructor( private consolasService:ConsolasService,
        private activatedRoute:ActivatedRoute) {

    }

        ngOnInit() {
            //this.juegos = this.consolasService.obtieneJuegosConsola(this.idConsola);
            this.activatedRoute.params.subscribe(params => {
                this.idConsola = params['id'];
                this.consolasService.buscarJuegosConsola(this.idConsola).subscribe(
                    juegos =>{
                        this.juegosJson = <JSON>(juegos);
                        this.juegos = this.juegosJson["consola"];
                        this.juegos = this.juegos["juegos"];

                    }
                );

            });
        }

    }
