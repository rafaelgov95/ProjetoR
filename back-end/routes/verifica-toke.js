'use strict'
var jwt = require('jsonwebtoken')
var express = require('express')
var app = express();
app.set('superNode-auth', 'node-auth');
module.exports = function (req, res, next) {
 console.log("entro aqui")
    var token = req.body.token || req.query.token || req.headers['x-access-token'];

    if (token) {
        jwt.verify(token, app.get('superNode-auth'), function (err, decoded) {
            if (err) {
                return res.json({ success: false, message: 'Falha ao tentar autenticar o token!' });
            } else {
                req.decoded = decoded;
                console.log("Passo aqui")
                console.log(req.decoded)
                next();
            }
        });


    } else {
        return res.status(403).send({
            success: false,
            message: 'Não há token.'
         
        });
           console.log( 'Não há token.')
    }
};