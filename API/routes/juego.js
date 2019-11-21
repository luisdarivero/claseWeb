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

app.get('/:id', (req, res, next) => {
	var id = req.params.id;
    Juego.findById(id,'nombre imagenDePortada developer fechaDeLanzamiento imagenes ligas', (err, juego) => {


        if (err) {
            return res.status(500).json({
                ok: false,
                mensaje: 'Error cargando juego',
                errors: err
            });
        }

		return res.status(200).json({
			ok: true,
			juego: juego
		});


	});


});

//crear un nuevo juego
app.post('/', (req, res) => {

    var body = req.body;

    var juego = new Juego({
		_id: body.id,
        nombre: body.nombre,
        imagenDePortada: body.imagenPortada,
        developer: body.developer,
		fechaDeLanzamiento: Date.now(),
		imagenes: [
			body.imagen1, body.imagen2, body.imagen3
		],
		ligas:[
			body.liga1,body.liga2,body.liga3
		]

    });

    juego.save((err, juegoGuardado) => {

        if (err) {
            return res.status(400).json({
                ok: false,
                mensaje: 'Error al crear juego',
                errors: err
            });
        }

        res.status(201).json({
            ok: true,
            juego: juegoGuardado
        });


    });

});

module.exports = app;
