import { Component, OnInit } from '@angular/core';
import {FormGroup, FormControl, Validators} from '@angular/forms';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {

  formulario:FormGroup;


  constructor() {
    this.formulario = new FormGroup({
      'nombre': new FormControl('', [Validators.required, Validators.minLength(2)]),
      'apellidoPaterno': new FormControl('',[Validators.required, Validators.minLength(5)]),
      'apellidoMaterno': new FormControl('',[Validators.required, Validators.minLength(5)]),
      'correoElectronico': new FormControl('',[Validators.required, Validators.minLength(10),Validators.pattern("[a-z0-9._-]+@[a-z0-9.-]+\.[a-z{2,3}]$")])
    })

  }



  ngOnInit() {
  }

  guardar(){
    console.log(this.formulario.value);
  }

}
