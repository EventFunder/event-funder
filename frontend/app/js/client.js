'use strict';

require('angular/angular');
require('angular-route/angular-route');

var eventFunder = angular.module('eventFunder', ['ngRoute']);

//controllers
// require("./controllers/EventController.js")(eventFunder);
require("./controllers/loginController.js")(eventFunder);
require("./controllers/userEventController.js")(eventFunder);

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
	.otherwise({
		redirectTo: '/'
	});
}]);
