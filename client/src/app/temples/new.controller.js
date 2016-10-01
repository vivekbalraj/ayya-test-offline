export class NewTempleController {
  constructor($timeout, $http, appConstants, ezfb, $state) {
    'ngInject';

    let vm = this;
    vm.$timeout = $timeout;
    vm.$http = $http;
    vm.appConstants = appConstants;
    vm.ezfb = ezfb;
    vm.$state = $state;

    vm.tamilMonths = ["", "சித்திரை", "வைகாசி", "ஆனி", "ஆடி", "ஆவணி", "புரட்டாசி", "ஐப்பசி", "கார்த்திகை",
      "மார்கழி", "தை", "மாசி", "பங்குனி"
    ];

    vm.districts = ["", "திருநெல்வேலி", "கன்னியாகுமரி", "தூத்துக்குடி", "அரியலூர்", "சென்னை", "கோயம்புத்தூர்", "கடலூர்", "தர்மபுரி", "திண்டுக்கல்", "ஈரோடு", "காஞ்சிபுரம்", "கரூர்", "கிருஷ்ணகிரி", "மதுரை", "நாகப்பட்டினம்", "நாமக்கல்", "பெரம்பலூர்", "புதுக்கோட்டை", "இராமநாதபுரம்", "சேலம்", "சிவகங்கை", "தஞ்சாவூர்", "தேனி", "நீலகிரி", "திருவள்ளூர்", "திருவண்ணாமலை", "திருவாரூர்", "திருச்சிராப்பள்ளி", "திருப்பூர்", "வேலூர்", "விழுப்புரம்", "விருதுநகர்", "மும்பை புறநகர்"];

    vm.init();

    vm.temple = {
      cars: []
    };
  }

  init() {
    let vm = this;
    vm.$http.get(vm.appConstants.server.url + 'cars').then(function(response) {
      vm.cars = response.data.cars;
      vm.$timeout(() => {
        angular.element(document).ready(function() {
          angular.element('select').material_select();
        });
      });
    });
  }

  submit() {
    let vm = this;
    if (vm.temple.name && vm.temple.mobile_number) {
      vm.isSpinner = true;

      vm.ezfb.login(function() {
        vm.ezfb.api('/me?fields=id,name,email,birthday,gender', function(user) {
          if (user) {
            vm.temple.contact_person = user.name;
            vm.temple.contact_email = user.email;
            let payload = new FormData();
            Object.keys((key) => {
              payload.append(key, vm.temple[key]);
            });
            vm.$http({
              method: 'POST',
              url: vm.appConstants.server.url + 'temples',
              data: payload,
              transformResponse: angular.identity,
              headers: {
                'Content-Type': undefined
              }
            }).then(function() {
              vm.isSpinner = false;
              vm.$state.go('home.temples');
            }, function() {
              vm.isSpinner = false;
            });
            vm.$http({
              method: 'POST',
              url: vm.appConstants.server.url + 'users/register',
              data: {
                email: user.email,
                facebook_id: user.id,
                gender: user.gender,
                name: user.name,
                birthday: user.birthday
              },
              transformResponse: function(data) {
                return {
                  data: data
                };
              }
            });
          }
        });
      }, {
        scope: 'email, public_profile, user_friends, user_birthday'
      });
    }
  }

}
