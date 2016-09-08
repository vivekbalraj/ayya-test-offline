export function runBlock($rootScope, $window) {
  'ngInject';

  $rootScope.$on('$stateChangeStart', function(event, toState) {
    let commonTitleStates = ['home', 'home.index', 'home.temples.index', 'home.map'];
    if (commonTitleStates.indexOf(toState.name) > -1) {
      $window.document.title = 'அய்யா பதிகள் | Ayyavazhi Temples';
    }
  });
}
