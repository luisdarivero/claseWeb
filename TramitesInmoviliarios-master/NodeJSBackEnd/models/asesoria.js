var mongoose = require('mongoose');
var uniqueValidator = require('mongoose-unique-validator');

var Schema = mongoose.Schema;

var asesoriaSchema = new Schema({
    nombre: { type: String, unique: true, required: [true, 'El nombre es necesario'] },
    costo: { type: Number, required: [true, 'El costo del trámite es necesario'] },
    descripcion: { type: String, required: [true, 'La descripción del tramite es necesaria'] }
},
    { collection: 'asesorias' }
);

asesoriaSchema.plugin(uniqueValidator, { message: '{PATH} debe de ser único' });

module.exports = mongoose.model('Asesoria', asesoriaSchema);
