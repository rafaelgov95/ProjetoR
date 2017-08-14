'use strict'
var path = require('path')
module.exports = (Schema, Banco) => {

    const model = require('../../modules/genericModel')(Schema, Banco)
    const callback = (err, data, res) => {
        if (err) return console.log('erro', err)
        console.log("deu certo");
        res.json(data);
    }
    const Actions = {}
    Actions.listar = (req, res) => {
            const query = req.query;
            model.find(query, (err, data) => {
                callback(err, data, res)
            });
        },
        Actions.buscar = (req, res) => {
            const query = req.params.nome;
            model.findOne(query, (err, data) => {
                callback(err, data, res)
            });
        },
        Actions.save = (req, res) => {
            const body = req.body;
            console.log(body);
            var modelo = new model(body);

            modelo.save((err, data) => {
                callback(err, data, res)
            });
            console.log("FIM");
            // modelo.save((err, data) => {
            //     callback(err, data, res)
            //     res.render(path.join(__dirname + '/../views/logadox.html'), { ex: user });
            // });
            // modelo.save();
        },
        Actions.remove = (req, res) => {
            const body = req.body
            model.remove(body, (err, data) => {
                callback(err, data, res)
            });



        },
        Actions.update = (req, res) => {
            const body = req.body
            const query = req.query
            model.update(query, body, (err, data) => {
                callback(err, data, res)
            });
        }


    return Actions;
}