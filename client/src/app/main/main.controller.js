export class MainController {
  constructor($timeout, webDevTec, toastr, $http) {
    'ngInject';

    this.awesomeThings = [];
    this.classAnimation = '';
    this.creationDate = 1458722682557;
    this.toastr = toastr;
    this.temples = [];

    let vm = this;

    this.activate($timeout, webDevTec);
    $http.get('http://ayya.herokuapp.com/api/v1/temples').then(function(response) {
      vm.temples = response.data.temples;
    });
  }

  activate($timeout, webDevTec) {
    this.getWebDevTec(webDevTec);
    $timeout(() => {
      this.classAnimation = 'rubberBand';
    }, 4000);
  }

  getWebDevTec(webDevTec) {
    this.awesomeThings = webDevTec.getTec();

    angular.forEach(this.awesomeThings, (awesomeThing) => {
      awesomeThing.rank = Math.random();
    });
  }

  showToastr() {
    this.toastr.info(
      'Fork <a href="https://github.com/Swiip/generator-gulp-angular" target="_blank"><b>generator-gulp-angular</b></a>'
    );
    this.classAnimation = '';
  }
}
