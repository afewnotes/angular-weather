'use strict';

/**
 * @ngdoc function
 * @name angularWeatherApp.controller:WeatherCtrl
 * @description
 * # WeatherCtrl
 * Controller of the angularWeatherApp
 */
angular.module('angularWeatherApp')
  .controller('WeatherCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
