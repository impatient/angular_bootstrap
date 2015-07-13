# angular_bootstrap - FORT Frederic

Client code for angular.bootstrap.

Technologies used: Yeoman, Grunt, bower, angularjs, bootstrap for css.

# angular_bootstrap
Good start for all your angular project 

Objectives
-------

Build a generic start for every angular project 


Done
-------

* Create a git repository
* Create the app with yeoman 
* Use ui-rooter
* split the app into modules
* Use Bootstrap-UI
* Load properly bootsrap SASS (in order to easily override bootstrap variables)

TODO
-------

* Create a REST API Call Factory
* Create a HTTP interceptor
* Handle error message error
* Create different environment build(dev, stagging, prod)
* Use SvgIcons 
* Use wiredep to dynamically load bower dependencies
* Use ngtemplates

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
