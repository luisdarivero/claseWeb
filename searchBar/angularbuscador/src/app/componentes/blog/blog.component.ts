import { Component, OnInit } from '@angular/core';
import {FormGroup, FormControl, Validators} from '@angular/forms';
import { BlogService } from '../../servicios/blog.service';

@Component({
    selector: 'app-blog',
    templateUrl: './blog.component.html',
    styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {
    formulario:FormGroup;
    condicion: boolean;
    comentarios: any[] = [];

    constructor( private blogService:BlogService) {}

    ngOnInit() {
        this.formulario = new FormGroup({
            'autor': new FormControl('', [Validators.required, Validators.minLength(5)]),
            'texto': new FormControl('',[Validators.required, Validators.minLength(10), Validators.maxLength(30)]),

        });
        this.condicion = false;
        //this.comentarios = this.blogService.obtieneBlog();
        this.obtenerComentarios();
    }

    obtenerComentarios(){
        let result = this.blogService.obtenerEntradas()
        .subscribe(
            (resp: any) => {
                console.log(resp);
                this.comentarios = resp.entradas;
            }
        );
    }

    guardarComentario(data: any){
        let result = this.blogService.crearEntrada(data)
        .subscribe(
            (resp: any) => {
                console.log(resp);
                this.obtenerComentarios();
            }
        );
    }

    guardar(){
        //console.log(this.formulario.valid);
        this.condicion = true;
        if(!this.formulario.valid){
            //this.blogService.addComentario(nombre, entrada);
            return;
        }
        this.guardarComentario(this.formulario.value);
    }

}
