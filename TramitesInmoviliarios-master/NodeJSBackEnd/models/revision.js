var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var revisionSchema = new Schema({

    asesoria: {
        type: Schema.Types.ObjectId,
        ref: 'Asesoria',
        required: [true, 'El id de la asesoria es necesario ']
    },
    costoAsesoria: { type: Number, required: [true, 'El costo de la asesoría es necesario'] },
    usuario: { type: String, required: [false, 'El id del usuario es necesario'] },
    estatus: { type: String, required: [false, 'El id del estaus es necesario'] },
    fechaCreacion: { type: Date, required: [true, 'La fecha de creación es necesaria'] },
    esActivo: { type: Boolean, required: [true, 'El estatus de actividad de la revision es necesario'] },
    esFinalizado: { type: Boolean, required: [true, 'El estatus de finalizacion de la revision es necesario'] },
    fechaFinalizado: { type: Date, required: [false, 'La fecha de finalizacion es necesaria'] },
    esCancelado: { type: Boolean, required: [true, 'El estatus de cancelacion de la revision es necesario'] },
    fechaCancelado: { type: Date, required: [false, 'La fecha de cancelacion es necesaria'] }


},
    { collection: 'revisiones' }
);


module.exports = mongoose.model('Revision', revisionSchema);
