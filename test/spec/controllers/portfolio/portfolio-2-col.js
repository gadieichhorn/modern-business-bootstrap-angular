'use strict';

describe('Controller: PortfolioPortfolio2ColCtrl', function () {

  // load the controller's module
  beforeEach(module('modernbusinessApp'));

  var PortfolioPortfolio2ColCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    PortfolioPortfolio2ColCtrl = $controller('PortfolioPortfolio2ColCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
