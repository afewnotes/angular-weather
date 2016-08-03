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
    var apiUrl = 'http://api.openweathermap.org/data/2.5/forecast/daily?cnt=7&callback=JSON_CALLBACK&APPID=b9ff3b3708c8ca1d2c46009a94cf428d';
    var params = {};

    // Public API here
    return function (search) {
      var url = apiUrl;
      if (search && search.city) {
        params.q = search.city.replace('Shi', '');
        params.lang = search.lang;
        params.units = search.units;

        $.each(params, function(i, o) {
          url += '&' + i + '=' + o;
        });
        return $http.jsonp(url);
      }
    };
  });
