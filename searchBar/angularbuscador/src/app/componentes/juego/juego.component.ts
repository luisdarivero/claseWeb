import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ConsolasService, Consola } from '../../servicios/consolas.service';

@Component({
    selector: 'app-juego',
    templateUrl: './juego.component.html',
    styleUrls: ['./juego.component.css']
})
export class JuegoComponent implements OnInit {
    juegoJson:JSON;
    juego:any = [];
    idConsola:string;
    idJuego:string;

    constructor(private activatedRoute:ActivatedRoute,private consolasService:ConsolasService) {

    }

    ngOnInit() {
        this.activatedRoute.params.subscribe(params => {
            this.idJuego = params['idJuego'];
            this.idConsola = params['idConsola'];
            this.consolasService.buscarJuegoEspecifico(this.idConsola,this.idJuego).subscribe(
                juego =>{
                    this.juegoJson = <JSON>(juego);
                    this.juego = this.juegoJson["juego"];
                }
            );
        });
    }

}
