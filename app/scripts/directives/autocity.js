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
        //建立一个自动完成的对象
        var ac = new BMap.Autocomplete(
          {
            "input": "suggestId"
          });

        //鼠标放在下拉列表上的事件
        ac.addEventListener("onhighlight", function (e) {
          var str = "";
          var _value = e.fromitem.value;
          var value = "";
          if (e.fromitem.index > -1) {
            value = _value.province + _value.city + _value.district + _value.street + _value.business;
          }
          str = "FromItem<br />index = " + e.fromitem.index + "<br />value = " + value;

          value = "";
          if (e.toitem.index > -1) {
            _value = e.toitem.value;
            value = _value.province + _value.city + _value.district + _value.street + _value.business;
          }
          str += "<br />ToItem<br />index = " + e.toitem.index + "<br />value = " + value;
          // G("searchResultPanel").innerHTML = str;
        });

        var myValue;
        //鼠标点击下拉列表后的事件
        ac.addEventListener("onconfirm", function (e) {
          var _value = e.item.value;
          myValue = _value.province + _value.city + _value.district + _value.street + _value.business;
          // G("searchResultPanel").innerHTML = "onconfirm<br />index = " + e.item.index + "<br />myValue = " + myValue;
          // debugger;

          scopeSup.search.city = myValue;

          scopeSup.waiting = false;
          scopeSup.$apply();
        });

        // var options = {
        //   types: ['(cities)']
        // };
        // var autocomplete = new google.maps.places.Autocomplete(element[0], options);
        // google.maps.event.addListener(autocomplete, 'place_changed', function () {
        //
        //   var place = autocomplete.getPlace();
          // the API doesn't work well with the lat&lng 'cause of the type is float...(always)
          //search.lat = place.geometry.location.lat();
          //search.lng = place.geometry.location.lng();

          //  use short name to request API
          // scopeSup.search.city = place.address_components[0].short_name;

          // after this, change search button's status | enable
          // scopeSup.waiting = false;
          // scopeSup.$apply();
        // });

      }
    };
  });
