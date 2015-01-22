'use strict';

/**
 * @ngdoc service
 * @name angularWeatherApp.details
 * @description
 * # details
 * Factory in the angularWeatherApp.
 */
angular.module('angularWeatherApp')
  .factory('details', function ($http) {
    // not reliable API when using lat & lon
    /*// try to use lat & lng as parameters
     if (search.lat && search.lng) {
     location = 'lat=' + search.lat + '&lon=' + search.lng;
     }*/
    // basic API url
    var apiUrl = 'http://api.openweathermap.org/data/2.5/forecast/daily?cnt=7&callback=JSON_CALLBACK';

    // Public API here
    return function (search) {
      if (search && search.city) {
        apiUrl += '&q=' + search.city + '&lang=' + search.lang + '&units=' + search.units;
        return $http.jsonp(apiUrl);
      }
    };
  });
