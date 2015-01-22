'use strict';

describe('Directive: autoCity', function () {

  // load the directive's module
  beforeEach(module('angularWeatherApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should load google object', inject(function ($compile) {
    element = angular.element('<input type="text" auto-city placeholder="Please input city"> ');
    element = $compile(element)(scope);
    expect(element.attr('placeholder')).toBe('Please input city');
    expect(window.google).toEqual(jasmine.any(Object));
  }));
});
