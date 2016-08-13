export class AuthService {
  constructor($rootScope) {
    'ngInject';

    this.$rootScope = $rootScope;
  }

  watchLoginChange() {

    var _self = this;

    FB.Event.subscribe('auth.authResponseChange', function(res) {

      if (res.status === 'connected') {

        /*
         The user is already logged,
         is possible retrieve his personal info
        */
        _self.getUserInfo();

        /*
         This is also the point where you should create a
         session for the current user.
         For this purpose you can use the data inside the
         res.authResponse object.
        */

      } else {

        /*
         The user is not logged to the app, or into Facebook:
         destroy the session on the server.
        */

      }

    });

  }

  getUserInfo() {

    var _self = this;

    FB.api('/me?fields=id,name,email,age_range,gender,link,picture{url},timezone,verified,locale,updated_time', function(res) {
      _self.$rootScope.$apply(function() {
        _self.$rootScope.user = _self.user = res;
        console.log(res);
      });
    });

  }

  logout() {

    var _self = this;

    FB.logout(function(response) {
      _self.$rootScope.$apply(function() {
        _self.$rootScope.user = _self.user = {};
      });
    });

  }
}
