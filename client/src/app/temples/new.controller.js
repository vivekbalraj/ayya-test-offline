export class NewTempleController {
  constructor($timeout, $http, appConstants, ezfb) {
    'ngInject';

    let vm = this;
    vm.$timeout = $timeout;
    vm.$http = $http;
    vm.appConstants = appConstants;
    vm.ezfb = ezfb;

    vm.tamilMonths = ["", "சித்திரை", "வைகாசி", "ஆனி", "ஆடி", "ஆவணி", "புரட்டாசி", "ஐப்பசி", "கார்த்திகை",
      "மார்கழி", "தை", "மாசி", "பங்குனி"
    ];

    vm.init();
  }

  init() {
    let vm = this;
    vm.$http.get(vm.appConstants.server.url + 'cars').then(function(response) {
      vm.cars = response.data.cars;
      vm.$timeout(() => {
        angular.element(document).ready(function() {
          $('select').material_select();
        });
      });
    });
  }

  submit() {
    let vm = this;
    vm.ezfb.login(function(res) {
      console.log(res);
    });
  }

}
