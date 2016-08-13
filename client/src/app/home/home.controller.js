export class HomeController {
  constructor($timeout) {
    'ngInject';

    $timeout(function() {
      angular.element('.parallax').parallax();
    });
  }

}
