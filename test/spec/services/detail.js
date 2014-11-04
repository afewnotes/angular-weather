'use strict';

describe('Service: Detail', function () {

  // load the service's module
  beforeEach(module('angularWeatherApp'));

  // instantiate service
  var Detail;
  beforeEach(inject(function (_Detail_) {
    Detail = _Detail_;
  }));

  it('should do something', function () {
    expect(!!Detail).toBe(true);
  });

});
