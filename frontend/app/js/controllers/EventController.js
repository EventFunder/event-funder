'use strict';
module.exports = function(app){
  app.controller('EventController', ['$scope','$http','$cookies','$location', function($scope, $http, $cookies,$location){
    $scope.getEvents = function(){
      var responseKey = $cookies.get('response');
      console.log(responseKey);
      // $http.defaults.headers.common['x-access-token'] = responseKey;
      $http.get('/user/events/').success(function(response){
        $scope.events = response.events;
        $scope.event ='';
      });
    };

    $scope.eventLink = function(event){
      // console.log(event._id);
      $cookies.put('eventId',event._id);
      // var eventIdCookie = $cookies.get('eventId');
      // console.log("This is my cookie don't eat it " + eventIdCookie);
      $location.path('/showEvent');
    };

    $scope.getEvent = function(event){
      var eventId = $cookies.get('eventId');
      $http.get('/user/events/'+ eventId).success(function(response){
        console.log(response.name);
        $scope.event = response;
        // $scope.event ='';
      });
    };

  }]);
};
