const mg = require('mongoose')
const usuario = require('./schema-usuario')
const estacionamento = require('./schema-estacionamento');
const created_at = require('../quarks/quarks-create-now.js');
const Schema = mg.Schema
module.exports = new mg.Schema({
    usuario: {
        type: Schema.Types.ObjectId,
        ref: 'usuarios'
    },
    estacionamentos: [
        { type: Schema.Types.ObjectId, ref: 'estacionamentos' }
    ],
    data_at: created_at
})