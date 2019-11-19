import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ConsolasService} from '../../servicios/consolas.service';

@Component({
    selector: 'app-infoconsola',
    templateUrl: './infoconsola.component.html',
    styleUrls: ['./infoconsola.component.css']
})
export class InfoconsolaComponent implements OnInit {

    consola:any = [];
    idConsola:string;
    consolaJson:JSON;
    constructor(private activatedRoute:ActivatedRoute,private consolasService:ConsolasService) {}


    ngOnInit() {


        this.activatedRoute.params.subscribe(params => {
            this.idConsola = params['id'];
            this.consolasService.buscarConsolaPorID(this.idConsola).subscribe(
                consola =>{
                    this.consolaJson = <JSON>(consola);
                    this.consola = this.consolaJson["consola"];

                }
            );


        });
    }

}
