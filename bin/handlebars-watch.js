#!/usr/bin/env node

var optimist = require('optimist')
    .usage('Precompile handlebar templates whenever a change is made inside the watched directory.', {
      'c': {
        'type': 'string',
        'description': 'Path to Config File',
        'alias': 'config',
        'default': ''
      }
    })
    .check(function(argv) {
      if(!argv.c || argv.c === true) {
        throw "Need to specify a configuration file";
      }
    });
    
var argv = optimist.argv,
    hbwLib = require('../lib/handlebars-watch');
    
  hbwLib.watchAndCompile(argv.config);

