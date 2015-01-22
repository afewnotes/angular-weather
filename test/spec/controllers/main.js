'use strict';

describe('Controller: MainCtrl', function () {

  // load the controller's module
  beforeEach(module('angularWeatherApp', 'mockedWeathers'));

  var MainCtrl,
    scope,
    rootScope,
    location,
    jsonWeather;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope, $location, _jsonWeather_) {
    rootScope = $rootScope;
    scope = $rootScope.$new();
    jsonWeather = _jsonWeather_;
    location = $location;
    MainCtrl = $controller('MainCtrl', {
      $scope: scope
    });
  }));

  it('should active Home tab', function() {
    location.path('/');
    rootScope.$apply();
    expect(scope.isActive('/')).toBe(true);
  });

  it('should active About tab', function() {
    location.path('/about');
    rootScope.$apply();
    expect(scope.isActive('/about')).toBe(true);
  });

  it('should select Language as English, Units as Imperial by default', function () {
    var options = {
      lang: scope.search.lang,
      units: scope.search.units
    }
    expect(options).toEqual({lang: 'en_us', units: 'imperial'});
  });

  it('should set week and day flags to false by default', function () {
    expect(scope.weekFlag).toBe(false);
    expect(scope.dayFlag).toBe(false);
  });

  it('should show day data of wuhan', function() {
    scope.search.city = 'wuhan';
    scope.weathers = jsonWeather;
    expect(scope.weather).toBeUndefined();
    scope.day(1421899200);
    expect(scope.weather).toEqual({
      "dt": 1421899200,
      "temp": {"day": 52.47, "min": 34.02, "max": 57.13, "night": 34.02, "eve": 55.09, "morn": 52.47},
      "pressure": 1031.69,
      "humidity": 46,
      "weather": [{"id": 800, "main": "Clear", "description": "sky is clear", "icon": "01d"}],
      "speed": 4.47,
      "deg": 79,
      "clouds": 0
    });
  });

  it('should toggle day and week div', function() {
    scope.weekFlag = true;
    scope.dayFlag = false;
    scope.toggle();
    expect(scope.weekFlag).toBe(false);
    expect(scope.dayFlag).toBe(true);
  });

  it('should show week div', function() {
    scope.weekFlag = true;
    scope.notFoundError = '';
    expect(scope.showWeek()).toBe(true);
  });

  it('should show day div', function() {
    scope.dayFlag = true;
    expect(scope.showDay()).toBe(true);
  })
});
