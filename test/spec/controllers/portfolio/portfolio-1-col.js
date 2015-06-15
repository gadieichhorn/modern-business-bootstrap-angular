'use strict';

describe('Controller: PortfolioPortfolio1ColCtrl', function () {

  // load the controller's module
  beforeEach(module('modernbusinessApp'));

  var PortfolioPortfolio1ColCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    PortfolioPortfolio1ColCtrl = $controller('PortfolioPortfolio1ColCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope).toBe(null);
  });
});
