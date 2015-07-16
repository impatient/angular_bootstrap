# angular_bootstrap

* Good start for all your angular project 
* Technologies used: Yeoman, Grunt, bower, angularjs, bootstrap for css.


Objective
-------

Build a generic start for every angular project 


Done
-------

* Create a git repository
* Create the app with yeoman 
* Use ui-rooter
* Split the app into modules
* Use Bootstrap-UI
* Load properly bootsrap SASS (in order to easily overwrite bootstrap variables)
* Create different environment build(dev, stagging, prod)
* Use wiredep to dynamically load bower dependencies (app & test)
* Use angular ngtemplates for caching your HTML templates with $templateCache.


TODO
-------

* Create a REST API Call Factory
* Create a HTTP interceptor
* Handle error message error
* Use SvgIcons
* Use John Papa Styles

* Many other improvements to come

## Requirements

- NPM (Comes with [Node.js](http://nodejs.org/))
- Ruby (comes pre-installed on Mac) - [installation guide](https://www.ruby-lang.org/en/installation/)
- SASS - [installation](http://sass-lang.com/install)
- Compass - [installation](http://compass-style.org/install/)

## How to run it
1. Unzip the angular.bootstrap.zip file inside your folder
2. Make sure you have Grunt installed `sudo npm install -g grunt grunt-cli`
3. Make sure you have Bower installed `sudo npm install -g bower`
4. Install project dependencies `npm install && bower install`
5. Run server `grunt serve` at the root of the project will open up browser window at `http://localhost:9000/apps/index.html`

## Build
- Running `grunt build` will build the project into the dist directory.
- Running `grunt staging` will build the staging project into the dist directory.
- Running `grunt production` will build the production project into the dist directory.



## Testing

Running `grunt test` will run the unit tests with karma.
