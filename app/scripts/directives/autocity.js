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
      link: function postLink(scope, element) {

        var scopeSup = scope;

        AMap.plugin(['AMap.Autocomplete','AMap.PlaceSearch'],function(){
          var autoOptions = {
            input: "city"//使用联想输入的input的id
          };
          var autocomplete= new AMap.Autocomplete(autoOptions);
          AMap.event.addListener(autocomplete, "select", function(e){
            var geocoder = new AMap.Geocoder();
            //地理编码,返回地理编码结果
            geocoder.getLocation(e.poi.district, function(status, result) {
              if (status === 'complete' && result.info === 'OK') {
                scope.search.location = result.geocodes[0].location;
                scopeSup.waiting = false;
                scopeSup.$apply();
              }
            });
          });
        });

      }
    };
  });
