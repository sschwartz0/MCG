/**
 * UserFactory belongs here
 */

 angular
  .module('Codesmith.CardsFactory', [])
  .factory('CardsFactory', CardsFactory); 


function CardsFactory() {

	return {
        cardType: 'simpleCard',
		width: 300,
		height: 500,
        title: 'Card Title'
	}

}
