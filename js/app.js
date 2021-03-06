var app = angular.module('GiphyApp', ['infinite-scroll', 'ngclipboard', 'ui.router', 'GiphyControllers']);

app.config(["$stateProvider", "$urlRouterProvider", "$locationProvider", function($stateProvider, $urlRouterProvider, $locationProvider){
  $urlRouterProvider.otherwise('/');
  $stateProvider.state('home', {
    url:'/',
    templateUrl: './views/home.html',
    controller: 'GiphyCtrl'
  })
  .state('favorites', {
    url:'/favorites',
    templateUrl: './views/favorites.html',
    controller: 'GiphyCtrl'
  })
  .state('404', {
    url:'/404',
    templateUrl: './views/404.html'
  });

  // $locationProvider.html5Mode(true);
}]);
