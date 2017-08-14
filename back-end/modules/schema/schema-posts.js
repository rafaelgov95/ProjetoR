const mg = require('mongoose')
const created_at = require('../quarks/quarks-create-now.js');
module.exports = PostsSchema = new mg.Schema({
    titulo: String,
    resumo: { type: String },
    texto: String,
    autor: String,
    criada_em: created_at
})
