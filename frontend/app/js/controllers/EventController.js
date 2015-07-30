'use strict';
module.exports = function(app){
  app.controller('EventController', ['$scope','$http','$cookies', function($scope, $http, $cookies){
    $scope.getEvents = function(){
      var responseKey = $cookies.get('response');
      console.log(responseKey);
      // $http.defaults.headers.common['x-access-token'] = responseKey;
      $http.get('/user/events/').success(function(response){
        $scope.events = response.events;
        $scope.event ='';
      });
    };

    $scope.eventLink =function(event){
      // console.log(event._id);
      $cookies.put('eventId',event._id);
      var eventIdCookie = $cookies.get('eventId');
      console.log("THis is my cookie don't eat it " + eventIdCookie);
      };

  }]);
};
