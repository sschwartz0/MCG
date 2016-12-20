angular
  .module('Codesmith.SavedController', ['ngRoute', 'Codesmith.HomeController'])
  .controller('SavedController', SavedController);



function SavedController($scope, $http, HomeController) {
  $scope.collection = HomeController.cards;
}
