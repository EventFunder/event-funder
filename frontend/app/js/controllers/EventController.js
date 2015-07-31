'use strict';
module.exports = function(app){
  app.controller('EventController', ['$scope','$http','$cookies','$location','$routeParams', function($scope, $http, $cookies,$location,$routeParams){
    $scope.getEvents = function(){
      var responseKey = $cookies.get('response');
      console.log(responseKey);
      $http.get('/user/events/').success(function(response){
        $scope.events = response.events;
        $scope.event ='';
      });
    };

    $scope.eventLink = function(event){
      $cookies.put('eventId',event._id);
      $location.path('/showEvent');
    };

    $scope.getEvent = function(event){
      var eventId = $routeParams.event || $cookies.get('eventId');
      $http.get('/user/events/'+ eventId).success(function(response){
        console.log(response.name);
        $scope.event = response;
        alert('http://localhost:3000/#/events/'+ eventId);
      });
    };
    $scope.delete = function(event){
      var eventId = $routeParams.event || $cookies.get('eventId');
      $http.delete('/user/events/'+ eventId).success(function(response){
        console.log('you deleted your this event!!!!!!!!!!!');
        $location.path('/showAllMyEvent');
      });
    }
    $scope.showCommitters = function(){
      var eventId = $routeParams.event || $cookies.get('eventId');
      $http.get('/user/events/' + eventId + '/committers').success(function(response){
        console.log(eventId);
        console.log("committers " + response.committers[0].name);
        $scope.committers = response.committers;
        $scope.committer = '';
      });
      $scope.addCommiter = function(){
        $location.path('/events/:event');
      }
    }
    $scope.joinCommiter = function(user){
      var eventId = $routeParams.event || $cookies.get('eventId');
      $http.post('/user/events/'+ eventId + '/committers', user).success(function(response){
        console.log("you are joined!");
      });
    }

  }]);
};
