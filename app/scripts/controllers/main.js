'use strict';

/**
 * @ngdoc function
 * @name angularWeatherApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the angularWeatherApp
 */
angular.module('angularWeatherApp')
  .controller('MainCtrl', function($scope, details) {
    $scope.title = "Weather";
    $scope.unitFlag = "C"

    $scope.searchWeather = function() {
      details.week($scope.city).success(function(data) {
        $scope.weathers = data;
      });
    };

    $scope.needShow = function() {
      return $scope.weathers && $scope.weathers.cod === '200';
    };
  });