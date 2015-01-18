'use strict';

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
    'ngRoute'
  ])
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
