angular
  .module('Codesmith.CardsController', ['ngRoute'])
  .controller('CardsController', CardsController);



function CardsController($scope) {

	$scope.save = function(width,height,title) {

	}
}


// mainApp.service('CalcService', function(MathService){
//    this.square = function(a) {
//       return MathService.multiply(a,a);
//    }
// });
