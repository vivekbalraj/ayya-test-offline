import { config } from './index.config';
import { routerConfig } from './index.route';
import { constant } from './index.constants';
import { runBlock } from './index.run';

import { MainController } from './main/main.controller';
import { HomeController } from './home/home.controller';

import { DataService } from './data/data.service';

angular.module('ayya1008', ['ui.router', 'akoenig.deckgrid', 'ngMap'])
  .config(config)
  .config(routerConfig)
  .constant('appConstants', constant())
  .run(runBlock)
  .controller('MainController', MainController)
  .controller('HomeController', HomeController)
  .service('DataService', DataService);
