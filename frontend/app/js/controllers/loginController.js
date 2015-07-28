'use strict';
module.exports = function(app){
  app.controller('loginController', ['$scope','$http',function($scope, $http){
    var refresh = function(){
      $http.post('/login').success(function(response){
        console.log('Got some data');
        console.log(response);
        $scope.posts = response;
        $scope.post ='';
      });
    };

  }]);
};
