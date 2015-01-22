'use strict';

/**
 * @ngdoc function
 * @name angularWeatherApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the angularWeatherApp
 */
angular.module('angularWeatherApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
