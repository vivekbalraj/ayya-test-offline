export function runBlock($rootScope, $window, AuthService) {
  'ngInject';

  $rootScope.user = {};

  $window.fbAsyncInit = function() {
    // Executed when the SDK is loaded

    FB.init({
      appId: '185828048501024',
      status: true,
      cookie: true,
      xfbml: true,
      version: 'v2.7'
    });

    AuthService.watchLoginChange();

  };

  (function(d) {
    // load the Facebook javascript SDK

    var js,
      id = 'facebook-jssdk',
      ref = d.getElementsByTagName('script')[0];

    if (d.getElementById(id)) {
      return;
    }

    js = d.createElement('script');
    js.id = id;
    js.async = true;
    js.src = "//connect.facebook.net/ta_IN/sdk.js";

    ref.parentNode.insertBefore(js, ref);

  }(document));
}
