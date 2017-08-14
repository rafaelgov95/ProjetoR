const mg = require('mongoose')
var bcrypt = require('bcrypt-nodejs');

const UsuarioSchema = new mg.Schema({
    email: String,
    senha: String,
    accessToken:  String ,
})


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
    bcrypt.compare(senha, this.senha, function(err, isMatch) {
        if (err) return next(err);
        next(isMatch);
    });
};
module.exports = UsuarioSchema;