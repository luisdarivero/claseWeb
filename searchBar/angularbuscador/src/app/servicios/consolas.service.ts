import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Injectable({
    providedIn: 'root',
})
export class ConsolasService {

    URL_SERVICIOS:string = "http://localhost:3000/";



    constructor(private http: HttpClient, private router: Router) {
        console.log("ConsolasService Creado...");
    }
    //=========================
    //Nuevos nuevos servicios
    //=========================
    buscarConsola (busqueda: string){
        let url = this.URL_SERVICIOS + 'consola/regex/' + busqueda;
        return this.http.get(url);
    }

    buscarJuego(busqueda: string){
        let url = this.URL_SERVICIOS + 'juego/regex/' + busqueda;
        return this.http.get(url);
    }

    buscarTodasConsolas(){
        let url = this.URL_SERVICIOS + 'consola';
        return this.http.get(url);
    }

    buscarConsolaPorID(id:string){
        let url = this.URL_SERVICIOS + 'consola/' + id;
        return this.http.get(url);
    }

    buscarJuegosConsola(id:string){
        let url = this.URL_SERVICIOS + 'consola/juegos/' + id;
        return this.http.get(url);
    }

    buscarJuegoEspecifico(idConsola: string, idJuego: String){
        let url = this.URL_SERVICIOS + 'consola/juego/' + idConsola + "/"+ idJuego;
        return this.http.get(url);
    }

    buscarJuegoPorID(id: string){
        let url = this.URL_SERVICIOS + 'juego/' + id;
        return this.http.get(url);
    }
    //=========================
    //Terminan nuevos servicios
    //=========================



}
