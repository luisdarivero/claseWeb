import { Injectable } from '@angular/core';

@Injectable()
export class SidebarService {

    menu: any = [
        {
            titulo: 'Usuario',
            icono: 'mdi mdi-account',
            submenu: [
                { titulo: 'Crear Revision', url: '/user/crearRevision' },
                { titulo : 'Revisiones', url: '/user/revisiones' }
            ]
        },
        {
            titulo: 'Asesor',
            icono: 'mdi mdi-account-search',
            submenu: [
                { titulo: 'Revisiones pendientes', url: '/adviser/revisionesPendientes' },
                { titulo : 'Detalles de revisión', url: '/adviser/detallesRevision' }
            ]
        }
    ];

    constructor() { }

}
