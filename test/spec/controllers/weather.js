'use strict';

describe('Controller: WeatherCtrl', function () {

  // load the controller's module
  beforeEach(module('angularWeatherApp'));

  var WeatherCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    WeatherCtrl = $controller('WeatherCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
