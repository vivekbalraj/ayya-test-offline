export function config($logProvider, toastrConfig, uiGmapGoogleMapApiProvider) {
  'ngInject';
  // Enable log
  $logProvider.debugEnabled(true);

  // Set options third-party lib
  toastrConfig.allowHtml = true;
  toastrConfig.timeOut = 3000;
  toastrConfig.positionClass = 'toast-top-right';
  toastrConfig.preventDuplicates = true;
  toastrConfig.progressBar = true;

  uiGmapGoogleMapApiProvider.configure({
    key: 'AIzaSyCmU_GnOsVq-wNbisGQuxB_6l9e4ZF42N4',
    v: '3.22'
  });
}
