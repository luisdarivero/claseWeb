var express = require('express');

var app = express();

var Consola = require('../models/consola');

app.get('/', (req, res, next) => {

    Consola.find( {}, 'nombre imagen fichaTecnica',(err, consola) => {


        if (err) {
            return res.status(500).json({
                ok: false,
                mensaje: 'Error cargando consolas',
                errors: err
            });
        }

		return res.status(200).json({
			ok: true,
			consola: consola
		});


	});
});

app.get('/:id', (req, res, next) => {
	var id = req.params.id;
    Consola.findById( id, 'nombre imagen fichaTecnica',(err, consola) => {


        if (err) {
            return res.status(500).json({
                ok: false,
                mensaje: 'Error cargando consolas',
                errors: err
            });
        }

		return res.status(200).json({
			ok: true,
			consola: consola
		});


	});
});

app.get('/regex/:rx', (req, res, next) => {
	var rx = req.params.rx;
    Consola.find( {'nombre' : new RegExp(rx, 'i')},'nombre imagen fichaTecnica', (err, consola) => {


        if (err) {
            return res.status(500).json({
                ok: false,
                mensaje: 'Error cargando consolas',
                errors: err
            });
        }

		return res.status(200).json({
			ok: true,
			consola: consola
		});


	});
});

app.get('/juegos/:id', (req, res, next) => {
	var id = req.params.id;
    Consola.findById( id, 'juegos')
		.populate('juegos', 'nombre imagenDePortada')
		.exec(
			(err, consola) => {
		        if (err) {
		            return res.status(500).json({
		                ok: false,
		                mensaje: 'Error cargando consolas',
		                errors: err
		            });
		        }
				return res.status(200).json({
					ok: true,
					consola: consola
				});
			}
		);
});

app.get('/juego/:consolaid/:juegoid', (req, res, next) => {
	var consolaid = req.params.consolaid;
	var juegoid = req.params.juegoid;

    Consola.findById( consolaid, 'juegos')
		.populate(
			{
				path:'juegos',
				match: { _id: { $gte: juegoid }},
				select: 'nombre imagenDePortada developer fechaDeLanzamiento imagenes ligas'
			}
		)
		.exec(
			(err, consola) => {
		        if (err) {
		            return res.status(500).json({
		                ok: false,
		                mensaje: 'Error cargando consolas',
		                errors: err
		            });
		        }

				for(i in consola.juegos){
    			//username is the variable of the username of the like you want to find

				    if(consola.juegos[i]._id == juegoid){
						return res.status(200).json({
							juego : consola.juegos[i]

						})
				    }
				}

				return res.status(400).json({
					ok: false,
					mensaje: 'Error cargando juego'

				});
			}
		);
});

//crear una nueva consola
app.post('/', (req, res) => {

    var body = req.body;
    var listaJuegos = body.juegos;
    listaJuegos = listaJuegos.split(',');
    var listaJuegos = listaJuegos.map(function (x) {
        return parseInt(x, 10);
    });

    var consola = new Consola({
		_id: body._id,
        nombre: body.nombre,
        imagen: body.imagen,
        fichaTecnica: body.fichaTecnica,
		juegos: listaJuegos

    });

    consola.save((err, consolaGuardada) => {

        if (err) {
            return res.status(400).json({
                ok: false,
                mensaje: 'Error al crear la consola',
                errors: err
            });
        }

        res.status(201).json({
            ok: true,
            consola: consolaGuardada
        });


    });

});



module.exports = app;
