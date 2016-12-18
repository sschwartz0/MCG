const app = angular
  .module('myApp', [
    'ngRoute',
    'Codesmith.HomeController','Codesmith.AboutController','Codesmith.CardsController','Codesmith.ImageCardController']);
   

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
    .when('/about',{
    	templateUrl: './partials/about.html',
    	controller: 'AboutController'
    });
}
