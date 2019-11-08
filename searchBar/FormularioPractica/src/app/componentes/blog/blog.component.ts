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

  constructor( private blogService:BlogService) {
    this.formulario = new FormGroup({
      'nombre': new FormControl('', [Validators.required, Validators.minLength(5)]),
      'entrada': new FormControl('',[Validators.required, Validators.minLength(10), Validators.maxLength(30)]),

    });
    this.condicion = false;
    this.comentarios = this.blogService.obtieneBlog();
    //console.log(this.comentarios);
  }

  ngOnInit() {
  }

  guardar(nombre:string, entrada:string){
    //console.log(this.formulario.valid);
    this.condicion = true;
    if(this.formulario.valid){
        this.blogService.addComentario(nombre, entrada);
    }
  }

}
