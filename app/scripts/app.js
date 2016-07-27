'use strict';

/**
 * language resources
 */
var translationEN = {
  Home: "Home",
  About: "About",
  Language: "Language",
  English: "English",
  Chinese: "Chinese",
  Search: "Search",
  Units: "Units",
  Metric: "Metric",
  Imperial: "Imperial",
  City: "City",
  Please_input_city: "Please input city",
  Error: "Error",
  City_not_found: "This city is not found, please check you input...",
  Wind: "Wind",
  Pressure: "Pressure",
  Humidity: "Humidity",
  Day: "Day",
  Eve: "Evening",
  Night: "Night"
};

var translationZH = {
  Home: "首页",
  About: "关于",
  Language: "语言",
  English: "英文",
  Chinese: "中文",
  Search: "搜索",
  Units: "单位",
  Metric: "摄氏",
  Imperial: "华氏",
  City: "城市",
  Please_input_city: "请输入名称",
  Error: "错误",
  City_not_found: "未找到该城市，请重新输入……",
  Wind: "风速",
  Pressure: "压力",
  Humidity: "湿度",
  Day: "白天",
  Eve: "傍晚",
  Night: "夜间"
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
