import { Injectable } from '@angular/core';

@Injectable()
export class BlogService {

  private comentarios:Comments[] = [

  ];

  constructor() {
    console.log("BlogService Creado...");
  }

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
