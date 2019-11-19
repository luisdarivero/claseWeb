import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ConsolasService} from '../../servicios/consolas.service';

@Component({
    selector: 'app-juego',
    templateUrl: './juego.component.html',
    styleUrls: ['./juego.component.css']
})
export class JuegoComponent implements OnInit {
    juegoJson:JSON;
    juego:any = [];
    idJuego:string;

    constructor(private activatedRoute:ActivatedRoute,private consolasService:ConsolasService) {

    }

    ngOnInit() {
        this.activatedRoute.params.subscribe(params => {
            this.idJuego = params['idJuego'];
            this.consolasService.buscarJuegoPorID(this.idJuego).subscribe(
                juego =>{
                    this.juegoJson = <JSON>(juego);
                    this.juego = this.juegoJson["juego"];
                }
            );
        });
    }

}
