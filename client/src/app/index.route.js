export function routerConfig($stateProvider, $urlRouterProvider) {
  'ngInject';
  $stateProvider
    .state('home', {
      url: '/',
      templateUrl: 'app/main/main.html',
      controller: 'MainController',
      controllerAs: 'main'
    })
    .state('home.index', {
      url: 'index',
      templateUrl: 'app/home/home.html'
    })
    .state('home.map', {
      url: 'map',
      templateUrl: 'app/map/map.html',
      controller: 'MapController',
      controllerAs: 'mapCtrl'
    });

  $urlRouterProvider.otherwise('/index');
}
