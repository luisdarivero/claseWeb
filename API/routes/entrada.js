var express = require('express');

var app = express();

var Entrada = require('../models/entrada');


app.get('/', (req, res, next) => {

    Entrada.find( {},'autor fecha texto', (err, entradas) => {


        if (err) {
            return res.status(500).json({
                ok: false,
                mensaje: 'Error cargando entradas',
                errors: err
            });
        }

		return res.status(200).json({
			ok: true,
			entradas: entradas
		});


	});
});

//crear una nueva consola
app.post('/', (req, res) => {

    var body = req.body;

    var entrada = new Entrada({
		autor: body.autor,
        texto: body.texto,
        fecha: new Date()

    });

    entrada.save((err, entradaGuardada) => {

        if (err) {
            return res.status(400).json({
                ok: false,
                mensaje: 'Error al crear la entrada',
                errors: err
            });
        }

        res.status(201).json({
            ok: true,
            entrada: entradaGuardada
        });


    });

});



module.exports = app;
