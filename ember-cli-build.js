/*jshint node:true*/
/* global require, module */
var EmberApp = require('ember-cli/lib/broccoli/ember-app');
var nodeSass = require('node-sass');

module.exports = function(defaults) {
  var app = new EmberApp(defaults, {

    // Sass
    sassOptions: {
      nodeSass: nodeSass,
      includePaths: [
        'bower_components/bootstrap/scss'
      ]
    },

    // Autoprefixer
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

  // Font-Awesome
  app.import("bower_components/font-awesome/fonts/fontawesome-webfont.eot", { destDir: "fonts" });
  app.import("bower_components/font-awesome/fonts/fontawesome-webfont.svg", { destDir: "fonts" });
  app.import("bower_components/font-awesome/fonts/fontawesome-webfont.ttf", { destDir: "fonts" });
  app.import("bower_components/font-awesome/fonts/fontawesome-webfont.woff", { destDir: "fonts" });
  app.import("bower_components/font-awesome/fonts/fontawesome-webfont.woff2", { destDir: "fonts" });
  app.import("bower_components/font-awesome/fonts/FontAwesome.otf", { destDir: "fonts" });
  // Modernizr
  app.import("bower_components/modernizr/modernizr.js");
  // Jquery browser detection
  app.import("bower_components/jquery-browser-detection/src/jquery.browser.detection.js");
  // Bootstrap
  app.import("bower_components/bootstrap/dist/js/bootstrap.min.js");
  // Jasny Bootstrap
  app.import("bower_components/jasny-bootstrap/dist/js/jasny-bootstrap.min.js");
  // Progressjs
  app.import("bower_components/progress.js/minified/progress.min.js");

  return app.toTree();
};
