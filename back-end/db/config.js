'use strict'
const mongoose = require('mongoose');
const dbURI = 'mongodb://localhost:27017/coximrobotica';
mongoose.Promise = global.Promise;
mongoose.connect(dbURI, {
    useMongoClient: true,
});
mongoose.connection.on('connected', function() {
    console.log('Mongoose default connection conectado  open to ' + dbURI);
});
mongoose.connection.on('error', function() {
    console.log('Mongoose default connection open ' + err);
});
mongoose.connection.on('disconnected', function() {
    console.log('Mongoose default connection disconnected ');
});
mongoose.connection.on('openUri', function() {
    console.log('Mongoose default connection is open ');
});

process.on('SIGINT', function() {
    mongoose.connection.close(function() {
        console.log('Mongoose default connection disconnected app termination');
        process.exit(0);
    });
});