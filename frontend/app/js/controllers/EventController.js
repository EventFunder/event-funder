'use strict';
module.exports = function(app){
  app.controller('EventController', ['$scope','$http',function($scope, $http){
    var refresh = function(){
      $http.get('/:user/events/:event').success(function(response){
        console.log('Got some data');
        console.log(response);
        $scope.posts = response;
        $scope.post ='';
      });
    };
    refresh();
      
  }]);
};
