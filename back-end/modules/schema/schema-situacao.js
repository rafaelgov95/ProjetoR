const mg = require('mongoose')
module.exports = new mg.Schema({
    situacao: Boolean,
    aberta: Boolean,
    vagaslivres: Number
})