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

          var apiUrl = "http://api.openweathermap.org/data/2.5/weather?q=" + city
            + "&callback=JSON_CALLBACK";

          return $http.jsonp(apiUrl);
        }
      },
      week: function(search) {
        if (search && search.city) {

          // not reliable API when using lat & lon
          /*// try to use lat & lng as parameters
          if (search.lat && search.lng) {
            location = "lat=" + search.lat + "&lon=" + search.lng;
          }*/
          var apiUrl = "http://api.openweathermap.org/data/2.5/forecast/daily?cnt=7&q=" + search.city
            + "&callback=JSON_CALLBACK&lang=" + search.lang
            + "&units=" + search.units;
          return $http.jsonp(apiUrl);
        }
      }
    };
  });
