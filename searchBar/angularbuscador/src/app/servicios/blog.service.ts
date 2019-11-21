import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Injectable({
    providedIn: 'root',
})
export class BlogService {

    URL_SERVICIOS:string = "http://localhost:3000/";



    constructor(private http: HttpClient, private router: Router) {
        console.log("BlogService Creado...");
    }

    //Empiezan metodos de request a la API
    obtenerEntradas (){
        let url = this.URL_SERVICIOS + 'entrada';
        return this.http.get(url);
    }

    crearEntrada(datosEntrada: any){
        let url = this.URL_SERVICIOS + 'entrada';
        return this.http.post(url, datosEntrada);
    }

    //Terminan metodos de request a API


}
