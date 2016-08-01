export class MainController {
  constructor($timeout, $http) {
    'ngInject';

    this.temples = [];

    let vm = this;

    vm.isTemplesLoaded = false;

    $http.get('http://ayya.herokuapp.com/api/v1/temples').then(function(response) {
      vm.temples = response.data.temples;
      vm.imageTemples = _.chain(vm.temples).filter((temple) => temple.thumb !== '/img1s/thumb/missing.png').shuffle().value();
      vm.isTemplesLoaded = true;
    });


    $http.get('http://ayya.herokuapp.com/api/v1/cars').then(function(response) {
      vm.cars = response.data.cars;
    });

    vm.tamilMonths = ["", "சித்திரை", "வைகாசி", "ஆனி", "ஆடி", "ஆவணி", "புரட்டாசி", "ஐப்பசி", "கார்த்திகை",
      "மார்கழி", "தை", "மாசி", "பங்குனி"
    ];

    vm.districts = ["அரியலூர்", "சென்னை", "கோயம்புத்தூர்", "கடலூர்", "தர்மபுரி", "திண்டுக்கல்", "ஈரோடு",
      "காஞ்சிபுரம்", "கன்னியாகுமரி", "கரூர்", "கிருஷ்ணகிரி", "மதுரை", "நாகப்பட்டினம்", "நாமக்கல்",
      "பெரம்பலூர்", "புதுக்கோட்டை", "இராமநாதபுரம்", "சேலம்", "சிவகங்கை", "தஞ்சாவூர்", "தேனி", "நீலகிரி",
      "திருநெல்வேலி", "திருவள்ளூர்", "திருவண்ணாமலை", "திருவாரூர்", "தூத்துக்குடி", "திருச்சிராப்பள்ளி",
      "திருப்பூர்", "வேலூர்", "விழுப்புரம்", "விருதுநகர்"
    ];
  }

}
