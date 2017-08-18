var jwt = require('jsonwebtoken')
var moment = require('moment')
var mongoose = require('mongoose')
var segredo = 'seusegredodetoken'
var Usuario = require('../modules/genericModel')(require('../modules/schema/schema-login'), 'login');
var express = require('express')
var app = express();
var path = require('path');
var http = require('http')

var router = express.Router();
app.set('superNode-auth', 'node-auth');


router.post('/', function (req, res, next) {
    console.log(req.body)
    var email = req.body.email || '';
    var senha = req.body.senha || '';
    if (email == '' || senha == '') {
        return res.sendStatus(401);
    }
    console.log(email);
    console.log(senha);


    Usuario.findOne({ email: email }, function (err, user) {
        if (err || user == null) {
            return res.sendStatus(401)
        }

        user.verificaSenha(senha, function (isMatch) {

            if (!isMatch) {

                return res.sendStatus(401);
            }

            var token = jwt.sign(user, app.get('superNode-auth'), {
                expiresIn: 60 * 60 * 24 //o token irá expirar em 24 horas
            });
            user.accessToken = token;

            console.log(token);
            let getData = () => {

                return 'qualquer que seja o seu resultado aqui';
            }

            var expires = moment().add(7, 'days').valueOf();

            res.status(200).json({
                user: user.toJSON()
            });

        });
    });
});

module.exports = router;
