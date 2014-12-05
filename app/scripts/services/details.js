'use strict';

/**
 * @ngdoc service
 * @name angularWeatherApp.details
 * @description
 * # details
 * Factory in the angularWeatherApp.
 */
angular.module('angularWeatherApp')
  .factory('details', function($http) {

    // Public API here
    return {
      day: function(city) {
        if (city) {

          var apiUrl = "http://api.openweathermap.org/data/2.5/weather?q=" + city + "&callback=JSON_CALLBACK";

          console.log(apiUrl);

          return $http.jsonp(apiUrl);
        }
      },
      week: function(search) {
        debugger;
        if (search) {
          var apiUrl = "http://api.openweathermap.org/data/2.5/forecast/daily?cnt=7&q=" + search.city + "&callback=JSON_CALLBACK&lang=" + search.lang + "&units=" + search.units;
          return $http.jsonp(apiUrl);
        }
      }
    };
  });