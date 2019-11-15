import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class ConsolasService {

    URL_SERVICIOS:string = "http://localhost:3000/";

  private consolas:Consola[] = [
    {
      nombre: "PC Master Race",
      descripcion: "Juegos para PC",
      caracteristicas: "Texto y listado de las características de la consola PC Master Race...",
      imagen: "assets/pcmr.jpg",
      juegos: [
        {
          imagen: "assets/tlou.jpg",
          nombre: "Juego PC 1",
          developer: "Naughty Dog",
          lanzamiento: "2013"
        },
        {
          imagen: "assets/p5.jpg",
          nombre: "Juego PC 2",
          developer: "P-Studio",
          lanzamiento: "2017"
        },
        {
          imagen: "assets/hzd.jpg",
          nombre: "Juego PC 3",
          developer: "Guerrilla Games",
          lanzamiento: "2017"
        }
      ]
    },
    {
      nombre: "Playstation 4",
      descripcion: "Juegos para PS4",
      caracteristicas: "Texto y listado de las características de la consola Playstation 4...",
      imagen: "assets/ps4.jpg",
      juegos: [
        {
          imagen: "assets/p5.jpg",
          nombre: "Persona 5",
          developer: "P-Studio",
          lanzamiento: "2017"
        },
        {
          imagen: "assets/tlou.jpg",
          nombre: "The Last of Us",
          developer: "Naughty Dog",
          lanzamiento: "2013"
        },
        {
          imagen: "assets/hzd.jpg",
          nombre: "Horizon: Zero Dawn",
          developer: "Guerrilla Games",
          lanzamiento: "2017"
        }
      ]
    },
    {
      nombre: "Xbox One",
      descripcion: "Juegos para Xbox One",
      caracteristicas: "Texto y listado de las características de la consola Xbox One...",
      imagen: "assets/xboxone.jpg",
      juegos: [
        {
          imagen: "assets/tlou.jpg",
          nombre: "Juego Xbox 1",
          developer: "Naughty Dog",
          lanzamiento: "2013"
        },
        {
          imagen: "assets/p5.jpg",
          nombre: "Juego Xbox 2",
          developer: "P-Studio",
          lanzamiento: "2017"
        },
        {
          imagen: "assets/hzd.jpg",
          nombre: "Juego Xbox 3",
          developer: "Guerrilla Games",
          lanzamiento: "2017"
        }
      ]
    },
    {
      nombre: "Nintendo Switch",
      descripcion: "Juegos para Nintendo Switch",
      caracteristicas: "Texto y listado de las características de la consola Nintendo Switch...",
      imagen: "assets/nswitch.jpg",
      juegos: [
        {
          imagen: "assets/tlou.jpg",
          nombre: "Juego Switch 1",
          developer: "Naughty Dog",
          lanzamiento: "2013"
        },
        {
          imagen: "assets/p5.jpg",
          nombre: "Juego Switch 2",
          developer: "P-Studio",
          lanzamiento: "2017"
        },
        {
          imagen: "assets/hzd.jpg",
          nombre: "Juego Switch 3",
          developer: "Guerrilla Games",
          lanzamiento: "2017"
        }
      ]
    }
  ];

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
  //=========================
  //Terminan nuevos servicios
  //=========================

  obtieneConsolas():Consola[]{
    return this.consolas;
  }

  obtieneConsola(id:string){
    return this.consolas[id];
  }

  obtieneJuegosConsola(idConsola:string){
    return this.consolas[idConsola].juegos;
  }

  obtieneJuego(idConsola:string, idJuego:string){
    return this.consolas[idConsola].juegos[idJuego];
  }

  buscarConsolas(palabras:string):Consola[]{
    let resultadoConsolas:Consola[] = [];
    palabras = palabras.toLowerCase();
    for(let consola of this.consolas){
      let nombreConsola = consola.nombre.toLowerCase();
      if(nombreConsola.indexOf(palabras) >= 0){
          resultadoConsolas.push(consola);
        }
    }
    return resultadoConsolas;
  }

  buscarJuegos(palabras:string):Consola[]{
    let resultadoJuegos:Consola[] = [];
    let contadorConsola = 0;
    let contadorJuego = 0;
    palabras = palabras.toLowerCase();
    for(let consola of this.consolas){
      for(let juego of consola.juegos){
        let nombreJuego = juego.nombre.toLowerCase();
        if(nombreJuego.indexOf(palabras) >= 0){
          juego["consolaID"] = contadorConsola;
          juego["juegoID"] = contadorJuego;
          resultadoJuegos.push(juego);
        }
        contadorJuego ++;

      }
      contadorJuego = 0;
      contadorConsola ++;
    }
    return resultadoJuegos;
  }

}

export interface Consola{
  nombre:string;
  descripcion:string;
  caracteristicas:string;
  imagen:string;
  juegos:any;
}
