import { Component, OnInit } from '@angular/core';
import { ConsolasService, Consola } from '../../servicios/consolas.service';

@Component({
    selector: 'app-consolas',
    templateUrl: './consolas.component.html',
    styleUrls: ['./consolas.component.css']
})
export class ConsolasComponent implements OnInit {

    consolas:Consola[] = [];
    consolasJson:JSON;

    constructor( private consolasService:ConsolasService ) { }

    ngOnInit() {

        this.consolasService.buscarTodasConsolas().subscribe(
            consolas =>{
                this.consolasJson = <JSON>(consolas);
                this.consolas = this.consolasJson["consola"];

            }
        );
    }

}
