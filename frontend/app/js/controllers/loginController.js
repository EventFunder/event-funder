'use strict';
module.exports = function(app){
  app.controller('loginController', ['$scope','$http','$cookies','$location', function($scope, $http, $cookies,$location){
    $scope.refresh = function(user){
      console.log(user.username);
      console.log(user.password);
      $http.post('/auth', user).success(function(response){
        var responseCookie = $cookies.put('response',response.token);
        var responseKey = $cookies.get('response');
        $http.defaults.headers.common['x-access-token'] = responseKey;
        console.log("this is your cookie please don't lose it "+ responseKey);
        $location.path('/showAllMyEvent');
      });
    };
    $scope.createAcount = function(){
      $location.path('/newAccount');
    }
  }]);
};
