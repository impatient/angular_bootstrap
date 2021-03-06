'use strict';

/**
 * Main module of the application.
 */
angular
  .module('angular.bootstrap.module1', [
    //load dependencies specific to this module
  ])
  .config(function ($stateProvider, $urlRouterProvider) {

    var PATH = '/modules/module1';
    //default routes if the url does not match any of the followings
    $urlRouterProvider.otherwise('/module1');

    // Now set up the states
    $stateProvider   
      .state('main.module1',{
        url:'module1', 
        templateUrl: PATH+'/views/main.html',
        controller: 'Module1MainCtrl',
        controllerAs:'module1', 
        resolve:{
          module1Data : ['API', function(API){
            //return API.get('modules1'); Uncomment when API is ready
            return [{step:'init',   res: "OK"},
                    {step:'test',   res: "OK"},
                    {step:'result', res:"OK"}];
          }]
        }
      });
  }); 