import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ConsolasService } from '../../../servicios/consolas.service';

@Component({
    selector: 'app-resconsolas',
    templateUrl: './resconsolas.component.html',
    styleUrls: ['./resconsolas.component.css']
})
export class ResconsolasComponent implements OnInit {
    consolas:any[] = [];
    palabrasBusqueda:string;
    consolasJson:JSON;
    constructor(private activatedRoute:ActivatedRoute, private consolasService:ConsolasService) { }

    ngOnInit() {
        this.activatedRoute.params.subscribe(params => {
            this.palabrasBusqueda = params['palabrasBusqueda'];
            if(this.palabrasBusqueda != ""){
                this.consolasService.buscarConsola(this.palabrasBusqueda).subscribe(
                    consolas =>{
                        this.consolasJson = <JSON>(consolas);
                        this.consolas = this.consolasJson["consola"];

                    }
                );
            }

        });

    }

}
