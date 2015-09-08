'use strict'

module.exports = function(app){
  app.controller('CreateNewUserController', ['$scope','$http','$location', function($scope, $http, $location){
    $scope.submit = function(user){
      console.log(user.username);
      console.log(user.password);
      $http.post('/', user).success(function(response){
        // console.log("This is what you pass in " + user);
        // console.log('you made account');
        $location.path('/login');
      });
    };
  }]);
};
