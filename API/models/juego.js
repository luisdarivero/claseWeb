var mongoose = require('mongoose');
var uniqueValidator = require('mongoose-unique-validator');

var Schema = mongoose.Schema;

var juegoSchema = new Schema({
	_id: {type: Number, unique: true, required: [true, 'El ID es necesario'] },
    nombre: { type: String, required: [true, 'El nombre es necesario'] },
    imagenDePortada: { type: String, required: [true, 'La imagen de portada es necesaria'] },
    developer: { type: String, required: [true, 'El desarrollador es necesario'] },
	fechaDeLanzamiento: { type: Date, required: [true, 'La fecha de lanzamiento es necesaria'] },
	imagenes: [
		{type: String}
	],
	ligas: [
		{type: String}
	]
},
    { collection: 'juegos' },
	{ "_id": false }
);

juegoSchema.plugin(uniqueValidator, { message: '{PATH} debe de ser único' });

module.exports = mongoose.model('Juego', juegoSchema);
