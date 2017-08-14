'use strict'
module.exports = (caminho, banco) => {
    console.log(caminho + banco);
    var Actions = require('./actions')(require('../../modules/schema/' + caminho), banco) // Actions fica nossas implementacoes
    var Routes = require('./routes')(Actions) // Nossas Rotas
    var RouterExpress = require('./routerExpress') //Drive de rotas Do Express.Router()
    var RoutesExpress = require('./routesExpress')(Routes, RouterExpress) // Junto com nossas rotas e o drive buscamos no forEach a rota correta
    return RoutesExpress; //retorna a rota selecionada para o Router.use
}