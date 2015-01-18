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

    // waiting status (for API)
    $scope.waiting = true;

    // data results object
    $scope.weathers = {};

    // flags for week and day toggle
    $scope.weekFlag = false;
    $scope.dayFlag = false;

    // expose an API to directive
    $scope.week = function () {
      return details($scope.search).success(function (data) {
        $scope.notFoundError = false;
        $scope.weathers = data;
        $scope.unitFlag = ($scope.search.units == 'metric' ? '°C' : '°F');

        //  hide day details div, show list div
        $scope.weekFlag = true;
        $scope.dayFlag = false;
      }).error(function (data, status) {
        //show error message
        if (status === 404) {
          $scope.notFoundError = true;
        }
        //  ...
      });
    }

    // nav to day page
    $scope.day = function (date) {
      //  hide list div, show day details div
      $scope.weekFlag = false;
      $scope.dayFlag = true;
      //  find the data of the selected date in weathers
      $scope.weather = $scope.weathers.list.filter(function (item) {
        return item.dt === date;
      })[0];

    }

    // toggle week and day div
    $scope.toggle = function () {
      $scope.weekFlag = !$scope.weekFlag;
      $scope.dayFlag = !$scope.dayFlag;
    }

    // week list details
    $scope.showWeek = function () {
      return !$scope.notFoundError
        && $scope.weekFlag;
    };
    // show day details
    $scope.showDay = function () {
      return $scope.dayFlag;
    }

  });
