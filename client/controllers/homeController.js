angular
  .module('Codesmith.HomeController', ['ngRoute', 'Codesmith.CardsFactory', 'Codesmith.ImageCardFactory'])
  .controller('HomeController', HomeController);


function HomeController($scope, CardsFactory, ImageCardFactory) {
  $scope.unit = "Unit 10 Prototype";
  $scope.cardType = CardsFactory.cardType;
  $scope.width = CardsFactory.width;
  $scope.height = CardsFactory.height;
  $scope.title = CardsFactory.title;
  $scope.titleImage = ImageCardFactory.titleImage;

}
