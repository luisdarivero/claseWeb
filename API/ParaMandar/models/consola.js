var mongoose = require('mongoose');
var uniqueValidator = require('mongoose-unique-validator');

var Juego = require('./juego');

var Schema = mongoose.Schema;

var consolaSchema = new Schema({
	_id: {type: String, unique: true, required: [true, 'El ID es necesario'] },
    nombre: { type: String, required: [true, 'El nombre es necesario'] },
    imagen: { type: String, required: [true, 'La imagen de la consola es necesaria'] },
    fichaTecnica: { type: String, required: [true, 'La ficha técnica es necesaria'] },
	juegos: [
		{type: Number, ref: 'Juego'}
	]
},
    { collection: 'consolas' },
	{ "_id": false }
);

consolaSchema.plugin(uniqueValidator, { message: '{PATH} debe de ser único' });

module.exports = mongoose.model('Consola', consolaSchema);
