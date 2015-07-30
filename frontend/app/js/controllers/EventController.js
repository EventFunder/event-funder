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
      var responseKey = $cookies.get('response');
      $http.get('/user/events/').success(function(response){
        $scope.events = response.events._id;
        console.log(response.events[this]._id);
        $scope.event ='';
      });

    }

  }]);
};
