'use strict';

/**
 * @ngdoc function
 * @name angularWeatherApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the angularWeatherApp
 */
angular.module('angularWeatherApp')
  .controller('MainCtrl', function($scope, $http) {
    $scope.title = "Weather";
    $scope.unitFlag = "C"

    $scope.searchWeather = function() {
      var apiUrl = "http://api.openweathermap.org/data/2.5/forecast/daily?cnt=7&q=" + $scope.city + "&callback=JSON_CALLBACK&lang=" + "zh_cn" + "&units=" + "metric" + "&APPID=1bb8aaab54671b48242f9a892b6c0374";
      $http
        .jsonp(apiUrl)
        .success(function(result) {
          $scope.weathers = result;
        });
    };

    $scope.needShow = function() {
      return $scope.weathers && $scope.weathers.cod === '200';
    };
  });