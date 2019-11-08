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





module.exports = app;
