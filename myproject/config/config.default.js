'use strict';

var config = require('./config.webgme'),
    validateConfig = require('webgme/config/validator');

// Add/overwrite any additional settings here
// config.server.port = 8080;
// config.mongo.uri = 'mongodb://127.0.0.1:27017/webgme_my_app';

// allowing to run our python plugins as they need server side execution
config.plugin.allowServerExecution = true;
// this adddress uses the docker-compose way of using its virtual networks
config.mongo.uri = 'mongodb://mongo:27017/mic';

//to correctly locate our blob-storage dictionary
config.blob.fsDir = '/blob-local-storage';

validateConfig(config);
module.exports = config;
