'use strict'
const mongodb = require('mongoose');

module.exports = function(Schema, BancoBD) {
    return mongodb.model(BancoBD, Schema);
}