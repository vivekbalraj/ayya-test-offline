/******/!function(e){function a(i){if(t[i])return t[i].exports;var l=t[i]={exports:{},id:i,loaded:!1};return e[i].call(l.exports,l,l.exports,a),l.loaded=!0,l.exports}// webpackBootstrap
/******/
var t={};return a.m=e,a.c=t,a.p="",a(0)}([function(e,a,t){"use strict";var i=t(1),l=t(2),n=t(3),s=t(4),r=t(5),o=t(6),c=t(7),p=t(8),m=t(9),d=t(10);angular.module("ayya1008",["ui.router","akoenig.deckgrid","ngMap","hm.readmore","rt.encodeuri","ezfb"]).config(i.config).config(l.routerConfig).constant("appConstants",(0,n.constant)()).run(s.runBlock).controller("MainController",r.MainController).controller("HomeController",o.HomeController).controller("TemplesController",c.TemplesController).controller("TempleController",p.TempleController).controller("NewTempleController",m.NewTempleController).service("DataService",d.DataService)},function(e,a){"use strict";function t(e,a,t){"ngInject";a.setLocale("ta_IN"),a.setInitParams({appId:"185828048501024",status:!0,cookie:!0,xfbml:!0,version:"v2.7"}),e.debugEnabled(!1),t.html5Mode(!0)}t.$inject=["$logProvider","ezfbProvider","$locationProvider"],Object.defineProperty(a,"__esModule",{value:!0}),a.config=t},function(e,a){"use strict";function t(e,a){"ngInject";e.state("home",{url:"/",templateUrl:"app/main/main.html",controller:"MainController","abstract":!0,controllerAs:"main"}).state("home.temples",{url:"temples","abstract":!0,template:"<ui-view></ui-view>"}).state("home.temples.index",{url:"",templateUrl:"app/temples/temples.html"}).state("home.temples.add",{url:"/add",templateUrl:"app/temples/new.html"}).state("home.temples.detail",{url:"/:templeId",templateUrl:"app/temples/temple.html"}).state("home.map",{url:"map",templateUrl:"app/map/map.html",controller:"MapController",controllerAs:"mapCtrl"}),a.otherwise("/temples")}t.$inject=["$stateProvider","$urlRouterProvider"],Object.defineProperty(a,"__esModule",{value:!0}),a.routerConfig=t},function(e,a){"use strict";function t(){"ngInject";return{server:{url:"http://ayya.herokuapp.com/api/v1/"}}}Object.defineProperty(a,"__esModule",{value:!0}),a.constant=t},function(e,a){"use strict";function t(e,a){"ngInject";e.$on("$stateChangeStart",function(e,t){var i=["home","home.index","home.temples.index","home.map"];i.indexOf(t.name)>-1&&(a.document.title="அய்யா பதிகள் | Ayyavazhi Temples")})}t.$inject=["$rootScope","$window"],Object.defineProperty(a,"__esModule",{value:!0}),a.runBlock=t},function(e,a){"use strict";function t(e,a){if(!(e instanceof a))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(a,"__esModule",{value:!0});var i=function l(e,a){"ngInject";t(this,l),this.temples=[];var i=this;i.isTemplesLoaded=!1,a(function(){angular.element(".button-collapse").sideNav()},10),e.fetchTemples().then(function(e){i.temples=e,i.imageTemples=_.chain(i.temples).filter(function(e){return"/img1s/thumb/missing.png"!==e.thumb&&e.information}).shuffle().value(),i.imageTemples=_.sortBy(i.imageTemples,"temple_type"),i.mapTemples=i.temples.filter(function(e){return!!e.latitude}),i.mapCenter={latitude:(parseFloat(_.maxBy(i.mapTemples,function(e){return parseFloat(e.latitude)}).latitude)+parseFloat(_.minBy(i.mapTemples,function(e){return parseFloat(e.latitude)}).latitude))/2,longitude:(parseFloat(_.maxBy(i.mapTemples,function(e){return parseFloat(e.longitude)}).longitude)+parseFloat(_.minBy(i.mapTemples,function(e){return parseFloat(e.longitude)}).longitude))/2},i.isTemplesLoaded=!0})};i.$inject=["DataService","$timeout"],a.MainController=i},function(e,a){"use strict";function t(e,a){if(!(e instanceof a))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(a,"__esModule",{value:!0});var i=function l(e){"ngInject";t(this,l),e(function(){angular.element(".parallax").parallax()})};i.$inject=["$timeout"],a.HomeController=i},function(e,a){"use strict";function t(e,a){if(!(e instanceof a))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(a,"__esModule",{value:!0});var i=function(){function e(e,a){for(var t=0;t<a.length;t++){var i=a[t];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}return function(a,t,i){return t&&e(a.prototype,t),i&&e(a,i),a}}(),l=function(){function e(a,i){"ngInject";t(this,e);var l=this;l.selectedTab="list",l.NgMap=i,a(function(){angular.element("ul.tabs").tabs()},10)}return e.$inject=["$timeout","NgMap"],i(e,[{key:"initMap",value:function(){var e=this;e.NgMap.initMap("home-map")}}]),e}();a.TemplesController=l},function(e,a){"use strict";function t(e,a){if(!(e instanceof a))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(a,"__esModule",{value:!0});var i=function(){function e(e,a){for(var t=0;t<a.length;t++){var i=a[t];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}return function(a,t,i){return t&&e(a.prototype,t),i&&e(a,i),a}}(),l=function(){function e(a,i,l,n,s,r){"ngInject";t(this,e);var o=this;o.NgMap=i,o.$location=s,window.prerenderReady=!1,a(function(){angular.element("ul.tabs").tabs()},1e3),l.updateTempleViewed(parseInt(n.params.templeId)),l.fetchTemples().then(function(e){o.temple=_.find(e,function(e){return e.id===parseInt(n.params.templeId)}),o.temple.images=_.filter(o.temple.images,function(e){return e.indexOf("missing.png")<0}),a(function(){angular.element(".slider").slider()},10),r.document.title=o.temple.name+" | அய்யா பதிகள் | Ayyavazhi Temples"})}return e.$inject=["$timeout","NgMap","DataService","$state","$location","$window"],i(e,[{key:"initMap",value:function(){var e=this;e.NgMap.initMap("temple-map")}}]),e}();a.TempleController=l},function(e,a){"use strict";function t(e,a){if(!(e instanceof a))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(a,"__esModule",{value:!0});var i=function(){function e(e,a){for(var t=0;t<a.length;t++){var i=a[t];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}return function(a,t,i){return t&&e(a.prototype,t),i&&e(a,i),a}}(),l=function(){function e(a,i,l,n){"ngInject";t(this,e);var s=this;s.$timeout=a,s.$http=i,s.appConstants=l,s.ezfb=n,s.tamilMonths=["","சித்திரை","வைகாசி","ஆனி","ஆடி","ஆவணி","புரட்டாசி","ஐப்பசி","கார்த்திகை","மார்கழி","தை","மாசி","பங்குனி"],s.districts=["","திருநெல்வேலி","கன்னியாகுமரி","தூத்துக்குடி","அரியலூர்","சென்னை","கோயம்புத்தூர்","கடலூர்","தர்மபுரி","திண்டுக்கல்","ஈரோடு","காஞ்சிபுரம்","கரூர்","கிருஷ்ணகிரி","மதுரை","நாகப்பட்டினம்","நாமக்கல்","பெரம்பலூர்","புதுக்கோட்டை","இராமநாதபுரம்","சேலம்","சிவகங்கை","தஞ்சாவூர்","தேனி","நீலகிரி","திருவள்ளூர்","திருவண்ணாமலை","திருவாரூர்","திருச்சிராப்பள்ளி","திருப்பூர்","வேலூர்","விழுப்புரம்","விருதுநகர்","மும்பை புறநகர்"],s.init(),s.temple={}}return e.$inject=["$timeout","$http","appConstants","ezfb"],i(e,[{key:"init",value:function(){var e=this;e.$http.get(e.appConstants.server.url+"cars").then(function(a){e.cars=a.data.cars,e.$timeout(function(){angular.element(document).ready(function(){angular.element("select").material_select()})})})}},{key:"submit",value:function(){var e=this;e.temple.name&&(e.isSpinner=!0,e.ezfb.login(function(a){e.ezfb.api("/me?fields=id,name,email,birthday,gender",function(a){e.temple.contact_person=a.name,e.temple.contact_email=a.email,e.$http({method:"POST",url:e.appConstants.server.url+"temples",data:e.temple,transformResponse:function(e,a,t){return{data:e}}}).then(function(e){console.log(e)},function(e){console.log(e)}),e.$http({method:"POST",url:e.appConstants.server.url+"users/register",data:{email:a.email,facebook_id:a.id,gender:a.gender,name:a.name},transformResponse:function(e,a,t){return{data:e}}}),e.isSpinner=!1})},{scope:"email, public_profile, user_friends, user_birthday"}))}}]),e}();a.NewTempleController=l},function(e,a){"use strict";function t(e,a){if(!(e instanceof a))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(a,"__esModule",{value:!0});var i=function(){function e(e,a){for(var t=0;t<a.length;t++){var i=a[t];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}return function(a,t,i){return t&&e(a.prototype,t),i&&e(a,i),a}}(),l=function(){function e(a,i,l){"ngInject";t(this,e);var n=this;n.appConstants=l,n.$http=a,n.$q=i,n.temples=[]}return e.$inject=["$http","$q","appConstants"],i(e,[{key:"fetchTemples",value:function(){var e=this,a=e.$q.defer();return 0===e.temples.length?e.$http.get(e.appConstants.server.url+"temples").then(function(t){e.temples=t.data.temples,a.resolve(e.temples)},function(e){a.reject(e)}):a.resolve(e.temples),a.promise}},{key:"updateTempleViewed",value:function(e){var a=this,t=a.$q.defer();return a.$http.post(a.appConstants.server.url+"temples/view-temple",{id:e}).then(function(e){t.resolve(e)}),t.promise}},{key:"getTemple",value:function(e){var a=this,t=a.$q.defer();return a.$http.get(a.appConstants.server.url+"temples/view-temple",{id:e}).then(function(e){t.resolve(e)}),t.promise}}]),e}();a.DataService=l}]),angular.module("ayya1008").run(["$templateCache",function(e){e.put("app/home/home.html",'<div ng-controller="HomeController as home" class="home"><div class="parallax-container"><section class="no-pad-bot valign white"><div class="container"><br><div class="row center"><h5 class="header col s12 light orange-text">தினமொரு நேரம் எந்தன் திருமொழி யதனைக் கேட்டால் பனிவெள்ளம் போலே பாவம் பறந்திடும் நிசமே சொன்னோம்.</h5></div><div class="row center"><a href="https://play.google.com/store/apps/details?id=in.iamsugan.ayya1008" class="btn-large waves-effect waves-light blue darken-4">அண்ட்ராய்டு 1008</a></div><br></div></section><div class="parallax"><img src="../assets/images/front.jpg" width="100%"></div></div></div>'),e.put("app/main/main.html",'<ng-include src="\'app/components/navbar/navbar.html\'"></ng-include><div ng-show="!main.isTemplesLoaded" class="progress"><div class="indeterminate"></div></div><ui-view></ui-view><ng-include src="\'app/components/footer/footer.html\'"></ng-include>'),e.put("app/temples/new.html",'<div ng-controller="NewTempleController as newTemple" class="container"><div class="card"><div class="card-content"><div class="card-title">தாங்கலை சேர்க்க</div><form class="col s12"><div class="row"><div class="input-field col s12"><input id="first_name" type="text" ng-model="newTemple.temple.name" required="" class="validate"> <label for="first_name">Temple Name / தாங்கல் பெயர் *</label></div></div><div class="row"><div class="input-field col s12"><textarea ng-model="newTemple.temple.information" class="materialize-textarea"></textarea> <label>Information / தகவல்</label></div></div><div class="row"><div class="input-field col s6"><input id="founded" type="number" min="1800" max="2016" ng-model="newTemple.temple.founded_at" class="validate"> <label for="founded">Founded Year / நிறுவப்பட்ட வருடம்</label></div><div class="input-field col s6"><input id="priest" type="text" ng-model="newTemple.temple.priest_name" class="validate"> <label for="priest">Priest Name / பணிவிடையாளர் பெயர்</label></div></div><div class="row"><div class="input-field col s12"><input id="fb_page_url" type="url" ng-model="newTemple.temple.facebook_page_url" class="validate"> <label for="fb_page_url">Facebook page URL / பேஸ்புக் பக்கம்</label></div></div><div class="row"><div class="input-field col s6"><select multiple="" ng-model="newTemple.temple.cars"><option disabled="" selected="">வாகனங்கள்</option><option value="{{car.id}}" ng-repeat="car in newTemple.cars track by car.id">{{car.name}}</option></select><label>வாகனங்கள்</label></div><div class="input-field col s6"><select ng-model="newTemple.temple.book_month"><option disabled="" selected="">திருஏடு மாதம்</option><option value="{{month}}" ng-repeat="month in newTemple.tamilMonths track by $index">{{month}}</option></select><label>திருஏடு மாதம்</label></div></div><div class="row"><div class="input-field col s6"><input id="village" type="text" ng-model="newTemple.temple.village"> <label for="village">Village / கிராமம்</label></div><div class="input-field col s6"><input id="taluk" type="text" ng-model="newTemple.temple.taluk"> <label for="taluk">Taluk / தாலுகா</label></div></div><div class="row"><div class="input-field col s6"><select ng-model="newTemple.temple.district"><option disabled="" selected="">மாவட்டம்</option><option value="{{district}}" ng-repeat="district in newTemple.districts track by $index">{{district}}</option></select><label>District / மாவட்டம்</label></div><div class="input-field col s6"><input id="pincode" type="number" ng-model="newTemple.temple.pincode"> <label for="pincode">Pincode / அஞ்சல் குறியீடு</label></div></div><div class="row"><div class="input-field col s6"><input id="latitude" type="number" ng-model="newTemple.temple.latitude"> <label for="latitude">Latitude / அட்சரேகை</label></div><div class="input-field col s6"><input id="longitude" type="number" ng-model="newTemple.temple.longitude"> <label for="longitude">Longitude / தீர்க்கரேகை</label></div></div><div class="row center-align"><div ng-class="{active: newTemple.isSpinner}" class="preloader-wrapper big"><div class="spinner-layer spinner-blue-only"><div class="circle-clipper left"><div class="circle"></div></div><div class="gap-patch"><div class="circle"></div></div><div class="circle-clipper right"><div class="circle"></div></div></div></div><button type="submit" name="action" ng-click="newTemple.submit()" ng-show="!newTemple.isSpinner" class="btn waves-effect waves-light">அனுப்பு<i class="material-icons right">send</i></button></div></form></div></div></div>'),e.put("app/temples/temple.html",'<div ng-controller="TempleController as temple" class="temple container"><div class="card-panel blue darken-4 center-align"><h3 class="white-text">{{temple.temple.name}}</h3></div><div ng-if="temple.temple.images &amp;&amp; temple.temple.images.length &gt; 0" class="card-panel"><div class="slider"><ul class="slides"><li ng-repeat="image in temple.temple.images"><img src="{{image}}" height="100%" alt="{{temple.temple.name}}"></li></ul></div></div><div ng-if="temple.temple.information" class="card-panel"><p class="new-line-fix">{{temple.temple.information}}</p></div><div class="card-panel"><div ng-if="temple.temple.founded_at" class="clearfix iconify"><span class="circle">{{temple.temple.founded_at}}</span>துடக்கம்</div><div ng-if="temple.temple.is_primary_thangal" class="clearfix iconify"><img src="assets/images/temple.svg" class="map-icon">அய்யா கால் நாட்டிக் கொடுத்த நிழல்தாங்கள்.</div><div ng-if="temple.temple.priest_name" class="clearfix iconify"><img src="assets/images/priest.svg" class="map-icon">{{temple.temple.priest_name}}</div><div ng-if="temple.temple.book_month" class="clearfix iconify"><img src="assets/images/book.svg" class="map-icon">{{temple.temple.book_month}} மாதம் திரு ஏடு வாசிப்பு நடைபெறும்.</div><div ng-if="temple.temple.cars &amp;&amp; temple.temple.cars.length &gt; 0" class="clearfix iconify"><img src="assets/images/charriot.svg" class="map-icon"><span ng-repeat="car in temple.temple.cars track by car.id">{{car.name}}<span ng-if="!$last">,</span></span></div><div ng-if="temple.temple.views &gt; 1" class="clearfix iconify"><span class="circle">{{temple.temple.views}}</span>முறை பார்க்கப்பட்டுள்ளது</div></div><div ng-if="temple.temple.facebook_page_url" class="card-panel center-align"><div data-href="{{temple.temple.facebook_page_url}}" data-small-header="false" data-adapt-container-width="true" data-hide-cover="false" data-show-facepile="true" class="fb-page"></div></div><div ng-if="temple.temple.latitude" class="card-panel"><div map-lazy-load="https://maps.google.com/maps/api/js?key=AIzaSyCmU_GnOsVq-wNbisGQuxB_6l9e4ZF42N4"><map id="temple-map" center="{{temple.temple.latitude}}, {{temple.temple.longitude}}" zoom="13" default-style="false" style="width: 100%"><marker position="{{temple.temple.latitude}}, {{temple.temple.longitude}}"></marker></map></div></div><div class="card-panel"><div data-href="{{temple.$location.absUrl()}}" data-layout="button_count" data-action="like" data-size="large" data-show-faces="true" data-share="true" class="fb-like"></div></div><div class="card-panel center-align"><div data-href="{{temple.$location.absUrl()}}" data-numposts="5" class="fb-comments"></div></div></div>'),e.put("app/temples/temples.html",'<div ng-controller="TemplesController as temples" class="temples"><div class="container"><div class="row"></div><div class="row"><div class="col s4 right"><ul class="tabs z-depth-1"><li class="tab col s2 active"><a href="#list-view" ng-class="{active: temples.selectedTab===\'list\'}" ng-click="temples.selectedTab=\'list\'">பட்டியல்</a></li><li class="tab col s2"><a href="#map-view" ng-class="{active: temples.selectedTab===\'map\'}" ng-click="temples.selectedTab=\'map\'; temples.initMap()">வரைபடம்</a></li></ul></div></div></div><div ng-show="temples.selectedTab===\'list\'" class="row"><div deckgrid="" source="main.imageTemples" cardtemplate="app/components/temple-card/temple-card.html" class="deckgrid"></div></div><div ng-show="temples.selectedTab===\'map\'" class="row"><div map-lazy-load="https://maps.google.com/maps/api/js?key=AIzaSyCmU_GnOsVq-wNbisGQuxB_6l9e4ZF42N4"><map id="home-map" center="{{main.mapCenter.latitude}}, {{main.mapCenter.longitude}}" zoom="6" default-style="false" lazy-init="true" style="height: calc(100vh - 155px)"><marker position="{{temple.latitude}}, {{temple.longitude}}" ng-repeat="temple in main.mapTemples track by $index"></marker></map></div></div></div><div style="bottom: 45px; right: 24px;" class="fixed-action-btn"><a ui-sref="home.temples.add()" class="btn-floating btn-large red"><i class="large material-icons">add</i></a></div>'),e.put("app/map/map-window.html",'<div class="mapinfowindow"><h3>{{parameter.name}}</h3><div ng-if="parameter.founded_at" class="clearfix m10 lh45"><span class="circle">{{parameter.founded_at}}</span>துடக்கம்</div><div ng-if="parameter.is_primary_thangal" class="clearfix m10 lh45"><img src="assets/images/temple.svg" class="map-icon">அய்யா கால் நாட்டிக் கொடுத்த நிழல்தாங்கள்.</div><div ng-if="parameter.is_book_read &amp;&amp; !parameter.book_month" class="clearfix m10 lh45"><img src="assets/images/book.svg" class="map-icon">திரு ஏடு வாசிப்பு நடைபெறும் நிழல்தாங்கள்.</div><div ng-if="parameter.priest_name" class="clearfix m10 lh45"><img src="assets/images/priest.svg" class="map-icon">{{parameter.priest_name}}</div><div ng-if="parameter.book_month" class="clearfix m10 lh45"><img src="assets/images/book.svg" class="map-icon">{{parameter.book_month}} மாதம் திரு ஏடு வாசிப்பு நடைபெறும்.</div><div ng-if="parameter.cars" class="clearfix m10 lh45"><img src="assets/images/charriot.svg" class="map-icon">{{parameter.cars}}</div></div>'),e.put("app/components/footer/footer.html",'<footer class="page-footer orange"><div class="container"><div class="row"><div class="col l12 s12"><h5 class="white-text">புகுபதிகை</h5><div data-href="https://www.facebook.com/அய்யா-பதிகள்-1670714779914536/" data-small-header="false" data-adapt-container-width="true" data-hide-cover="false" data-show-facepile="true" class="fb-page"><blockquote cite="https://www.facebook.com/அய்யா-பதிகள்-1670714779914536/" class="fb-xfbml-parse-ignore"><a href="https://www.facebook.com/அய்யா-பதிகள்-1670714779914536/">அய்யா 1008</a></blockquote></div></div></div></div><div class="footer-copyright"></div></footer>'),e.put("app/components/navbar/navbar.html",'<div class="navbar-fixed"><nav role="navigation" class="orange lighten-1"><div class="nav-wrapper container"><a id="logo-container" href="/temples" class="brand-logo">அய்யா பதிகள்</a><ul class="right hide-on-med-and-down"><li ui-sref-active="active"><a ui-sref="home.temples.index">கோயில்கள்</a></li><li><a href="https://play.google.com/store/apps/details?id=in.iamsugan.ayya1008" target="_blank" class="play-store"><img src="https://play.google.com/intl/en_us/badges/images/generic/en_badge_web_generic.png" height="64px"></a></li></ul><ul id="nav-mobile" class="side-nav"><li ui-sref-active="active"><a ui-sref="home.temples.index">கோயில்கள்</a></li><li><a href="https://play.google.com/store/apps/details?id=in.iamsugan.ayya1008">அண்ட்ராய்டு 1008</a></li></ul><a href="#" data-activates="nav-mobile" class="button-collapse"><i class="material-icons">menu</i></a></div></nav></div>'),e.put("app/components/temple-card/temple-card.html",'<div class="card hoverable"><div class="card-image"><img src="{{card.images[0]}}" alt="{{card.name}}" class="activator pointer"><span class="card-title">{{card.name}}</span></div><div class="card-content"><p class="line-clamp">{{card.information}}</p></div><div class="card-action"><a ui-sref="home.temples.detail({templeId: card.id})">கோவிலுக்கு செல்</a></div><div class="card-reveal"><span class="card-title grey-text text-darken-4">{{card.name}}<i class="material-icons right">close</i></span><p class="line-clamp new-line-fix">{{card.information}}</p><div ng-if="card.founded_at" class="clearfix iconify"><span class="circle">{{card.founded_at}}</span>துடக்கம்</div><div ng-if="card.is_primary_thangal" class="clearfix iconify"><img src="assets/images/temple.svg" class="map-icon">அய்யா கால் நாட்டிக் கொடுத்த நிழல்தாங்கள்.</div><div ng-if="card.priest_name" class="clearfix iconify"><img src="assets/images/priest.svg" class="map-icon">{{card.priest_name}}</div><div ng-if="card.book_month" class="clearfix iconify"><img src="assets/images/book.svg" class="map-icon">{{card.book_month}} மாதம் திரு ஏடு வாசிப்பு நடைபெறும்.</div><div ng-if="card.cars &amp;&amp; card.cars.length &gt; 0" class="clearfix iconify"><img src="assets/images/charriot.svg" class="map-icon"><span ng-repeat="car in card.cars track by car.id">{{car.name}}<span ng-if="!$last">,</span></span></div></div></div>')}]);
//# sourceMappingURL=../maps/scripts/app-b33826025d.js.map
