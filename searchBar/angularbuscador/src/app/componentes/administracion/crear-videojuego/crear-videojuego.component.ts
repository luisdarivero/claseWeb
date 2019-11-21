import { Component, OnInit } from '@angular/core';
import {FormBuilder, Validators, FormGroup, FormControl} from '@angular/forms'
import { ConsolasService } from '../../../servicios/consolas.service';
import { Router } from '@angular/router';
@Component({
    selector: 'app-crear-videojuego',
    templateUrl: './crear-videojuego.component.html',
    styles: []
})
export class CrearVideojuegoComponent implements OnInit {
    //Se declara el form group general
    registrationForm: FormGroup;

    //Trigger para revisar el estado del formulario
    buttonPressed: boolean = false;

    constructor(private fb: FormBuilder,private consolasService:ConsolasService,private router: Router) { }

    ngOnInit() {
        //Se declara un diccionario con los form controls necesarios
        let formItems: any = {
            'id': new FormControl('', [Validators.required, Validators.pattern('^[0-9]+')]),
            'nombre': new FormControl('', [Validators.required]),
            'imagenPortada': new FormControl('', [Validators.required]),
            'developer': new FormControl('', [Validators.required]),
            'imagen1': new FormControl('', [Validators.required]),
            'imagen2': new FormControl('', [Validators.required]),
            'imagen3': new FormControl('', [Validators.required]),
            'liga1': new FormControl('', [Validators.required]),
            'liga2': new FormControl('', [Validators.required]),
            'liga3': new FormControl('', [Validators.required])
        };

        //Se asigna el diccionario al formGroup
        this.registrationForm = this.fb.group(formItems);
    }

    send(){
        console.log(JSON.stringify(this.registrationForm.value));
        console.log(this.registrationForm.valid)
        this.buttonPressed = true
        this.guardarRegistro(this.registrationForm.value);
    }

    guardarRegistro(datos: any){
        let result = this.consolasService.crearJuego(datos)
        .subscribe(
            (resp: any) => {
                console.log(resp);
                this.router.navigate(['/administracion']);
            }
        );
    }

}
