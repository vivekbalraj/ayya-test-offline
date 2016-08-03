export class MainController {
  constructor(DataService) {
    'ngInject';

    this.temples = [];

    let vm = this;

    vm.isTemplesLoaded = false;

    DataService.fetchTemples().then(temples => {
      vm.temples = temples;
      vm.imageTemples = _.chain(vm.temples).filter((temple) => temple.thumb !== '/img1s/thumb/missing.png' && temple.information).shuffle().value();
      vm.mapTemples = vm.temples.filter(temple => !!temple.latitude);
      vm.isTemplesLoaded = true;
    });
  }

}
