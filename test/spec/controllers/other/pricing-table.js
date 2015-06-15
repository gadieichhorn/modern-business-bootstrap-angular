'use strict';

describe('Controller: OtherPricingTableCtrl', function () {

  // load the controller's module
  beforeEach(module('modernbusinessApp'));

  var OtherPricingTableCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    OtherPricingTableCtrl = $controller('OtherPricingTableCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
