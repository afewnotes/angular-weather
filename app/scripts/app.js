'use strict';

/**
 * language resources
 */
var translationEN = {
  Language: "Language",
  English: "English",
  Chinese: "Chinese",
  Units: "Units",
  Metric: "Metric",
  Imperial: "Imperial",
  City: "City",
  Please_input_city: "Please input city"
};

var translationZH = {
  Language: "语言",
  English: "英文",
  Chinese: "中文",
  Units: "单位",
  Metric: "摄氏",
  Imperial: "华氏",
  City: "城市",
  Please_input_city: "请输入名称"
};

/**
 * @ngdoc overview
 * @name angularWeatherApp
 * @description
 * # angularWeatherApp
 *
 * Main module of the application.
 */
angular
  .module('angularWeatherApp', [
    'ngAnimate',
    'ngRoute',
    'pascalprecht.translate'
  ])
  .config(function ($translateProvider) {
    $translateProvider.translations('en_us', translationEN);
    $translateProvider.translations('zh_cn', translationZH);
    
    $translateProvider.preferredLanguage('en_us');
  })
  .config(function($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });

    //$locationProvider.html5Mode(true);
  });
