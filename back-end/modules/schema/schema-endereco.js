const mg = require('mongoose')

module.exports = new mg.Schema({
    rua: String,
    bairro: String,
    municipio: String,
    uf: String
})