/**
 * AboutController goes here
 */


angular
  .module('Codesmith.ImageCardController', ['ngRoute', 'Codesmith.ImageCardFactory'])
  .controller('ImageCardController', ImageCardController);
 


function ImageCardController($scope, ImageCardFactory) {

	$scope.save = function(username, title, titleImage, width, height, contentBg, footerBg, textcolor) {
				var imageCard = sequelize.define('imageCards', {
            _id: { type: Sequelize.INTEGER, autoIncrement: true, primaryKey: true},
            username: Sequelize.STRING,
            titleImage: Sequelize.STRING,
            width: Sequelize.STRING,
            height: Sequelize.STRING,
            contentBg: Sequelize.STRING,
            footerBg: Sequelize.STRING,
            textcolor: Sequelize.STRING,
        });

        imageCard.sync({}).then(() => {
        imageCard.create({
            'username': username,
            'title': title,
            'titleImage': titleImage,
            'width': width,
            'height': height,
            'contentBg': contentBg,
            'footerBg': footerBg,
            'textcolor': textcolor
        	}).then((imageCard)=>{
            console.log(imageCard);
        	});
        });
	}
}


// mainApp.service('CalcService', function(MathService){
//    this.square = function(a) {
//       return MathService.multiply(a,a);
//    }
// });



