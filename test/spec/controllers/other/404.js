'use strict';

describe('Controller: Other404Ctrl', function () {

  // load the controller's module
  beforeEach(module('modernbusinessApp'));

  var Other404Ctrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    Other404Ctrl = $controller('Other404Ctrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
