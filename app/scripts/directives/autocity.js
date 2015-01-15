'use strict';

/**
 * @ngdoc directive
 * @name angularWeatherApp.directive:autoCity
 * @description
 * # autoCity
 */
angular.module('angularWeatherApp')
  .directive('autoCity', function () {
    return {
      restrict: 'A',
      //require: 'MainCtrl',
      link: function postLink(scope, element, attrs) {
        var options = {
          types: ['(cities)']
        };
        var scopeSup = scope;
        var autocomplete = new google.maps.places.Autocomplete(element[0], options);
        google.maps.event.addListener(autocomplete, 'place_changed', function () {

          var place = autocomplete.getPlace();
          // the API doesn't work well with the lat&lng 'cause of the type is float...(always)
          //search.lat = place.geometry.location.lat();
          //search.lng = place.geometry.location.lng();

          //  use short name to request API
          scopeSup.search.city = place.address_components[0].short_name;

          // after this, change search button's status | enable
          scopeSup.waiting = false;
          scopeSup.$apply();
        });

      }
    };
  });
