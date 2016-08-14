export function config($logProvider, ezfbProvider) {
  'ngInject';

  ezfbProvider.setLocale('ta_IN');
  ezfbProvider.setInitParams({
    appId: '185828048501024',
    status: true,
    cookie: true,
    xfbml: true,
    version: 'v2.7'
  });
  $logProvider.debugEnabled(false);
}
