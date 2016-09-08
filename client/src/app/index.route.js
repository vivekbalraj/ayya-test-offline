export function routerConfig($stateProvider, $urlRouterProvider) {
  'ngInject';
  $stateProvider
    .state('home', {
      url: '/',
      templateUrl: 'app/main/main.html',
      controller: 'MainController',
      abstract: true,
      controllerAs: 'main'
    })
    .state('home.index', {
      url: '',
      templateUrl: 'app/home/home.html'
    })
    .state('home.temples', {
      url: 'temples',
      abstract: true,
      template: '<ui-view></ui-view>'
    })
    .state('home.temples.index', {
      url: '',
      templateUrl: 'app/temples/temples.html'
    })
    .state('home.temples.detail', {
      url: '/:templeId',
      templateUrl: 'app/temples/temple.html'
    })
    .state('home.map', {
      url: 'map',
      templateUrl: 'app/map/map.html',
      controller: 'MapController',
      controllerAs: 'mapCtrl'
    });

  $urlRouterProvider.otherwise('/');
}
