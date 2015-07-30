'use strict';
module.exports = function(app){
  app.controller('EventController', ['$scope','$http','$cookies', function($scope, $http, $cookies){

    $scope.getEvents = function(){
      var responseKey = $cookies.get('response');
      console.log(responseKey);
      // $http.defaults.headers.common['x-access-token'] = responseKey;
      $http.get('/user/events/').success(function(response){
        // console.log('Got some data');
        // console.log(response);
        $scope.events = response.events;
        // console.log('response.events ' + response.events);
        // console.log('response.events[0] '+ response.events[0].name);
        $scope.event ='';
      });
    };

  }]);
};
