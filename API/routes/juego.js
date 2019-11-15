var express = require('express');

var app = express();

var Juego = require('../models/juego');


app.get('/regex/:rx', (req, res, next) => {
	var rx = req.params.rx;
    Juego.find( {'nombre' : new RegExp(rx, 'i')},'nombre imagenDePortada developer fechaDeLanzamiento', (err, juegos) => {


        if (err) {
            return res.status(500).json({
                ok: false,
                mensaje: 'Error cargando juegos',
                errors: err
            });
        }

		return res.status(200).json({
			ok: true,
			juegos: juegos
		});


	});
});





module.exports = app;
