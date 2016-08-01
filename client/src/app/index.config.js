export function config($logProvider, uiGmapGoogleMapApiProvider) {
  'ngInject';
  // Enable log
  $logProvider.debugEnabled(true);

  uiGmapGoogleMapApiProvider.configure({
    key: 'AIzaSyCmU_GnOsVq-wNbisGQuxB_6l9e4ZF42N4',
    v: '3.22'
  });
}
