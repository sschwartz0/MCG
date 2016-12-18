/**
 * AboutController goes here
 */



angular
  .module('Codesmith.ImageCardController', ['ngRoute', 'Codesmith.ImageCardFactory'])
  .controller('ImageCardController', ImageCardController);
 


function ImageCardController($scope, ImageCardFactory) {

	// $scope.save = function(width,height,title) {
	// 	ImageCardFactory.cardType = cardType;
	// 	ImageCardFactory.simpleCard = simpleCard;
	// 	ImageCardFactory.width = width;
	// 	ImageCardFactory.height = height;
	// 	ImageCardFactory.title = title;
	// }
}


// mainApp.service('CalcService', function(MathService){
//    this.square = function(a) {
//       return MathService.multiply(a,a);
//    }
// });



