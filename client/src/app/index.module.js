import {
  config
}
from './index.config';
import {
  routerConfig
}
from './index.route';
import {
  runBlock
}
from './index.run';
import {
  MainController
}
from './main/main.controller';
import {
  MapController
}
from './map/map.controller';

angular.module('ayya1008', ['ui.router', 'akoenig.deckgrid'])
  .config(config)
  .config(routerConfig)
  .run(runBlock)
  .controller('MainController', MainController)
  .controller('MapController', MapController);
