'use strict'
var jwt = require('jsonwebtoken')
var express = require('express')
var app = express();
app.set('superNode-auth', 'node-auth');
module.exports = function(req, res, next) {

    var token = req.body.token || req.query.token || req.headers['x-access-token'];

    if (token) {
        jwt.verify(token, app.get('superNode-auth'), function(err, decoded) {
            if (err) {
                return res.json({ success: false, message: 'Falha ao tentar autenticar o token!' });
            } else {
                //se tudo correr bem, salver a requisição para o uso em outras rotas
                req.decoded = decoded;
                console.log("Passo aqui")
                console.log(req.decoded)

                // res.json({
                //     type: true,
                //     data: user,
                //     token: user.token
                // });

                next();
            }
        });


    } else {
        // se não tiver o token, retornar o erro 403
        return res.status(403).send({
            success: false,
            message: 'Não há token.'
        });
    }
};