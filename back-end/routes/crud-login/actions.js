'use strict'

module.exports = (Schema, Banco) => {

    const model = require('../../modules/genericModel')(Schema, Banco)
    const callback = (err, data, res) => {
        if (err) return console.log('erro', err)
        return res.json(data);
    }
    const Actions = {}

    Actions.buscar = (req, res) => {
            const query = req.query;
            model.findOne(query, (err, data) => {
                callback(err, data, res)
            });
        },
        Actions.save = (req, res) => {
            const body = req.body;
            const modelo = new model(body);
            modelo.save((err, data) => {
                callback(err, data, res)
            });

        }



    return Actions;
}