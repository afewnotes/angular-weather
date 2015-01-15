'use strict';

describe('Directive: searchBtn', function () {

  // load the directive's module
  beforeEach(module('angularWeatherApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<search-btn></search-btn>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the searchBtn directive');
  }));
});
