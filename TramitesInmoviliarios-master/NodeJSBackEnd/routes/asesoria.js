var express = require('express');
var app = express();

var Asesoria = require('../models/asesoria');

// ==========================================
// Obtener todas las asesorias
// ==========================================
app.get('/', (req, res, next) => {

    Asesoria.find({}, '_id nombre costo descripcion')
        .exec(
            (err, asesorias) => {

                if (err) {
                    return res.status(500).json({
                        ok: false,
                        mensaje: 'Error cargando asorias',
                        errors: err
                    });
                }

                Asesoria.countDocuments({}, (err, conteo) => {

                    res.status(200).json({
                        ok: true,
                        asesorias: asesorias,
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
// Crear una nueva asesoria
// ==========================================
app.post('/', (req, res) => {

    var body = req.body;

    var asesoria = new Asesoria({
        nombre: body.nombre,
        costo: body.costo,
        descripcion: body.descripcion
    });

    asesoria.save((err, asesoriaGuardada) => {

        if (err) {
            return res.status(400).json({
                ok: false,
                mensaje: 'Error al crear asesoria',
                errors: err
            });
        }

        res.status(201).json({
            ok: true,
            asesoria: asesoriaGuardada
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
