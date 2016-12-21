angular
  .module('Codesmith.HomeController', ['ngRoute', 'ngCookies', 'Codesmith.SavedController', 'Codesmith.ImageCardController'])
  .controller('HomeController', HomeController);


function HomeController($scope, $http, $location, $cookies, $route) {
  $scope.unit = "Unit 10 Prototype";
  $scope.data = {};
  $scope.imageCards = {};
  $scope.simpleCards = {};
  $scope.data.username;
  $scope.data.password;
  $scope.loggedOut = (!$cookies.get('User'));
  $scope.logOut = function() {
    $cookies.remove('User');
  };
  $scope.redirect = function() {
    $route.reload();
  }

  $scope.getSimpleCards = function(){
    $http({
      url: 'http://localhost:3000/getSimpleCards',
      method: 'GET'
    }).then(function(response){ $scope.simpleCards = response.data; console.log($scope.simpleCards)});
  }

  $scope.getImageCards = function(){
    $http({
      url: 'http://localhost:3000/getImageCards',
      method: 'GET'
    }).then(function(response){ $scope.imageCards = response.data; console.log($scope.imageCards)});
  }

  $scope.register= function(){
    if(!$scope.data.username || !$scope.data.password) {
      return alert('You forget to fill out username or password')
    }
    else {
      $http({
        url: 'http://localhost:3000/register',
        method: 'POST',
        data: $scope.data
    }).then(function (httpResponse) {
        if(httpResponse.data) {$scope.loggedOut = false; $location.url('/');}
        else {alert('Something went wrong. Try again.')};
    })}
  };

  $scope.login= function(){
    if(!$scope.data.username || !$scope.data.password) {
      return alert('You forget to fill out your username or password')
    }
    else {
      $http({
          url: 'http://localhost:3000/login',
          method: 'POST',
          data: $scope.data
      }).then(function (httpResponse) {
          if(httpResponse.config.data.username === $scope.data.username) {$scope.loggedOut = false; $location.url('/');}
          else {alert('Your username or password is wrong.')};
      })
    }
  }
}
