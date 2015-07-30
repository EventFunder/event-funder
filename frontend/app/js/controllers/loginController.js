// 'use strict';
// module.exports = function(app){
//   app.controller('loginController', ['$scope','$http','$cookies','$location', function($scope, $http, $cookies,$location){
//     var refresh = function(){
//
//       $http.post('/user').success(function(response){
//         var response = $cookies.put('response',response);
//         responseCookie = $cookies.get(response);
//         consle.log(responseCookie)
//         console.log('Got some data');
//         console.log(response);
//         $scope.posts = response;
//         $scope.post ='';
//         $location.url('/usertemplate');
//       });
//     };
//     $scope.submit = function(user){
//         console.log("This is what you pass in "+ user);
//         $http.post('/auth', user).success(function(response){
//           refresh();
//         });
//       };
//   }]);
// };
