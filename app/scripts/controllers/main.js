'use strict';

/**
 * @ngdoc function
 * @name angularWeatherApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the angularWeatherApp
 */
angular.module('angularWeatherApp')
  .controller('MainCtrl', function ($scope, $location, $translate) {

    // hide error alert by default
    $scope.notFoundError = false;
    // language & units default selected
    $scope.search = {};
    $scope.search.lang = 'en_us';
    $scope.search.units = 'imperial';

    // data results object
    $scope.weathers = {};

    // flags for week and day toggle
    $scope.weekFlag = false;
    $scope.dayFlag = false;

    // active tab
    $scope.isActive = function(route) {
      return route === $location.path();
    };

    // nav to day page
    $scope.day = function (date) {
      //  hide list div, show day details div
      $scope.toggle();
      //  find the data of the selected date in weathers
      $scope.weather = $scope.weathers.list.filter(function (item) {
        return item.dt === date;
      })[0];
    };

    // toggle week and day div
    $scope.toggle = function () {
      $scope.weekFlag = !$scope.weekFlag;
      $scope.dayFlag = !$scope.dayFlag;
    };

    // week list details
    $scope.showWeek = function () {
      return !$scope.notFoundError && $scope.weekFlag;
    };
    // show day details
    $scope.showDay = function () {
      return $scope.dayFlag;
    };

    $scope.changeLanguage = function () {
      $translate.use($scope.search.lang);
    }

  });
