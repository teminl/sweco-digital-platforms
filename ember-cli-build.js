/*jshint node:true*/
/* global require, module */
var EmberApp = require('ember-cli/lib/broccoli/ember-app');
var nodeSass = require('node-sass');

module.exports = function(defaults) {
  var app = new EmberApp(defaults, {
    SRI: {
      enabled: false,
    },

    fingerprint: {
      enabled: false,
    },

    // Sass
    sassOptions: {
      nodeSass: nodeSass
    },

    // Autoprefixer https://github.com/postcss/autoprefixer
    autoprefixer: {
      browsers: ['last 2 ios version'],
      cascade: false
    }

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

  // Modernizr
  app.import("bower_components/modernizr/modernizr.js");
  // Jquery browser detection
  app.import("bower_components/jquery-browser-detection/src/jquery.browser.detection.js");
  // Tether
  app.import("bower_components/tether/dist/js/tether.min.js");
  // Bootstrap
  app.import("bower_components/bootstrap/dist/js/bootstrap.min.js");
  // Progressjs
  app.import("bower_components/progress.js/minified/progress.min.js");
  // Moment
  app.import("bower_components/moment/min/moment-with-locales.min.js");
  // Bootstrap Datepicker
  app.import("bower_components/bootstrap-datetimepicker/build/js/bootstrap-datetimepicker.min.js");

  return app.toTree();
};
