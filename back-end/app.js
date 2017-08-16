'use strict'
require('./db/config')
var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var mongodb = require('mongoose');
var router = express.Router();
var app = express();


const login =  require('./routes/crud-login/api')('schema-login', 'login')
// const posts = require('./routes/crud-generico/api')('schema-posts', 'posts')
const posts = require('./routes/crud-generico/api')('schema-posts', 'posts')

const valida_login = require('./routes/login')

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use(function (req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type, Authorization');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
    next();
});

app.use('/api/login',login )
app.post('/api/autentica', valida_login) // autentica
app.use('/api/posts',posts) // postagens do blog
  
    // app.use(require('./routes/verifica-toke')) // verifica o token 


app.use(function (req, res) {
    res.status(404).send('Serviço não existe')
});
app.use(function (err, req, res, next) {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};

    // render the error page
    res.status(err.status || 500);
    res.render('error');
});

module.exports = app;