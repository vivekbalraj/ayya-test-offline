/******/!function(e){function a(i){if(t[i])return t[i].exports;var s=t[i]={exports:{},id:i,loaded:!1};return e[i].call(s.exports,s,s.exports,a),s.loaded=!0,s.exports}// webpackBootstrap
/******/
var t={};return a.m=e,a.c=t,a.p="",a(0)}([function(e,a,t){"use strict";var i=t(1),s=t(2),l=t(3),n=t(4),r=t(5),o=t(6),c=t(7),p=t(8),m=t(9);angular.module("ayya1008",["ui.router","akoenig.deckgrid","ngMap","hm.readmore","rt.encodeuri","ezfb"]).config(i.config).config(s.routerConfig).constant("appConstants",(0,l.constant)()).run(n.runBlock).controller("MainController",r.MainController).controller("HomeController",o.HomeController).controller("TemplesController",c.TemplesController).controller("TempleController",p.TempleController).service("DataService",m.DataService)},function(e,a){"use strict";function t(e,a,t){"ngInject";a.setLocale("ta_IN"),a.setInitParams({appId:"185828048501024",status:!0,cookie:!0,xfbml:!0,version:"v2.7"}),e.debugEnabled(!1),t.html5Mode(!0)}t.$inject=["$logProvider","ezfbProvider","$locationProvider"],Object.defineProperty(a,"__esModule",{value:!0}),a.config=t},function(e,a){"use strict";function t(e,a){"ngInject";e.state("home",{url:"/",templateUrl:"app/main/main.html",controller:"MainController","abstract":!0,controllerAs:"main"}).state("home.temples",{url:"temples","abstract":!0,template:"<ui-view></ui-view>"}).state("home.temples.index",{url:"",templateUrl:"app/temples/temples.html"}).state("home.temples.detail",{url:"/:templeId",templateUrl:"app/temples/temple.html"}).state("home.map",{url:"map",templateUrl:"app/map/map.html",controller:"MapController",controllerAs:"mapCtrl"}),a.otherwise("/temples")}t.$inject=["$stateProvider","$urlRouterProvider"],Object.defineProperty(a,"__esModule",{value:!0}),a.routerConfig=t},function(e,a){"use strict";function t(){"ngInject";return{server:{url:"http://ayya.herokuapp.com/api/v1/"}}}Object.defineProperty(a,"__esModule",{value:!0}),a.constant=t},function(e,a){"use strict";function t(e,a){"ngInject";e.$on("$stateChangeStart",function(e,t){var i=["home","home.index","home.temples.index","home.map"];i.indexOf(t.name)>-1&&(a.document.title="அய்யா பதிகள் | Ayyavazhi Temples")})}t.$inject=["$rootScope","$window"],Object.defineProperty(a,"__esModule",{value:!0}),a.runBlock=t},function(e,a){"use strict";function t(e,a){if(!(e instanceof a))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(a,"__esModule",{value:!0});var i=function s(e,a){"ngInject";t(this,s),this.temples=[];var i=this;i.isTemplesLoaded=!1,a(function(){angular.element(".button-collapse").sideNav()},10),e.fetchTemples().then(function(e){i.temples=e,i.imageTemples=_.chain(i.temples).filter(function(e){return"/img1s/thumb/missing.png"!==e.thumb&&e.information}).shuffle().value(),i.imageTemples=_.sortBy(i.imageTemples,"temple_type"),i.mapTemples=i.temples.filter(function(e){return!!e.latitude}),i.mapCenter={latitude:(parseFloat(_.maxBy(i.mapTemples,function(e){return parseFloat(e.latitude)}).latitude)+parseFloat(_.minBy(i.mapTemples,function(e){return parseFloat(e.latitude)}).latitude))/2,longitude:(parseFloat(_.maxBy(i.mapTemples,function(e){return parseFloat(e.longitude)}).longitude)+parseFloat(_.minBy(i.mapTemples,function(e){return parseFloat(e.longitude)}).longitude))/2},i.isTemplesLoaded=!0})};i.$inject=["DataService","$timeout"],a.MainController=i},function(e,a){"use strict";function t(e,a){if(!(e instanceof a))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(a,"__esModule",{value:!0});var i=function s(e){"ngInject";t(this,s),e(function(){angular.element(".parallax").parallax()})};i.$inject=["$timeout"],a.HomeController=i},function(e,a){"use strict";function t(e,a){if(!(e instanceof a))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(a,"__esModule",{value:!0});var i=function(){function e(e,a){for(var t=0;t<a.length;t++){var i=a[t];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}return function(a,t,i){return t&&e(a.prototype,t),i&&e(a,i),a}}(),s=function(){function e(a,i){"ngInject";t(this,e);var s=this;s.selectedTab="list",s.NgMap=i,a(function(){angular.element("ul.tabs").tabs()},10)}return e.$inject=["$timeout","NgMap"],i(e,[{key:"initMap",value:function(){var e=this;e.NgMap.initMap("home-map")}}]),e}();a.TemplesController=s},function(e,a){"use strict";function t(e,a){if(!(e instanceof a))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(a,"__esModule",{value:!0});var i=function(){function e(e,a){for(var t=0;t<a.length;t++){var i=a[t];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}return function(a,t,i){return t&&e(a.prototype,t),i&&e(a,i),a}}(),s=function(){function e(a,i,s,l,n,r){"ngInject";t(this,e);var o=this;o.NgMap=i,o.$location=n,window.prerenderReady=!1,a(function(){angular.element("ul.tabs").tabs()},1e3),s.updateTempleViewed(parseInt(l.params.templeId)),s.fetchTemples().then(function(e){o.temple=_.find(e,function(e){return e.id===parseInt(l.params.templeId)}),o.temple.images=_.filter(o.temple.images,function(e){return e.indexOf("missing.png")<0}),a(function(){angular.element(".slider").slider()},10),r.document.title=o.temple.name+" | அய்யா பதிகள் | Ayyavazhi Temples",window.prerenderReady=!0})}return e.$inject=["$timeout","NgMap","DataService","$state","$location","$window"],i(e,[{key:"initMap",value:function(){var e=this;e.NgMap.initMap("temple-map")}}]),e}();a.TempleController=s},function(e,a){"use strict";function t(e,a){if(!(e instanceof a))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(a,"__esModule",{value:!0});var i=function(){function e(e,a){for(var t=0;t<a.length;t++){var i=a[t];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}return function(a,t,i){return t&&e(a.prototype,t),i&&e(a,i),a}}(),s=function(){function e(a,i,s){"ngInject";t(this,e);var l=this;l.appConstants=s,l.$http=a,l.$q=i,l.temples=[]}return e.$inject=["$http","$q","appConstants"],i(e,[{key:"fetchTemples",value:function(){var e=this,a=e.$q.defer();return 0===e.temples.length?e.$http.get(e.appConstants.server.url+"temples").then(function(t){e.temples=t.data.temples,a.resolve(e.temples)},function(e){a.reject(e)}):a.resolve(e.temples),a.promise}},{key:"updateTempleViewed",value:function(e){var a=this,t=a.$q.defer();return a.$http.post(a.appConstants.server.url+"temples/view-temple",{id:e}).then(function(e){t.resolve(e)}),t.promise}},{key:"getTemple",value:function(e){var a=this,t=a.$q.defer();return a.$http.get(a.appConstants.server.url+"temples/view-temple",{id:e}).then(function(e){t.resolve(e)}),t.promise}}]),e}();a.DataService=s}]),angular.module("ayya1008").run(["$templateCache",function(e){e.put("app/home/home.html",'<div ng-controller="HomeController as home" class="home"><div class="parallax-container"><section class="no-pad-bot valign white"><div class="container"><br><div class="row center"><h5 class="header col s12 light orange-text">தினமொரு நேரம் எந்தன் திருமொழி யதனைக் கேட்டால் பனிவெள்ளம் போலே பாவம் பறந்திடும் நிசமே சொன்னோம்.</h5></div><div class="row center"><a href="https://play.google.com/store/apps/details?id=in.iamsugan.ayya1008" class="btn-large waves-effect waves-light blue darken-4">அண்ட்ராய்டு 1008</a></div><br></div></section><div class="parallax"><img src="../assets/images/front.jpg" width="100%"></div></div></div>'),e.put("app/main/main.html",'<ng-include src="\'app/components/navbar/navbar.html\'"></ng-include><div ng-show="!main.isTemplesLoaded" class="progress"><div class="indeterminate"></div></div><ui-view></ui-view><ng-include src="\'app/components/footer/footer.html\'"></ng-include>'),e.put("app/map/map-window.html",'<div class="mapinfowindow"><h3>{{parameter.name}}</h3><div ng-if="parameter.founded_at" class="clearfix m10 lh45"><span class="circle">{{parameter.founded_at}}</span>துடக்கம்</div><div ng-if="parameter.is_primary_thangal" class="clearfix m10 lh45"><img src="assets/images/temple.svg" class="map-icon">அய்யா கால் நாட்டிக் கொடுத்த நிழல்தாங்கள்.</div><div ng-if="parameter.is_book_read &amp;&amp; !parameter.book_month" class="clearfix m10 lh45"><img src="assets/images/book.svg" class="map-icon">திரு ஏடு வாசிப்பு நடைபெறும் நிழல்தாங்கள்.</div><div ng-if="parameter.priest_name" class="clearfix m10 lh45"><img src="assets/images/priest.svg" class="map-icon">{{parameter.priest_name}}</div><div ng-if="parameter.book_month" class="clearfix m10 lh45"><img src="assets/images/book.svg" class="map-icon">{{parameter.book_month}} மாதம் திரு ஏடு வாசிப்பு நடைபெறும்.</div><div ng-if="parameter.cars" class="clearfix m10 lh45"><img src="assets/images/charriot.svg" class="map-icon">{{parameter.cars}}</div></div>'),e.put("app/temples/temple.html",'<div ng-controller="TempleController as temple" class="temple container"><div class="card-panel blue darken-4 center-align"><h3 class="white-text">{{temple.temple.name}}</h3></div><div ng-if="temple.temple.images &amp;&amp; temple.temple.images.length &gt; 0" class="card-panel"><div class="slider"><ul class="slides"><li ng-repeat="image in temple.temple.images"><img src="{{image}}" height="100%" alt="{{temple.temple.name}}"></li></ul></div></div><div ng-if="temple.temple.information" class="card-panel"><p hm-read-more="" hm-text="{{temple.temple.information}}" hm-limit="500" hm-more-text="மேலும் வாசிக்க" hm-less-text="சுருக்க" hm-dots-class="dots" hm-link-class="links">{{temple.temple.information}}</p></div><div class="card-panel"><div ng-if="temple.temple.founded_at" class="clearfix iconify"><span class="circle">{{temple.temple.founded_at}}</span>துடக்கம்</div><div ng-if="temple.temple.is_primary_thangal" class="clearfix iconify"><img src="assets/images/temple.svg" class="map-icon">அய்யா கால் நாட்டிக் கொடுத்த நிழல்தாங்கள்.</div><div ng-if="temple.temple.priest_name" class="clearfix iconify"><img src="assets/images/priest.svg" class="map-icon">{{temple.temple.priest_name}}</div><div ng-if="temple.temple.book_month" class="clearfix iconify"><img src="assets/images/book.svg" class="map-icon">{{temple.temple.book_month}} மாதம் திரு ஏடு வாசிப்பு நடைபெறும்.</div><div ng-if="temple.temple.cars &amp;&amp; temple.temple.cars.length &gt; 0" class="clearfix iconify"><img src="assets/images/charriot.svg" class="map-icon"><span ng-repeat="car in temple.temple.cars track by car.id">{{car.name}}<span ng-if="!$last">,</span></span></div><div ng-if="temple.temple.views &gt; 1" class="clearfix iconify"><span class="circle">{{temple.temple.views}}</span>முறை பார்க்கப்பட்டுள்ளது</div></div><div ng-if="temple.temple.facebook_page_url" class="card-panel center-align"><div data-href="{{temple.temple.facebook_page_url}}" data-small-header="false" data-adapt-container-width="true" data-hide-cover="false" data-show-facepile="true" class="fb-page"></div></div><div ng-if="temple.temple.latitude" class="card-panel"><div map-lazy-load="https://maps.google.com/maps/api/js?key=AIzaSyCmU_GnOsVq-wNbisGQuxB_6l9e4ZF42N4"><map id="temple-map" center="{{temple.temple.latitude}}, {{temple.temple.longitude}}" zoom="13" default-style="false" style="width: 100%"><marker position="{{temple.temple.latitude}}, {{temple.temple.longitude}}"></marker></map></div></div><div class="card-panel"><div data-href="{{temple.$location.absUrl()}}" data-layout="button_count" data-action="like" data-size="large" data-show-faces="true" data-share="true" class="fb-like"></div></div><div class="card-panel center-align"><div data-href="{{temple.$location.absUrl()}}" data-numposts="5" class="fb-comments"></div></div></div>'),e.put("app/temples/temples.html",'<div ng-controller="TemplesController as temples" class="temples"><div class="container"><div class="row"></div><div class="row"><div class="col s4 right"><ul class="tabs z-depth-1"><li class="tab col s2 active"><a href="#list-view" ng-class="{active: temples.selectedTab===\'list\'}" ng-click="temples.selectedTab=\'list\'">பட்டியல்</a></li><li class="tab col s2"><a href="#map-view" ng-class="{active: temples.selectedTab===\'map\'}" ng-click="temples.selectedTab=\'map\'; temples.initMap()">வரைபடம்</a></li></ul></div></div></div><div ng-show="temples.selectedTab===\'list\'" class="row"><div deckgrid="" source="main.imageTemples" cardtemplate="app/components/temple-card/temple-card.html" class="deckgrid"></div></div><div ng-show="temples.selectedTab===\'map\'" class="row"><div map-lazy-load="https://maps.google.com/maps/api/js?key=AIzaSyCmU_GnOsVq-wNbisGQuxB_6l9e4ZF42N4"><map id="home-map" center="{{main.mapCenter.latitude}}, {{main.mapCenter.longitude}}" zoom="6" default-style="false" lazy-init="true" style="height: calc(100vh - 155px)"><marker position="{{temple.latitude}}, {{temple.longitude}}" ng-repeat="temple in main.mapTemples track by $index"></marker></map></div></div></div>'),e.put("app/components/footer/footer.html",'<footer class="page-footer orange"><div class="container"><div class="row"><div class="col l12 s12"><h5 class="white-text">புகுபதிகை</h5><div data-href="https://www.facebook.com/அய்யா-பதிகள்-1670714779914536/" data-small-header="false" data-adapt-container-width="true" data-hide-cover="false" data-show-facepile="true" class="fb-page"><blockquote cite="https://www.facebook.com/அய்யா-பதிகள்-1670714779914536/" class="fb-xfbml-parse-ignore"><a href="https://www.facebook.com/அய்யா-பதிகள்-1670714779914536/">அய்யா 1008</a></blockquote></div></div></div></div><div class="footer-copyright"></div></footer>'),e.put("app/components/navbar/navbar.html",'<div class="navbar-fixed"><nav role="navigation" class="orange lighten-1"><div class="nav-wrapper container"><a id="logo-container" href="/temples" class="brand-logo">அய்யா பதிகள்</a><ul class="right hide-on-med-and-down"><li ui-sref-active="active"><a ui-sref="home.temples.index">கோயில்கள்</a></li><li><a href="https://play.google.com/store/apps/details?id=in.iamsugan.ayya1008" target="_blank" class="play-store"><img src="https://play.google.com/intl/en_us/badges/images/generic/en_badge_web_generic.png" height="64px"></a></li></ul><ul id="nav-mobile" class="side-nav"><li ui-sref-active="active"><a ui-sref="home.temples.index">கோயில்கள்</a></li><li><a href="https://play.google.com/store/apps/details?id=in.iamsugan.ayya1008">அண்ட்ராய்டு 1008</a></li></ul><a href="#" data-activates="nav-mobile" class="button-collapse"><i class="material-icons">menu</i></a></div></nav></div>'),e.put("app/components/temple-card/temple-card.html",'<div class="card hoverable"><div class="card-image"><img src="{{card.images[0]}}" alt="{{card.name}}" class="activator pointer"><span class="card-title">{{card.name}}</span></div><div class="card-content"><p class="line-clamp">{{card.information}}</p></div><div class="card-action"><a ui-sref="home.temples.detail({templeId: card.id})">கோவிலுக்கு செல்</a></div><div class="card-reveal"><span class="card-title grey-text text-darken-4">{{card.name}}<i class="material-icons right">close</i></span><p class="line-clamp">{{card.information}}</p><div ng-if="card.founded_at" class="clearfix iconify"><span class="circle">{{card.founded_at}}</span>துடக்கம்</div><div ng-if="card.is_primary_thangal" class="clearfix iconify"><img src="assets/images/temple.svg" class="map-icon">அய்யா கால் நாட்டிக் கொடுத்த நிழல்தாங்கள்.</div><div ng-if="card.priest_name" class="clearfix iconify"><img src="assets/images/priest.svg" class="map-icon">{{card.priest_name}}</div><div ng-if="card.book_month" class="clearfix iconify"><img src="assets/images/book.svg" class="map-icon">{{card.book_month}} மாதம் திரு ஏடு வாசிப்பு நடைபெறும்.</div><div ng-if="card.cars &amp;&amp; card.cars.length &gt; 0" class="clearfix iconify"><img src="assets/images/charriot.svg" class="map-icon"><span ng-repeat="car in card.cars track by car.id">{{car.name}}<span ng-if="!$last">,</span></span></div></div></div>')}]);
//# sourceMappingURL=../maps/scripts/app-d7e92c1e1f.js.map
