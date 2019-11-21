import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Injectable({
    providedIn: 'root',
})
export class BlogService {

    URL_SERVICIOS:string = "http://localhost:3000/";

    private comentarios:Comments[] = [

    ];

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
    obtieneBlog():Comments[]{
        return this.comentarios;
    }

    addComentario(nombre:string, entrada:string){
        let date: Date = new Date();
        let nuevoComentario: Comments = {
            nombre: nombre,
            entrada:entrada,
            fecha: date
        };
        //console.log(nuevoComentario);
        this.comentarios.push(nuevoComentario);
        console.log(this.comentarios);
    }

}

export interface Comments{
    nombre:string;
    entrada:string;
    fecha:Date;
}
