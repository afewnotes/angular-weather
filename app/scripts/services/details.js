'use strict';

/**
 * @ngdoc service
 * @name angularWeatherApp.details
 * @description
 * # details
 * Factory in the angularWeatherApp.
 */
angular.module('angularWeatherApp')
  .factory('details', function () {
    // Service logic
    // ...

    var meaningOfLife = 42;

    // Public API here
    return {
      someMethod: function () {
        return meaningOfLife;
      }
    };
  });
