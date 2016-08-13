export class TemplesController {
  constructor($timeout, NgMap) {
    'ngInject';

    let vm = this;
    vm.selectedTab = 'list';
    vm.NgMap = NgMap;

    $timeout(function() {
      angular.element('ul.tabs').tabs();
    }, 10);
  }

  initMap() {
    let vm = this;
    vm.NgMap.initMap("home-map");
  }

}
