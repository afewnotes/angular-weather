'use strict';

/**
 * @ngdoc directive
 * @name angularWeatherApp.directive:searchBtn
 * @description
 * # searchBtn
 */
angular.module('angularWeatherApp')
  .directive('searchBtn', function (details) {
    return {
      restrict: 'A',
      link: function postLink(scope, element, attrs) {

        // waiting status (for API)
        scope.waiting = true;

        // listen on click event
        element.on('click', function () {
          // show loading... as button text
          var $btn = $(element).button('loading');
          // call MainCtrl api
          details(scope.search).success(function (data) {
            scope.notFoundError = false;
            scope.weathers = data;
            scope.unitFlag = (scope.search.units === 'metric' ? '°C' : '°F');

            //  hide day details div, show list div
            scope.weekFlag = true;
            scope.dayFlag = false;
          }).error(function (data, status) {
            //show error message
            if (status === 404) {
              scope.notFoundError = true;
            }
            //  ...
          }).finally(function () {
            // all completed
            $btn.button('reset');
            // issue on github : #6242. and this is a dirty workaround
            // means it happens after sync flows(when button is reset-ed)
            setTimeout(function() {
              scope.waiting = true;
              scope.$apply();
            }, 0);
          });
        });

      }
    };
  });
