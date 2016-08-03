export class MainController {
  constructor($http) {
    'ngInject';

    this.temples = [];

    let vm = this;

    vm.isTemplesLoaded = false;

    $http.get('http://ayya.herokuapp.com/api/v1/temples').then(function(response) {
      vm.temples = response.data.temples;
      vm.imageTemples = _.chain(vm.temples).filter((temple) => temple.thumb !== '/img1s/thumb/missing.png' && temple.information).shuffle().value();
      vm.mapTemples = vm.temples.filter(temple => !!temple.latitude);
      vm.isTemplesLoaded = true;
    });
  }

}
