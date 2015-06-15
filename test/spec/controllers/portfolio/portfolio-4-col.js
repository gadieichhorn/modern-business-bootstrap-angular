'use strict';

describe('Controller: PortfolioPortfolio4ColCtrl', function () {

  // load the controller's module
  beforeEach(module('modernbusinessApp'));

  var PortfolioPortfolio4ColCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    PortfolioPortfolio4ColCtrl = $controller('PortfolioPortfolio4ColCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
