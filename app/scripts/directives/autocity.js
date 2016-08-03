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
            scopeSup.search.city = Pinyin.getFullChars(e.poi.name);

            scopeSup.waiting = false;
            scopeSup.$apply();
          });
        });

      }
    };
  });
