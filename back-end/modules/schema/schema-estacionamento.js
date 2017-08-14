const mg = require('mongoose')
const name = require('../filds/fild-name.js');
const created_at = require('../quarks/quarks-create-now.js');
const situacao = require('./schema-situacao');
const localizacao = require('./schema-localizacao');
const usuario = require('./schema-usuario')
const endereco = require('./schema-endereco')
const Schema = mg.Schema
module.exports = new mg.Schema({
    proprietario: { type: Schema.Types.ObjectId, ref: 'usuarios' },
    nome: name,
    nome_fantasia: name,
    cnpj: String,
    lat:Number,
    lng:Number,
    endereco: endereco,
    servicos: String,
    situacao: situacao,
    localizacao: {lat:Number,lng:Number},
    funcionarios: [{ type: Schema.Types.ObjectId, ref: 'funcionarios' }],
    criada_em: created_at
})