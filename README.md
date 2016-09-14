# Sweco Bootstrap

Containing the Sweco Visual Guidelines 2016 with logotype, fonts, colors, application icons and svg:s. How to use Visual Guidelines, ask [sweco-sepros](https://github.com/sweco-sepros).

### Frameworks and dependencies

* [Bootstrap 4](http://v4-alpha.getbootstrap.com/)
* [Jasny-bootstrap](http://www.jasny.net/bootstrap/)
* [Font-awesome](http://fontawesome.io/icons/)
* [Modernizr](https://modernizr.com/)
* [jQuery](https://jquery.com/)
* [jQuery-browser-detection](https://github.com/schickling/jquery-browser-detection)
* [Progress.js](http://usablica.github.io/progress.js/)

### Sweco Bootstrap example page, gh-pages

[Sweco Bootstrap example page](http://sweco.github.io/6613-sweco-bootstrap/) containing HTML example elements.

### What's included

Within the download you'll find the following directories and files, logically grouping common assets and providing both compiled and minified variations. You'll see something like this:

```
dist/
├── css/
│   ├── sweco-bootstrap.css
│   ├── sweco-bootstrap.css.map
│   ├── sweco-bootstrap.min.css
│   └── sweco-bootstrap.min.css.map
├── js/
│   ├── sweco-bootstrap.js
│   └── sweco-bootstrap.min.js
├── fonts/
│   ├── SwecoSans-Regular.*
│   ├── SwecoSans-Medium.*
│   ├── SwecoSans-Bold.*
│   ├── fontawesome-webfont.*
└── img/
    ├── apple-touch-icon.png
    ├── favicon-*.png
    ├── mstile-*.png
    ├── logotype.svg
    ├── logotype-black.svg
    └── sweco-front.png
```

We provide compiled CSS and JS (`sweco-bootstrap.*`), as well as compiled and minified CSS and JS (`sweco-bootstrap.min.*`). CSS [source maps](https://developer.chrome.com/devtools/docs/css-preprocessors) (`sweco-bootstrap.*.map`) are available for use with certain browsers' developer tools.


## Bugs and feature requests

Have a bug or a feature request? Please first read the [existing issues](https://github.com/sweco/6613-sweco-bootstrap/issues) and search for existing and closed issues. If your problem or idea is not addressed yet, [please open a new issue](https://github.com/sweco/6613-sweco-bootstrap/new).

## Prerequisites

You will need the following things properly installed on your computer.

* [Git](http://git-scm.com/)
* [Node.js](http://nodejs.org/) (with NPM)
* [Bower](http://bower.io/)
* [Ember CLI](http://ember-cli.com/)
* [PhantomJS](http://phantomjs.org/)

## Installation

1. `git clone https://github.com/sweco/6613-sweco-bootstrap.git` this repository
1. Change into the new directory
1. `npm install`
1. `bower install`

## Running / Development

* `ember s`
* Visit your app at [http://localhost:4200](http://localhost:4200).

### Code Generators

Make use of the many generators for code, try `ember help generate` for more details

### Running Tests

* `ember test`
* `ember test --server`

### Building

* `ember build` (development)
* `ember build --environment production` (production)

### Publish to Github gh-pages

* `npm run deploy

## Editing
If using Sublime Text, exclude node_modules, add e.g. the following to Settings / User:
```
"folder_exclude_patterns":
[
	".svn",
	".git",
	".hg",
	".DS_Store",
	"CVS",
	"tmp/*",
	"node_modules"
],
```
Also add syntax highlighting and tab/code completion for Less, Sass and SCSS files with package control.


## Rebuild ember-cli

For a moment, nothing happened. Then, after a second or so, nothing continued to happen.

Remove old global ember-cli, Clear NPM and Bower cache. Then install new global ember-cli and choose version.

    npm uninstall -g ember-cli
    npm cache clean
    bower cache clean
    npm install -g ember-cli
    npm install
    bower install
    ember s

## Rebuild thirdparty dependencies

This is for resetting NPM- and Bower-dependencies. If major changes in dependencies versioning or layoutstructure/webfonts. Don´t forget to do it in the working branch.

Linux/Mac/Windows Bash-shell (For ex. Git prompt)

    rm -rf node_modules
    rm -rf bower_components
    npm install
    bower install
    ember s

REM Windows CMD (Grunt dependencies needs the command patch, if it´s not done by Cygwin, then use bash-prompt)

    rd /q /s node_modules
    rd /q /s bower_components
    npm install
    bower install
    ember s

## Further Reading / Useful Links

* [ember.js](http://emberjs.com/)
* [ember-cli](http://ember-cli.com/)
* Development Browser Extensions
  * [ember inspector for chrome](https://chrome.google.com/webstore/detail/ember-inspector/bmdblncegkenkacieihfhpjfppoconhi)
  * [ember inspector for firefox](https://addons.mozilla.org/en-US/firefox/addon/ember-inspector/)

