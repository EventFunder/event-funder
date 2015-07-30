'use strict';
module.exports = function(app){
  app.controller('CreateEventController', ['$scope','$http','$cookies',function($scope, $http,$cookies){

    $scope.submit = function(event){
      console.log("my events name " + event.name);
      console.log("my events date " + event.date);
      var responseKey = $cookies.get('response');
      $http.post('/user/events', event).success(function(response){
        console.log('Created a event!!');

      });
    }
  }]);
};
