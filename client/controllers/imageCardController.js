/**
 * AboutController goes here
 */



angular
  .module('Codesmith.ImageCardController', ['ngRoute', 'Codesmith.ImageCardFactory'])
  .controller('ImageCardController', ImageCardController);
 


function ImageCardController($scope, $http, ImageCardFactory) {
    $scope.ipsumText = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris sagittis pellentesque lacus eleifend lacinia...';
    $scope.ipsum = function() {
        this.ipsumText = this.ipsumText.concat(this.ipsumText);
    }
    $scope.data = {};
    $scope.submit= function(){
        console.log('clicked submit');
        $http({
            url: 'http://localhost:3000/imageCard',
            method: 'POST',
            data: $scope.data
        }).then(function (httpResponse) {
            console.log('response:', httpResponse);
        })
       }


      const save = function(username, title, titleImage, width, height, contentBg, footerBg, textcolor, footertextcolor, titletextcolor) {
            var imageCard = sequelize.define('imageCards', {
            _id: { type: Sequelize.INTEGER, autoIncrement: true, primaryKey: true},
            username: Sequelize.STRING,
            titleImage: Sequelize.STRING,
            width: Sequelize.STRING,
            height: Sequelize.STRING,
            contentBg: Sequelize.STRING,
            footerBg: Sequelize.STRING,
            textcolor: Sequelize.STRING,
            footertextcolor: Sequelize.STRING,
            titletextcolor: Sequelize.STRING,
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
            'textcolor': textcolor,
            'footertextcolor': textcolor,
            'titletextcolor': textcolor
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



