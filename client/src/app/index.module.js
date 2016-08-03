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
  HomeController
}
from './home/home.controller';

angular.module('ayya1008', ['ui.router', 'akoenig.deckgrid', 'ngMap'])
  .config(config)
  .config(routerConfig)
  .run(runBlock)
  .controller('MainController', MainController)
  .controller('HomeController', HomeController);
