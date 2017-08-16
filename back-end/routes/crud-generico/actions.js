'use strict'
var express = require('express')
var app = express();
module.exports = (Schema, Banco) => {

    const model = require('../../modules/genericModel')(Schema, Banco)
    const callback = (err, data, res) => {
        if (err) return console.log('erro', err)
        return res.json(data);
    }
    const Actions = {}
    Actions.listar = (req, res) => {
        const query = req.query;
        console.log("bloqueado")
        // app.use(require('../verifica-toke'))
        console.log("Listando")
        model.find(query, (err, data) => {
            callback(err, data, res)
            console.log(data)
        });
    },
        Actions.buscar = (req, res) => {
            const query = req.query;
            console.log(query)
            model.findOne(query, (err, data) => {
                callback(err, data, res)
            });

        },
        Actions.save = (req, res) => {
            const body = req.body;
            app.use(require('../verifica-toke'))
            console.log("Enviado")
            const modelo = new model(body);
            modelo.save((err, data) => {
                callback(err, data, res)
            });
        },
        Actions.remove = (req, res) => {
            app.use(require('../verifica-toke'))
            model.remove(re.query, (err, data) => {
                callback(err, data, res)
            });
        },
        Actions.update = (req, res) => {
            const body = req.body
            const query = req.query
            app.use(require('../verifica-toke'))
            model.update(query, body, (err, data) => {
                callback(err, data, res)
            });
        }


    return Actions;
}