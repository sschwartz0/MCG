angular
  .module('Codesmith.SimpleCardController', ['ngRoute'])
  .controller('SimpleCardController', SimpleCardController);



function SimpleCardController($scope, $http) {
    $scope.loremIpsum = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris sagittis pellentesque lacus eleifend lacinia...';
    $scope.simpleCardIpsum = function() {
        this.loremIpsum = this.loremIpsum.concat(this.loremIpsum);
    }
    $scope.data = {};
    $scope.simpleCardSubmit= function(){
        console.log('clicked submit');
        $http({
            url: 'http://localhost:3000/postSimpleCard',
            method: 'POST',
            data: $scope.data
        }).then(function (httpResponse) {
            if(httpResponse.data) alert('Successfully saved');
            else alert('Something went wrong. Try again.');        })
       }

}
