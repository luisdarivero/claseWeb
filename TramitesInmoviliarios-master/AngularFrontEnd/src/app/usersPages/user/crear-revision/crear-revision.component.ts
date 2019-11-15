import { Component, OnInit } from '@angular/core';

//se importa el servicio del usuario
import {UserService} from '../../../services/service.index';

@Component({
  selector: 'app-crear-revision',
  templateUrl: './crear-revision.component.html',
  styles: []
})
export class CrearRevisionComponent implements OnInit {

  constructor(public _usuarioService: UserService) { }

  ngOnInit() {
  }

  crearRevision(){
      let infoRevisiones = this._usuarioService.crearRevision("5dadec25c395d0460cb41920")
      .subscribe( (resp: any) => {
          console.log(resp);
      });
  }

  ejemploPDF(){
      window.open('http://www.africau.edu/images/default/sample.pdf', '_blank');
  }

}
