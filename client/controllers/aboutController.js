/**
 * AboutController goes here
 */



angular
  .module('Codesmith.AboutController', ['ngRoute', 'Codesmith.UserFactory'])
  .controller('AboutController', AboutController);
 


function AboutController($scope, UserFactory) {
 
	$scope.save = function(name,age) {
		UserFactory.name = name;
		UserFactory.age = age;
	}
}


// mainApp.service('CalcService', function(MathService){
//    this.square = function(a) {
//       return MathService.multiply(a,a);
//    }
// });



