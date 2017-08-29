const mg = require('mongoose')
const created_at = require('../quarks/quarks-create-now.js');
module.exports = PostsSchema = new mg.Schema({
    titulo: String,
    resumo: { type: String },
    imagen: { type: String },
    texto: String,
    autor: String,
    dev: {type:Boolean},
    criada_em: created_at
})
