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

  updateTempleViewed(id) {
    let vm = this;
    var deferred = vm.$q.defer();
    vm.$http.post(vm.appConstants.server.url + 'temples/view-temple', {
      id: id
    }).then(function(response) {
      deferred.resolve(response);
    });
    return deferred.promise;
  }

  getTemple(id) {
    let vm = this;
    var deferred = vm.$q.defer();
    vm.$http.get(vm.appConstants.server.url + 'temples/view-temple', {
      id: id
    }).then(function(response) {
      deferred.resolve(response);
    });
    return deferred.promise;
  }
}
