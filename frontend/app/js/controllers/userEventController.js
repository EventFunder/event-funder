'use strict';
module.exports = function(app){
  app.controller('userEventController', ['$scope','$http',function($scope, $http){
    var refresh = function(){
      $http.get('/:user/events').success(function(response){
        console.log('Got some data');
        console.log(response);
        console.log('testing');
        $scope.events = response;
        $scope.event ='';
      });
    };
    refresh();

      // refresh();
      // $scope.newArticle = function(article){
      //   console.log("This is what you pass in "+ article);
      //   $http.post('/articles', article).success(function(response){
      //     refresh();
      //   });
      // };
      // refresh();
      // $scope.edit = function (post) {
      //     post.editing = true;
      //     console.log('edit post'+ post);
      // };
      // $scope.update = function (post){
      //   $http.put('/articles/' + post._id, post).success(function(response){
      //     post.edit = false;
      //   });
      // }
      // refresh();
  }]);
};
