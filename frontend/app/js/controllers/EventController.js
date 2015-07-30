'use strict';
module.exports = function(app){
  app.controller('EventController', ['$scope','$http','$cookies', function($scope, $http, $cookies){

    $scope.getEvents = function(){
      var responseKey = $cookies.get('response');
      console.log(responseKey);
      // $http.defaults.headers.common['x-access-token'] = responseKey;
      $http.get('/user/events/').success(function(response){
        console.log('Got some data');
        console.log(response);
        $scope.event = response;
        $scope.event ='';
      });
    };

  }]);
};
