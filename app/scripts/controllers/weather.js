'use strict';

/**
 * @ngdoc function
 * @name angularWeatherApp.controller:WeatherCtrl
 * @description
 * # WeatherCtrl
 * Controller of the angularWeatherApp
 */
angular.module('angularWeatherApp')
  .controller('WeatherCtrl', function($scope, $route, $routeParams, details) {

    $scope.detail = details($scope.search);

    $scope.needShow = function() {
      return weatherDetail && weatherDetail.cod === 200;
    }
  });
