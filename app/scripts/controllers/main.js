'use strict';

/**
 * @ngdoc function
 * @name angularWeatherApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the angularWeatherApp
 */
angular.module('angularWeatherApp')
  .controller('MainCtrl', function ($scope, details) {
    // hide error alert by default
    $scope.notFoundError = false;
    // language & units default selected
    $scope.search = {};
    $scope.search.lang = "en_us";
    $scope.search.units = "imperial";

    // data found and returned
    $scope.needShow = function () {
      return !$scope.notFoundError
        && $scope.weathers
        && $scope.weathers.cod === '200';
    };

  });
