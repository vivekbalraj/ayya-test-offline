/*globals _:true */

export class MapController {
  constructor($http) {
    'ngInject';

    let vm = this;

    $http.get('http://ayya.herokuapp.com/api/v1/temples').then(function(response) {
      vm.temples = response.data.temples;
      let temples = vm.temples;
      vm.markers = [];

      temples = _.filter(temples, function(temple) {
        return !!temple.latitude;
      });

      if ("geolocation" in navigator) {
        navigator.geolocation.getCurrentPosition(function(position) {
          let blue = {
            url: 'http://chart.apis.google.com/chart?chst=d_map_pin_letter&chld=%E2%80%A2|3E82F7'
          };
          vm.markers.push({
            options: {
              draggable: false,
              icon: blue
            },
            id: -100,
            center: {
              latitude: position.coords.latitude,
              longitude: position.coords.longitude
            }
          });
        });
      }

      vm.map = {
        center: {
          latitude: 8.713913,
          longitude: 77.756652
        },
        zoom: 9,
        options: {
          mapTypeControl: false,
          streetViewControl: false,
          draggable: true
        },
        bounds: {
          northeast: {
            latitude: 14,
            longitude: 81
          },
          southwest: {
            latitude: 8,
            longitude: 77
          }
        }
      };

      _.each(temples, function(temple) {
        var cars = [];
        _.each(temple.cars, function(car) {
          cars.push(car.name);
        });
        temple.cars = cars.join(', ');
        vm.markers.push({
          options: {
            draggable: false,
            icon: {
              url: 'http://chart.apis.google.com/chart?chst=d_map_pin_letter&chld=%E2%80%A2|FF9933'
            }
          },
          temple: temple,
          id: temple.id,
          center: {
            latitude: temple.latitude,
            longitude: temple.longitude
          }
        });
      });
    });
  }
}
