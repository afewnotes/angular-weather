'use strict';

/**
 * @ngdoc function
 * @name angularWeatherApp.controller:WeatherCtrl
 * @description
 * # WeatherCtrl
 * Controller of the angularWeatherApp
 */
angular.module('angularWeatherApp')
  .controller('WeatherCtrl', function($scope, $http) {

    $scope.detail = function() {
      var apiUrl = "http://api.openweathermap.org/data/2.5/weather?q=" + $scope.city + "&callback=JSON_CALLBACK";
      $http
        .jsonp(apiUrl)
        .success(function(result) {
          $scope.weatherDetail = result;
        });
    };
  });