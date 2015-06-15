'use strict';

describe('Controller: OtherFaqCtrl', function () {

  // load the controller's module
  beforeEach(module('modernbusinessApp'));

  var OtherFaqCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    OtherFaqCtrl = $controller('OtherFaqCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
