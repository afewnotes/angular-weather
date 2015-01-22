'use strict';

describe('Directive: searchBtn', function () {

  // load the directive's module
  beforeEach(module('angularWeatherApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should disable button', inject(function ($compile) {
    element = angular.element('<button class="btn btn-primary btn-sm"\n        data-loading-text="Loading..." autocomplete="off"\n        ng-disabled="form.$invalid || waiting" search-btn>');
    element = $compile(element)(scope);
    expect(scope.waiting).toBe(true);
  }));
});
