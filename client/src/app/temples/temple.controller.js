export class TempleController {
  constructor($timeout, NgMap, DataService, $state, $location, $window) {
    'ngInject';

    let vm = this;
    vm.NgMap = NgMap;
    vm.$location = $location;

    window.prerenderReady = false;

    $timeout(function() {
      angular.element('ul.tabs').tabs();
    }, 1000);

    DataService.updateTempleViewed(parseInt($state.params.templeId));

    DataService.fetchTemples().then(temples => {
      vm.temple = _.find(temples, temple => {
        return temple.id === parseInt($state.params.templeId);
      });
      vm.temple.images = _.filter(vm.temple.images, image => {
        return image.indexOf('missing.png') < 0;
      });
      $timeout(function() {
        angular.element('.slider').slider();
      }, 10);

      $window.document.title = `${vm.temple.name} | அய்யா பதிகள் | Ayyavazhi Temples`;
    });
  }

  initMap() {
    let vm = this;
    vm.NgMap.initMap('temple-map');
  }

}
