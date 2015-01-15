'use strict';

/**
 * @ngdoc function
 * @name angularWeatherApp.controller:WeatherCtrl
 * @description
 * # WeatherCtrl
 * Controller of the angularWeatherApp
 */
angular.module('angularWeatherApp')
  .controller('WeatherCtrl', function($scope, details) {

    $scope.detail = function() {
      details.day($scope.city).success(function(data) {
        $scope.weatherDetail = data;
      });
    }

    $scope.needShow = function() {
      return weatherDetail && weatherDetail.cod === 200;
    }
  });
