'use strict';

describe('Service: details', function () {

  // load the service's module
  beforeEach(module('angularWeatherApp'));

  // instantiate service
  var details;
  beforeEach(inject(function (_details_) {
    details = _details_;
  }));

  it('should return some data', function () {
    var search = {
      city: 'wuhan',
      lang: 'en',
      units: 'imperial'
    };
    var result, error;
    details(search).success(function (data) {
      result = data;
    }).error(function (e) {
      error = e;
    }).finally(function () {
      expect(result.city.name).toBe('Wuhan');
    });

  });

});
