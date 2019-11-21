import { Component, OnInit } from '@angular/core';
import {FormBuilder, Validators, FormGroup, FormControl} from '@angular/forms'
import { ConsolasService } from '../../../servicios/consolas.service';
import { Router } from '@angular/router';

@Component({
    selector: 'app-crear-consola',
    templateUrl: './crear-consola.component.html',
    styles: []
})
export class CrearConsolaComponent implements OnInit {

    //Se declara el form group general
    registrationForm: FormGroup;

    //Trigger para revisar el estado del formulario
    buttonPressed: boolean = false;

    constructor(private fb: FormBuilder,private consolasService:ConsolasService,private router: Router) { }

    ngOnInit() {
        //Se declara un diccionario con los form controls necesarios
        let formItems: any = {
            '_id': new FormControl('', [Validators.required]),
            'nombre': new FormControl('', [Validators.required]),
            'imagen': new FormControl('', [Validators.required]),
            'fichaTecnica': new FormControl('', [Validators.required]),
            'juegos': new FormControl('', [Validators.required])
        };

        //Se asigna el diccionario al formGroup
        this.registrationForm = this.fb.group(formItems);
    }

    send(){
        console.log(JSON.stringify(this.registrationForm.value));
        console.log(this.registrationForm.valid)
        this.buttonPressed = true
        if(!this.registrationForm.valid){
            return;
        }
        this.guardarRegistro(this.registrationForm.value);
    }

    guardarRegistro(datos: any){
        let result = this.consolasService.crearConsola(datos)
        .subscribe(
            (resp: any) => {
                console.log(resp);
                this.router.navigate(['/administracion']);
            }
        );
    }

}
