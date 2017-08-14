const mg = require('mongoose')
var bcrypt = require('bcrypt-nodejs');
const nome = require('../filds/fild-name');
const sexo = require('../filds/fild-sexo')
const created_at = require('../quarks/quarks-create-now.js');
// console.log("entro no usuario");
module.exports = UsuarioSchema = new mg.Schema({
        nome: nome,
        email: { type: String, required: true, unique: true },
        senha: String,
        // sexo: String,
        // cpf: { type: String, required: true, unique: true },
        // telefone: Number,
        accessToken: String ,
        criada_em: created_at
    })
    // console.log(UsuarioSchema)


UsuarioSchema.pre('save', function(next) {
    var user = this;
    if (!user.isModified('senha')) return next();
    bcrypt.genSalt(5, function(err, salt) {
        if (err) return next(err);
        bcrypt.hash(user.senha, salt, null, function(err, hash) {
            if (err) return next(err);
            user.senha = hash;
            next();
        });
    });
});
//3
UsuarioSchema.methods.verificaSenha = function(senha, next) {
    console.log('teste3')
    bcrypt.compare(senha, this.senha, function(err, isMatch) {
        if (err) return next(err);
        next(isMatch);
    });
};