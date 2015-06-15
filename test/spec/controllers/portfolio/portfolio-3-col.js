'use strict';

describe('Controller: PortfolioPortfolio3ColCtrl', function () {

  // load the controller's module
  beforeEach(module('modernbusinessApp'));

  var PortfolioPortfolio3ColCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    PortfolioPortfolio3ColCtrl = $controller('PortfolioPortfolio3ColCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
