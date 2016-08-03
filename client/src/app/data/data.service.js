export class DataService {
  constructor($http, $q, appConstants) {
    'ngInject';

    let vm = this;
    vm.appConstants = appConstants;
    vm.$http = $http;
    vm.$q = $q;

    vm.temples = [];
  }

  fetchTemples() {
    let vm = this;
    let deferred = vm.$q.defer();

    if (vm.temples.length === 0) {
      vm.$http.get(vm.appConstants.server.url + 'temples').then(response => {
        vm.temples = response.data.temples;
        deferred.resolve(vm.temples);
      }, error => {
        deferred.reject(error);
      });
    } else {
      deferred.resolve(vm.temples);
    }
    return deferred.promise;
  }
}
