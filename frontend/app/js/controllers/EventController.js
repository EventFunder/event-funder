'use strict';
module.exports = function(app){
  app.controller('EventController', ['$scope','$http',function($scope, $http){

    var eventNumber = function(){
      $http.get('/andre/events/55b815ec0bcef07d21866faa').success(function(response){
        console.log('Got some data');
        console.log(response);
        $scope.event = response;
        // $scope.event ='';
      });
    };
    eventNumber();

  }]);
};
