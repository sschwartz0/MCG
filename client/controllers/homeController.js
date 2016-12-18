angular
  .module('Codesmith.HomeController', ['ngRoute', 'Codesmith.UserFactory', 'Codesmith.MessageFactory', 'Codesmith.CardsFactory', 'Codesmith.ImageCardFactory'])
  .controller('HomeController', HomeController);


function HomeController($scope, UserFactory, MessageFactory, CardsFactory, ImageCardFactory) {
  $scope.unit = "Unit 10 Prototype";
  $scope.name = UserFactory.name;
  $scope.age = UserFactory.age;
  $scope.cardType = CardsFactory.cardType;
  $scope.width = CardsFactory.width;
  $scope.height = CardsFactory.height;
  $scope.title = CardsFactory.title;
  $scope.titleImage = ImageCardFactory.titleImage;
  $scope.message = "";
  MessageFactory.fetch().then(function(response){ $scope.messages = response.data; console.log(response.data)});

  $scope.postSave = function() {
		MessageFactory.postingUp($scope.name, $scope.message).then(function() {MessageFactory.fetch().then(function(response){ $scope.messages = response.data}); });
  }



}
