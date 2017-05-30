'use strict';
var mosca = require('mosca');
let tdb = require('./tdb');

tdb.setup();

let pubsubsettings = {
    //using ascoltatore
    type: 'mongo',
    url: 'mongodb://localhost:27017/mqtt',
    pubsubCollection: 'ascoltatori',
    mongo: {}
};

let moscaSettings = {
    port: 1883,			//mosca (mqtt) port
    backend: pubsubsettings	//pubsubsettings is the object we created above

};

let setup = function() {
    console.log('Mosca server is up and running')
};

let start = function() {
    var server = new mosca.Server(moscaSettings);	//here we start mosca
    server.on('ready', setup);	//on init it fires up setup()
};

let helloWorld = function() {
    return 'Hello, World!';
};

module.exports = {
    helloWorld,
    start
};