import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'pipesAngular';
  juego = 'MI juego EN MAYUSCULAS y minusculas';
  lista = [0,1,2,3,4,5,6,7,8,9,10]
  numero = 345.98765
}
