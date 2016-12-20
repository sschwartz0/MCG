

const app = angular
  .module('myApp', [
    'ngRoute',
    'Codesmith.HomeController', 'Codesmith.CardsController','Codesmith.ImageCardController','Codesmith.SavedController']);


app.config(configFunction);

function configFunction($routeProvider, $locationProvider) {

  $routeProvider
    .when('/', {
      templateUrl: './partials/home.html',
      controller: 'HomeController'
    })
    .when('/simpleCard', {
      templateUrl: './partials/simpleCard.html',
      controller: 'CardsController'
    })
    .when('/imageCard', {
      templateUrl: './partials/imageCard.html',
      controller: 'ImageCardController'
    })
    .when('/saved', {
      templateUrl: './partials/saved.html',
      controller: 'HomeController'
    });

    $locationProvider.html5Mode(true);

}
