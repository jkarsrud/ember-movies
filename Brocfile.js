/* global require, module */
var path = require('path');
var EmberApp = require('ember-cli/lib/broccoli/ember-app');

var app = new EmberApp({
  'ember-cli-bootswatch': 'cyborg'
});

// Use `app.import` to add additional libraries to the generated
// output files.
//
// If you need to use different assets in different
// environments, specify an object as the first parameter. That
// object's keys should be the environment name and the values
// should be the asset to use in that environment.
//
// If the library that you are including contains AMD or ES6
// modules that you would like to import into your application
// please specify an object with the list of modules as keys
// along with the exports of each module as its value.

app.import(path.join(app.bowerDirectory, 'accounting.js', 'accounting.js'));

// Import AMD module shims
app.import(path.join('vendor', 'app-shims.js'));

module.exports = app.toTree();
