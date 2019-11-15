import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

import { URL_SERVICIOS } from '../../config/config';

//import 'rxjs/add/operator/map';

@Injectable()
export class UserService {


  constructor(
      private http: HttpClient,
      private router: Router) {
          this.obtenerRevisiones();
  }

  obtenerRevisiones(){
      let url = URL_SERVICIOS + '/revision';
      return this.http.get(url);
  }

  crearRevision(asesoriaID: string){
      let url = URL_SERVICIOS + '/revision';
      return this.http.post(url, {id: asesoriaID});
  }

}
