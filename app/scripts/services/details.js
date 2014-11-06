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
      week: function(city) {
        debugger;
        if (city) {
          var apiUrl = "http://api.openweathermap.org/data/2.5/forecast/daily?cnt=7&q=" + city + "&callback=JSON_CALLBACK&lang=" + "zh_cn" + "&units=" + "metric" + "&APPID=1bb8aaab54671b48242f9a892b6c0374";
          return $http.jsonp(apiUrl);
        }
      }
    };
  });