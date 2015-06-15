'use strict';

describe('Controller: OtherFullWidthCtrl', function () {

  // load the controller's module
  beforeEach(module('modernbusinessApp'));

  var OtherFullWidthCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    OtherFullWidthCtrl = $controller('OtherFullWidthCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
