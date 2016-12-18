/**
 * UserFactory belongs here
 */

 angular
  .module('Codesmith.ImageCardFactory', [])
  .factory('ImageCardFactory', ImageCardFactory); 


function ImageCardFactory() {

	return {
        cardType: 'imageCard',
		width: 300,
		height: 500,
        title: 'Card Title',
        titleImage: 'http://materializecss.com/images/sample-1.jpg'
	}

}
