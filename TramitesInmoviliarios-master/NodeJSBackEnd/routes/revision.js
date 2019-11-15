var express = require('express');
var app = express();

var Revision = require('../models/revision');
var Asesoria = require('../models/asesoria');

// ==========================================
// Obtener todas las revisiones
// ==========================================
app.get('/', (req, res, next) => {

    Revision.find({})
        .populate('asesoria', 'nombre descripcion')
        .exec(
            (err, revisiones) => {

                if (err) {
                    return res.status(500).json({
                        ok: false,
                        mensaje: 'Error cargando revisiones',
                        errors: err
                    });
                }

                Revision.countDocuments({}, (err, conteo) => {

                    res.status(200).json({
                        ok: true,
                        revisiones: revisiones,
                        total: conteo
                    });

                })




            });
});


// ==========================================
// Actualizar usuario
// ==========================================

//
// app.put('/:id', [mdAutenticacion.verificaToken, mdAutenticacion.verificaADMIN_o_MismoUsuario], (req, res) => {
//
//     var id = req.params.id;
//     var body = req.body;
//
//     Usuario.findById(id, (err, usuario) => {
//
//
//         if (err) {
//             return res.status(500).json({
//                 ok: false,
//                 mensaje: 'Error al buscar usuario',
//                 errors: err
//             });
//         }
//
//         if (!usuario) {
//             return res.status(400).json({
//                 ok: false,
//                 mensaje: 'El usuario con el id ' + id + ' no existe',
//                 errors: { message: 'No existe un usuario con ese ID' }
//             });
//         }
//
//
//         usuario.nombre = body.nombre;
//         usuario.email = body.email;
//         usuario.role = body.role;
//
//         usuario.save((err, usuarioGuardado) => {
//
//             if (err) {
//                 return res.status(400).json({
//                     ok: false,
//                     mensaje: 'Error al actualizar usuario',
//                     errors: err
//                 });
//             }
//
//             usuarioGuardado.password = ':)';
//
//             res.status(200).json({
//                 ok: true,
//                 usuario: usuarioGuardado
//             });
//
//         });
//
//     });
//
// });
//
//
//
// ==========================================
// Crear una nueva revision
// ==========================================
app.post('/', (req, res) => {

    var body = req.body;

    //Se busca la asesoria por ID
    Asesoria.findById(body.id, (err, asesoria) => {
        //Error interno del servidor
        if (err) {
            return res.status(500).json({
                ok: false,
                mensaje: 'Error al buscar la asesoria',
                errors: err
            });
        }
        //No se encuentra en la BD el ID
        if (!asesoria) {
            return res.status(400).json({
                ok: false,
                mensaje: 'La asesoria con el id ' + id + ' no existe',
                errors: { message: 'No existe una asesoria con ese ID' }
            });
        }


        //Se crea el nuevo registro de revision
        var today = new Date();
        var revision = new Revision({
            asesoria: body.id,
            costoAsesoria: asesoria.costo,
            usuario: undefined,
            estatus: undefined,
            fechaCreacion: today,
            esActivo: true,
            esFinalizado: false,
            fechaFinalizado: undefined,
            esCancelado: false,
            fechaCancelado: undefined
        });

        revision.save((err, revisionGuardada) => {

            if (err) {
                return res.status(400).json({
                    ok: false,
                    mensaje: 'Error al crear la revision',
                    errors: err
                });
            }

            res.status(201).json({
                ok: true,
                revision: revisionGuardada
            });


        });
    });



});


// // ============================================
// //   Borrar un usuario por el id
// // ============================================
// app.delete('/:id', [mdAutenticacion.verificaToken, mdAutenticacion.verificaADMIN_ROLE], (req, res) => {
//
//     var id = req.params.id;
//
//     Usuario.findByIdAndRemove(id, (err, usuarioBorrado) => {
//
//         if (err) {
//             return res.status(500).json({
//                 ok: false,
//                 mensaje: 'Error borrar usuario',
//                 errors: err
//             });
//         }
//
//         if (!usuarioBorrado) {
//             return res.status(400).json({
//                 ok: false,
//                 mensaje: 'No existe un usuario con ese id',
//                 errors: { message: 'No existe un usuario con ese id' }
//             });
//         }
//
//         res.status(200).json({
//             ok: true,
//             usuario: usuarioBorrado
//         });
//
//     });
//
// });


module.exports = app;
