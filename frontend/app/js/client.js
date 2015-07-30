'use strict';

require('angular/angular');
require('angular-route/angular-route');
require('angular-cookies/angular-cookies');

var eventFunder = angular.module('eventFunder', ['ngRoute','ngCookies']);

//controllers
require("./controllers/CreateEventController.js")(eventFunder);
require('./controllers/CreateNewUserController.js')(eventFunder);
require("./controllers/EventController.js")(eventFunder);
require("./controllers/loginController.js")(eventFunder);

//routing
eventFunder.config(['$routeProvider', function($routeProvider) {
	$routeProvider
	.when('/event', {
		templateUrl: '/templates/eventTemplate.html'
	})
  .when('/login', {
    templateUrl:'/templates/loginTemplate.html'
  })
  .when('/myevent', {
    templateUrl:'/templates/myEventTemplate.html'
  })
  .when('/showEvent', {
    templateUrl:'/templates/showEvent.html'
  })
	.when('/showAllMyEvent', {
    templateUrl:'/templates/showAllMyEvent.html'
  })
	.when('/newAccount', {
    templateUrl:'/templates/CreateUserTemplate.html'
  })

}]);
