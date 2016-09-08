import { config } from './index.config';
import { routerConfig } from './index.route';
import { constant } from './index.constants';
import { runBlock } from './index.run';

import { MainController } from './main/main.controller';
import { HomeController } from './home/home.controller';
import { TemplesController } from './temples/temples.controller';
import { TempleController } from './temples/temple.controller';
import { NewTempleController } from './temples/new.controller';

import { DataService } from './data/data.service';

angular.module('ayya1008', ['ui.router', 'akoenig.deckgrid', 'ngMap', 'hm.readmore', 'rt.encodeuri', 'ezfb'])
  .config(config)
  .config(routerConfig)
  .constant('appConstants', constant())
  .run(runBlock)
  .controller('MainController', MainController)
  .controller('HomeController', HomeController)
  .controller('TemplesController', TemplesController)
  .controller('TempleController', TempleController)
  .controller('NewTempleController', NewTempleController)
  .service('DataService', DataService);
