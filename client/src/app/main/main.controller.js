export class MainController {
  constructor(DataService, $timeout) {
    'ngInject';

    this.temples = [];

    let vm = this;

    vm.isTemplesLoaded = false;

    $timeout(function() {
      angular.element(".button-collapse").sideNav();
    }, 10);

    DataService.fetchTemples().then(temples => {
      vm.temples = temples;
      vm.imageTemples = _.chain(vm.temples).filter((temple) => temple.thumb !== '/img1s/thumb/missing.png' && temple.information).shuffle().value();
      vm.imageTemples = _.sortBy(vm.imageTemples, 'temple_type');
      vm.mapTemples = vm.temples.filter(temple => !!temple.latitude);
      vm.isTemplesLoaded = true;
    });
  }

}
