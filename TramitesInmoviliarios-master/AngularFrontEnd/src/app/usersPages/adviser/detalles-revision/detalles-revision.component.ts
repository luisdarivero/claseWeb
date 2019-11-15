import { Component, OnInit } from '@angular/core';

import swal from 'sweetalert';


@Component({
    selector: 'app-detalles-revision',
    templateUrl: './detalles-revision.component.html',
    styles: []
})
export class DetallesRevisionComponent implements OnInit {

    constructor() { }

    ngOnInit() {
    }

    ejemploPDF(){
        window.open('http://www.africau.edu/images/default/sample.pdf', '_blank');
    }

    notificacion(){
        swal({
            title: "¿Desea realizar esta opción?",
            text: "Se enviará una notificación al usuario que subió este archivo para pedirle que actualice el archivo",
            icon: "warning",
            buttons: ['Cancelar','Continuar'],
            dangerMode: true,
        })
        .then((willDelete) => {
            if (willDelete) {
                swal("El mensaje se ha enviado, te enviaremos una notificación cuando puedas volver a revisar el archivo", {
                    icon: "success",
                });
            }
        });
    }

}
