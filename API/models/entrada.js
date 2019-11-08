var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var entradaSchema = new Schema({
	autor: {type: String, required: [true, 'El autor es necesario'] },
    fecha: { type: Date, required: [true, 'La fecha  es necesaria'] },
    texto: { type: String, required: [true, 'El texto es necesario'] }
},
    { collection: 'entradas' }
);


module.exports = mongoose.model('Entrada', entradaSchema);
