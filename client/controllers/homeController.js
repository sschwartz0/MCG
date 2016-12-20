angular
  .module('Codesmith.HomeController', ['ngRoute', 'Codesmith.SavedController', 'Codesmith.ImageCardController'])
  .controller('HomeController', HomeController);


function HomeController($scope, $http, $location) {
  $scope.unit = "Unit 10 Prototype";
  $scope.data = {};
  $scope.cards = {};
  $scope.fetch = function(){
    $http({
      url: 'http://localhost:3000/getComponents',
      method: 'GET'
    }).then(function(response){ $scope.cards = response.data; console.log($scope.cards)});
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
        if(httpResponse.data) $location.url('/imageCard');
        else alert('Something went wrong. Try again.');
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
          if(httpResponse.data) $location.url('/imageCard');
          else alert('Your username or password is wrong.');
      })
    }
  }
}
