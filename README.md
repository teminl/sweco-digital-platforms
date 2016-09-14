# Sweco Bootstrap

* Bootstrap example page, containing HTML example elements.
* Containing the Sweco Visual Guidelines 2016 with logotype, fonts, colors, application icons and svg:s. How to use Visual Guidelines, ask [sweco-sepros](https://github.com/sweco-sepros)

## Sweco Bootstrap example page, gh-pages

* [Sweco Bootstrap example page](http://sweco.github.io/6613-sweco-bootstrap/)

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

### Deploying

### Publish to Github gh-pages

    npm run deploy

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

