angular
  .module('Codesmith.ImageCardController', ['ngRoute'])
  .controller('ImageCardController', ImageCardController);



function ImageCardController($scope, $http) {
    $scope.loremIpsum = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris sagittis pellentesque lacus eleifend lacinia...';
    $scope.ipsum = function() {
        this.loremIpsum = this.loremIpsum.concat(this.loremIpsum);
    }
    $scope.data = {};
    $scope.imageCardSubmit= function(){
        console.log('clicked submit');
        $http({
            url: 'http://localhost:3000/postImageCard',
            method: 'POST',
            data: $scope.data
        }).then(function (httpResponse) {
            if(httpResponse.data) alert('Successfully saved');
            else alert('Something went wrong. Try again.');        })
       }

}
