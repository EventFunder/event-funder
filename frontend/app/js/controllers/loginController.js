'use strict';
module.exports = function(app){
  app.controller('loginController', ['$scope','$http','$cookies','$location', function($scope, $http, $cookies,$location){
    $scope.refresh = function(user){
      console.log(user.username);
      console.log(user.password);
      $http.post('/auth', user).success(function(response){
        // var responseCookie = $cookies.put('response',response);
        // var responseKey = $cookies.get('response');
        // console.log(responseKey);
        console.log('Got some data');
        console.log(response);
        $scope.posts = response;
        $scope.post ='';
        // $location.url('/usertemplate');
      });
    };
    // $scope.submit = function(user){
    //     console.log("This is what you pass in "+ user);
    //     $http.post('/auth', user).success(function(response){
    //       refresh();
    //     });
    //   };
  }]);
};
