'use strict';

require('angular/angular');
require('angular-route/angular-route');
require('angular-cookies/angular-cookies');

var eventFunder = angular.module('eventFunder', ['ngRoute','ngCookies']);

//controllers
// require("./controllers/EventController.js")(eventFunder);
require('./controllers/CreateNewUserController.js')(eventFunder);
// require("./controllers/loginController.js")(eventFunder);
// require("./controllers/userEventController.js")(eventFunder);

//routing
eventFunder.config(['$routeProvider', function($routeProvider) {
	$routeProvider
	.when('/event', {
		templateUrl: '/templates/eventTemplate.html',
		controller: 'EventController'
	})
  .when('/login', {
    templateUrl:'/templates/loginTemplate.html'
  })
  .when('/myevent', {
    templateUrl:'/templates/myEventTemplate.html'
  })
  .when('/usertemplate', {
    templateUrl:'/templates/usertemplate.html'
  })
	.when('/newAccount', {
    templateUrl:'/templates/CreateUserTemplate.html'
  })

}]);
