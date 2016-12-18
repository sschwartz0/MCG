/**
 * AboutController goes here
 */



angular
  .module('Codesmith.CardsController', ['ngRoute', 'Codesmith.CardsFactory'])
  .controller('CardsController', CardsController);
 


function CardsController($scope, CardsFactory) {

	$scope.save = function(width,height,title) {
		CardsFactory.cardType = cardType;
		CardsFactory.simpleCard = simpleCard;
		CardsFactory.width = width;
		CardsFactory.height = height;
		CardsFactory.title = title;
	}
}


// mainApp.service('CalcService', function(MathService){
//    this.square = function(a) {
//       return MathService.multiply(a,a);
//    }
// });



