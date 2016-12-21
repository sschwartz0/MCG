angular
  .module('Codesmith.HorizontalFabController', ['ngRoute'])
  .controller('HorizontalFabController', HorizontalFabController);


function HorizontalFabController($scope, $http) {
    $scope.data = {};
    $scope.horizontalFabSubmit= function(){
        console.log('clicked submit');
        $http({
            url: 'http://localhost:3000/postHorizontalFab',
            method: 'POST',
            data: $scope.data
        }).then(function (httpResponse) {
            if(httpResponse.data) alert('Successfully saved');
            else alert('Something went wrong. Try again.');        })
       }

}
